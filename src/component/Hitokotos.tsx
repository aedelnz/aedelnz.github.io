import { Button, Empty, Typography } from '@douyinfe/semi-ui';
import { useRequest } from '../hook/useRequest';

interface HitokotoResponse {
  hitokoto: string;
  from: string;
  from_who: string | null;
}

const Hitokotos = () => {
  const { data, loading, error, run } = useRequest<HitokotoResponse>('https://v1.hitokoto.cn/');

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <Empty
        style={{ width: '100%', margin: '0 auto', padding: '12px 8px', textAlign: 'center' }}
        title={loading ? '加载中...' : undefined}
        image={null}
        layout="vertical"
        description={
          data && !loading ? (
            <>
              <Typography.Title style={{ marginBottom: 12, textAlign: 'start' }}>
                {data.hitokoto}
              </Typography.Title>
              <Typography.Paragraph type="secondary" style={{ textAlign: 'end', marginBottom: 0 }}>
                —— {data.from_who || '佚名'}《{data.from}》
              </Typography.Paragraph>
            </>
          ) : null
        }
      >
        {error && <Typography.Text type="danger">加载失败：{error.message}</Typography.Text>}
        <Button
          type="primary"
          theme="solid"
          onClick={run}
          disabled={loading}
          style={{ display: 'block', margin: '16px auto 0' }}
        >
          换一句
        </Button>
      </Empty>
    </div>
  );
};

export default Hitokotos;