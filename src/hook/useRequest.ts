import { useCallback, useEffect, useRef, useState } from 'react';

/** 请求方法 */
type Method = 'GET' | 'POST';

/** 请求配置 */
interface Options<T> {
  /** 请求方法，默认 GET */
  method?: Method;
  /** POST 请求体 */
  body?: unknown;
  /** 是否在挂载时自动请求，默认 true（仅 GET 生效） */
  immediate?: boolean;
  /** 成功回调 */
  onSuccess?: (data: T) => void;
  /** 失败回调 */
  onError?: (error: Error) => void;
}

/** 返回值 */
interface Result<T> {
  data: T | undefined;
  loading: boolean;
  error: Error | null;
  /** 手动触发请求 */
  run: (overrideBody?: unknown) => Promise<T | undefined>;
}

/**
 * 通用请求 Hook，支持 GET / POST
 * @param url 请求地址
 * @param options 配置项
 *
 * @example
 * const { data, loading, error, run } = useRequest<User[]>('/api/users');
 * const { run: submit } = useRequest('/api/login', { method: 'POST', immediate: false });
 */
export function useRequest<T = unknown>(
  url: string,
  options: Options<T> = {},
): Result<T> {
  const { method = 'GET', body, immediate = true, onSuccess, onError } = options;

  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  /** 用 ref 保存最新的回调，避免作为依赖导致 run 频繁重建 */
  const callbacksRef = useRef({ onSuccess, onError });

  /** 组件卸载标记，防止 setState 警告 */
  const mountedRef = useRef(true);

  /**
   * 同步最新的回调与 body
   * 放在 effect 里而不是渲染中，规避 react-hooks/refs 规则
   */
  useEffect(() => {
    callbacksRef.current = { onSuccess, onError };
  }, [onSuccess, onError]);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  /** 核心请求逻辑 */
  const run = useCallback(
    async (overrideBody?: unknown): Promise<T | undefined> => {
      setLoading(true);
      setError(null);
      try {
        const isPost = method === 'POST';
        const payload = overrideBody !== undefined ? overrideBody : body;

        const res = await fetch(url, {
          method,
          headers: isPost ? { 'Content-Type': 'application/json' } : undefined,
          body: isPost ? JSON.stringify(payload ?? {}) : undefined,
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);

        const json = (await res.json()) as T;
        if (!mountedRef.current) return;

        setData(json);
        callbacksRef.current.onSuccess?.(json);
        return json;
      } catch (e) {
        const err = e instanceof Error ? e : new Error(String(e));
        if (!mountedRef.current) return;
        setError(err);
        callbacksRef.current.onError?.(err);
        return undefined;
      } finally {
        if (mountedRef.current) setLoading(false);
      }
    },
    [url, method, body],
  );

  /**
   * 挂载自动请求（仅 GET）
   * 用微任务包一层，避免 effect 内同步 setState 触发级联渲染
   */
  useEffect(() => {
    if (!immediate || method !== 'GET') return;
    const timer = setTimeout(run, 0);
    return () => clearTimeout(timer);
  }, [immediate, method, run]);

  return { data, loading, error, run };
}

// src/pages/UserList.tsx
// import { Spin, Table, Typography } from '@douyinfe/semi-ui';
// import { useRequest } from '@/hooks/useRequest';
//
// interface User {
//   id: number;
//   name: string;
//   email: string;
// }
//
// export default function UserList() {
//   const { data, loading, error } = useRequest<User[]>('/api/users');
//
//   if (error) return <Typography.Text type="danger">加载失败：{error.message}</Typography.Text>;
//
//   return (
//     <Spin spinning={loading}>
//       <Table
//         dataSource={data ?? []}
//         rowKey="id"
//         columns={[
//           { title: 'ID', dataIndex: 'id' },
//           { title: '姓名', dataIndex: 'name' },
//           { title: '邮箱', dataIndex: 'email' },
//         ]}
//       />
//     </Spin>
//   );
// }

// // src/pages/Login.tsx
// import { Button, Card, Form, Toast } from '@douyinfe/semi-ui';
// import { useRequest } from '@/hooks/useRequest';
//
// interface LoginParams {
//   username: string;
//   password: string;
// }
// interface LoginResult {
//   token: string;
// }
//
// export default function Login() {
//   const { loading, run: login } = useRequest<LoginResult>('/api/login', {
//     method: 'POST',
//     immediate: false,
//     onSuccess: (res) => {
//       localStorage.setItem('token', res.token);
//       Toast.success('登录成功');
//     },
//     onError: (err) => Toast.error(err.message),
//   });
//
//   const handleSubmit = (values: LoginParams) => {
//     login(values);
//   };
//
//   return (
//     <Card title="登录" style={{ maxWidth: 360, margin: '80px auto' }}>
//       <Form onSubmit={handleSubmit}>
//         <Form.Input field="username" label="用户名" rules={[{ required: true }]} />
//         <Form.Input field="password" label="密码" mode="password" rules={[{ required: true }]} />
//         <Button
//           theme="solid"
//           htmlType="submit"
//           loading={loading}
//           style={{ marginTop: 16, width: '100%' }}
//         >
//           登录
//         </Button>
//       </Form>
//     </Card>
//   );
// }
