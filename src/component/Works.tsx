import { Typography, List, Card, Avatar, Button, Tag, Space, Empty } from '@douyinfe/semi-ui';
import { IconForward } from '@douyinfe/semi-icons';
import { OtherWorks, type iOtherWorks } from '../Data';

const WorksCard = ({ data: { status, title, description, tag, label, image, link } }: { data: iOtherWorks }) => {
    const open = () => window.open(link, '_blank');
    const tags = [tag, label, status].filter(Boolean);

    return (
    <div style={{ width: '100%' }} onClick={open}>
        <Card
            shadows="hover"
            style={{ width: '100%', cursor: 'pointer', height: '100%' }}
            bodyStyle={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '12px 16px',
            }}
            cover={
                <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                    <Avatar shape="square"                       
                        src={image}
                        alt={title}
                        style={{ width: '100%', height: 200, borderRadius: 0 }}
                    />
                    {tags.length > 0 && (
                        <Space
                            align="center"
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: 8,
                                boxSizing: 'border-box',
                                background: 'linear-gradient(transparent, rgba(0,0,0,.35))',
                            }}
                        >
                            {tags.map((item, i) => (
                                <Tag key={i} colorful type="light" shape="circle" size="small">
                                    {item}
                                </Tag>
                            ))}
                        </Space>
                    )}
                </div>
            }
        >
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
                icon={<IconForward />}
                aria-label="查看作品"
                onClick={e => {
                    e.stopPropagation();
                    open();
                }}
            />
        </Card>
    </div>
    );
};

const Works = () => (
    <section id="works" style={{ margin: '16px 0' }}>
        <Typography.Title heading={3}>其他作品</Typography.Title>
        <Typography.Paragraph>欢迎访问和使用。</Typography.Paragraph>

        <List
            grid={{ gutter: 12, xs: 24, sm: 12, md: 12, lg: 8, xl: 8, xxl: 6 }}
            dataSource={OtherWorks}
            emptyContent={<Empty description="暂无作品" />}
            renderItem={item => (
                <List.Item style={{ margin: '8px 2px' }}>
                    <WorksCard data={item} />
                </List.Item>
            )}
            style={{ margin: '12px 0' }}
        />
    </section>
);

export default Works;