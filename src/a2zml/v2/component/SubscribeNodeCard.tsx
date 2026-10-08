import { Card, Typography, Space, Tag, Button, Input, Empty } from '@douyinfe/semi-ui'
import { IconCopy } from '@douyinfe/semi-icons'
import { type iSubscribeNode } from '../Data'
import { useCopy } from '../../../module/useCopy'

const SubscribeNodeCard = ({ data }: { data: iSubscribeNode }) => {
    const { title, platform = [], url } = data
    const copy = useCopy()

    return (
        <Card
            shadows='hover'
            style={{ width: '100%', borderRadius: 8 }}
            bodyStyle={{ padding: '16px' }}
        >
            {/* 标题：只渲染一次 */}
            <Typography.Paragraph
                ellipsis={{ rows: 2, suffix: ' ' }}
                style={{ width: '100%', marginBottom: 8, fontWeight: 600 }}
            >
                {title}
            </Typography.Paragraph>

            {/* 平台标签：为空时不占位 */}
            {platform.length > 0 && (
                <Space
                    align='center'
                    wrap
                    style={{ width: '100%', marginBottom: 12 }}
                >
                    {platform.map((item) => (
                        <Tag
                            key={item}
                            colorful
                            type='light'
                            shape='circle'
                            gradient
                        >
                            {item}
                        </Tag>
                    ))}
                </Space>
            )}

            {/* URL 输入框 + 复制按钮 并排 */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    width: '100%',
                }}
            >
                <Input
                    value={url}
                    readOnly
                    size='default'
                    style={{ flex: 1, minWidth: 0 }}
                    onFocus={(e) => e.target.select()}
                />
                <Button
                    icon={<IconCopy />}
                    theme='solid'
                    type='primary'
                    onClick={() => copy(url)}
                    style={{ flexShrink: 0 }}
                >
                    复制
                </Button>
            </div>
        </Card>
    )
}

export default SubscribeNodeCard