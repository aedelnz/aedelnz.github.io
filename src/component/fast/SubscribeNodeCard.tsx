
import { Card, Typography, Space, Tag } from '@douyinfe/semi-ui'
import { type iSubscribeNode } from '../../a2zml/v2/Data'

const SubscribeNodeCard = ({ data }: { data: iSubscribeNode }) => {
    const { title, platform = [], url } = data
    return (
        <Card
            shadows='hover'
            style={{
                width: '100%'
            }}
            bodyStyle={{
                padding: '12px 16px',
            }}
        >
            <Card.Meta
                title={<Typography.Paragraph ellipsis={{ suffix: ' ' }} style={{ width: '100% ' }}>{title}</Typography.Paragraph>}

            />
            <Space
                align='center'
                style={{
                    width: '100%',
                    padding: '8px',
                    boxSizing: 'border-box',
                }}
            >
                {platform.map((item, index) => (
                    <Tag key={index} colorful type="light" shape='circle' gradient>{item}</Tag>
                ))}
            </Space>
            <Typography.Paragraph ellipsis={{ suffix: ' ' }} copyable={{ content: `${url}` }}>{url}</Typography.Paragraph>
        </Card>
    )
}

export default SubscribeNodeCard