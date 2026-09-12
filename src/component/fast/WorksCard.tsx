import { Card, Typography, Avatar, Button, Popover, Space, Tag } from '@douyinfe/semi-ui'
import { type iOtherWorks } from '../../Data'
import { IconForward } from '@douyinfe/semi-icons'

const WorksCard = ({ data }: { data: iOtherWorks }) => {
    const { status, title, description, tag, label, image, link } = data
    return (
        <Card
            shadows='hover'
            style={{
                width: '100%'
            }}
            bodyStyle={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
            }}
            cover={
                <div
                    style={{
                        position: 'relative',
                        height: 200
                    }}>
                    <Avatar
                        style={{ height: 200, width: '100%' }}
                        shape="square"
                        size="default"
                        src={`https://img02.sogoucdn.com/v2/thumb/retype_exclude_gif/ext/auto/q/95/crop/xy/ai/t/0/?appid=122&url=https://jixiejidiguan.top${image}`}
                    />
                    <Space
                        align='center'
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            width: '100%',
                            padding: '8px',
                            boxSizing: 'border-box',
                        }}
                    >
                        <Tag colorful type="light" shape='circle'>{tag}</Tag>
                        <Tag colorful type="light" shape='circle'>{label}</Tag>
                        <Tag colorful type="light" shape='circle'>{status}</Tag>
                    </Space>
                </div>
            }
        >
            <Popover
                position='top'
                showArrow
                content={
                    <article style={{ padding: 6 }}>
                        {description}
                    </article>
                }
            >
                <Card.Meta
                    title={<Typography.Paragraph ellipsis={{ suffix: '.' }} style={{ width: '100% ' }}>{title}</Typography.Paragraph>}
                    description={<Typography.Paragraph ellipsis={{ suffix: ' ' }} style={{ width: '100% ' }}>{description}</Typography.Paragraph>}

                />
            </Popover>
            <Button
                type="primary"
                icon={<IconForward />}
                onClick={() => { window.open(link, '_blank') }}
            />
        </Card>
    )
}

export default WorksCard