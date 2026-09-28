import { Typography, List, Button, Card, Avatar } from '@douyinfe/semi-ui';
import { IconAIFilledLevel1 } from '@douyinfe/semi-icons/lib/es/icons';
import { IconShare } from '@douyinfe/semi-icons';
import { FriendLinks, type iFriendlyLinks } from '../Data';

const shuffle = (arr: iFriendlyLinks[]) => [...arr].sort(() => Math.random() - 0.5);

const LinksCard = ({ data: { title, description, image, link } }: { data: iFriendlyLinks }) => {
    const open = () => window.open(link, '_blank');

    return (
    <div style={{ width: '100%' }} onClick={open}>
        <Card
            shadows="hover"
            style={{ width: '100%', cursor: 'pointer' }}
            bodyStyle={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 16px',
            }}
        >
            <Avatar shape="square" src={image} alt={title} />

            <div style={{ flex: 1, minWidth: 0 }}>
                <Typography.Text
                    strong
                    ellipsis={{ showTooltip: true }}
                    style={{ display: 'block', width: '100%' }}
                >
                    {title}
                </Typography.Text>
                <Typography.Text
                    type="tertiary"
                    size="small"
                    ellipsis={{ showTooltip: true }}
                    style={{ display: 'block', width: '100%' }}
                >
                    {description}
                </Typography.Text>
            </div>

            <Button
                theme="borderless"
                type="primary"
                icon={<IconShare />}
                aria-label="访问链接"
                onClick={e => {
                    e.stopPropagation();
                    open();
                }}
            />
        </Card>
    </div>
    );
};

const Links = () => (
    <section id="links" style={{ margin: '16px 0' }}>
        <Typography.Title heading={3}>友情链接</Typography.Title>
        <Typography.Paragraph>列表排名不分先后，随机排序。</Typography.Paragraph>

        <List
            grid={{ gutter: 12, xs: 24, sm: 12, md: 12, lg: 8, xl: 8, xxl: 6 }}
            dataSource={shuffle(FriendLinks)}
            renderItem={item => (
                <List.Item style={{ margin: '8px 2px' }}>
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

export default Links;