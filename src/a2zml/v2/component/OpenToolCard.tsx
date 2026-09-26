import { Card, Typography, Avatar, Popover, Space, Tag } from '@douyinfe/semi-ui'
import { type iOpenTool } from '../Data'

const OpenToolCard = ({ data }: { data: iOpenTool }) => {
    const { title, description, platform = [], github, image } = data
    return (
        <Card
            shadows='hover'
            style={{ width: '100%' }}
            bodyStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px' }}
            cover={
                <div style={{ position: 'relative', height: 200 }} onClick={() => { window.open(github, '_blank') }}>
                    <Avatar style={{ height: 200, width: '100%' }} shape="square" size="default" src={image} />
                    <Space
                        align='center'
                        style={{ position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%', padding: '8px', boxSizing: 'border-box' }}>
                        {platform.map((item, index) => (
                            <Tag key={index} colorful type="solid" shape='circle' gradient>{item}</Tag>
                        ))}
                    </Space>
                </div>
            }
        >
            <div onClick={() => { window.open(github, '_blank') }}>
                <Popover
                    position='top'
                    content={
                        <article style={{ padding: 6 }}>
                            {description}
                        </article>
                    }
                >
                    <Card.Meta
                        title={<Typography.Paragraph ellipsis={{ suffix: ' ' }} style={{ width: '100% ' }}>{title}</Typography.Paragraph>}
                        description={<Typography.Paragraph ellipsis={{ suffix: ' ' }} style={{ width: '100% ' }}>{description}</Typography.Paragraph>}

                    />
                </Popover>
            </div>
        </Card>
    )
}

export default OpenToolCard