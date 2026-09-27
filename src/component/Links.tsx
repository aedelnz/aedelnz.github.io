import { Typography, List, Button, Card, Avatar, Popover } from '@douyinfe/semi-ui';
import { IconAIFilledLevel1 } from '@douyinfe/semi-icons/lib/es/icons';
import { FriendLinks, type iFriendlyLinks } from '../Data';
import { IconShare } from '@douyinfe/semi-icons'

const shuffle = (arr: iFriendlyLinks[]) =>
    [...arr].sort(() => Math.random() - 0.5);

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

const Links = () => {
    const data = shuffle(FriendLinks);
    const itemStyle = { margin: '8px 2px' };

    return (
        <section id="links" style={{ margin: '16px 0' }}>
            <Typography.Title heading={3}>友情链接</Typography.Title>
            <Typography.Paragraph>列表排名不分先后，随机排序。</Typography.Paragraph>

            <List
                grid={{ gutter: 12, xs: 24, sm: 12, md: 12, lg: 8, xl: 8, xxl: 6 }}
                dataSource={data}
                renderItem={item => (
                    <List.Item style={itemStyle}>
                        <LinksCard data={item} />
                    </List.Item>
                )}
                style={{ margin: '12px 0' }}
            />

            <Button
                colorful
                theme="solid"
                type="primary"
                icon={<IconAIFilledLevel1 />}
                iconPosition="right"
                onClick={() => window.open('https://wj.qq.com/s2/25425052/c669/', '_blank')}
            >
                友情链接申请
            </Button>
        </section>
    );
};

export default Links;
