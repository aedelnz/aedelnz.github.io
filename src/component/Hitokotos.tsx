import { Button, Empty, Typography } from '@douyinfe/semi-ui'
import { useHitokoto } from './lib/Hitokotos'

const Hitokotos = () => {
    const { data, loading, refresh } = useHitokoto()
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
            }}
        >
            <Empty
                style={{
                    width: '100%',
                    margin: '0 auto',
                    padding: `12px 8px`,
                    textAlign: 'center',
                }}
                title={loading && '加载中...'}
                image={null}
                layout="vertical"
                description={data && !loading && (
                    <>
                        <Typography.Title style={{ marginBottom: '12px', textAlign: 'start' }}>{data.hitokoto}</Typography.Title>
                        <Typography.Paragraph type="secondary" style={{ textAlign: 'end', marginBottom: 0, }}>—— {data.from_who || '佚名'}《{data.from}》</Typography.Paragraph>
                    </>
                )}
            >
                <Button
                    type="primary"
                    theme="solid"
                    onClick={refresh}
                    disabled={loading}
                    style={{ display: 'block', margin: '16px auto 0' }}
                >
                    {loading ? '刷新中...' : '换一句'}
                </Button>
            </Empty>
        </div>
    )
}

export default Hitokotos