import { Divider, Space, Tag, Typography, Grid, Card, Avatar } from '@arco-design/web-react';
import { PUBLIC_SERVICE } from '../constants/Data';

function PublicService() {
    // 自适应列表布局
    const { GridItem } = Grid;

    return (
        <>
            <Divider style={{ margin: '0 auto' }} />
            <section id="PublicService" className="full-container">
                <Space direction='vertical' align='center' style={{ width: '100%' }}>
                    <Tag checkable color='red' defaultChecked>Giving Back</Tag>
                    <Typography style={{ textAlign: 'center' }}>
                        <Typography.Title heading={3} style={{ fontWeight: '700', marginTop: '0' }}>公益与服务</Typography.Title>
                        <Typography.Paragraph>即使是咸鱼，也想为这个世界发一点点微弱的光。</Typography.Paragraph>
                    </Typography>
                </Space>

                <Grid cols={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 3 }} colGap={16} rowGap={24}>
                    {PUBLIC_SERVICE.map((friend, index) => (
                        <GridItem key={index}>
                            <Card hoverable={true} className='card-custom-hover-style' onClick={() => window.open(friend.link, '_blank')}>
                                <Space>
                                    <Avatar size={80} shape='square'>
                                        <img alt='avatar' src={friend.image} />
                                    </Avatar>
                                    <Typography>
                                        <Typography.Title heading={6} style={{ margin: '0', fontWeight: '700' }}>{friend.title}</Typography.Title>
                                        <Typography.Text type='secondary' ellipsis={true}>{friend.description}</Typography.Text>
                                    </Typography>
                                </Space>
                            </Card>
                        </GridItem>
                    ))}
                </Grid>
            </section>
        </>
    )
}
export default PublicService