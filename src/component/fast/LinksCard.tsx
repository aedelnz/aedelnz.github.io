import { Card, Typography, Avatar, Button, Popover } from '@douyinfe/semi-ui'
import { IconShare } from '@douyinfe/semi-icons'
import { type iFriendlyLinks } from '../../Data'

const LinksCard = ({ data }: { data: iFriendlyLinks }) => {
    const { title, description, image, link } = data
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
                    avatar={
                        <Avatar
                            shape="square"
                            size="default"
                            src={image}
                        />
                    }
                />
            </Popover>
            <Button
                type="danger"
                icon={<IconShare />}
                onClick={() => { window.open(link, '_blank') }}
            />
        </Card>
    )
}

export default LinksCard