import { useCallback, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const set = useCallback((v: T | ((prev: T) => T)) => {
    const next = typeof v === 'function' ? (v as (prev: T) => T)(value) : v;
    setValue(next);
    window.localStorage.setItem(key, JSON.stringify(next));
  }, [key, value]);

  const remove = useCallback(() => {
    window.localStorage.removeItem(key);
    setValue(initialValue);
  }, [key, initialValue]);

  return [value, set, remove] as const;
}
// src/components/Counter.tsx
//import { Button, Space, Typography } from '@douyinfe/semi-ui';
//import { useLocalStorage } from '@/hooks/useLocalStorage';

//export default function Counter() {
//  const [count, setCount, reset] = useLocalStorage('counter', 0);

//  return (
//    <Space vertical align="start">
//      <Typography.Title heading={4}>计数：{count}</Typography.Title>
//      {/* 直接赋值 */}
//      <Space>
//        <Button onClick={() => setCount(count + 1)}>+1</Button>
//        <Button onClick={() => setCount(count - 1)}>-1</Button>
//      </Space>
//      {/* 函数式更新，避免闭包陷阱 */}
//      <Space>
//        <Button theme="solid" onClick={() => setCount((prev) => prev + 10)}>+10</Button>
//        <Button type="danger" onClick={reset}>重置</Button>
//      </Space>
//    </Space>
//  );
//}