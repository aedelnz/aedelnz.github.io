import { Divider, Space, Typography, Grid, Card } from '@arco-design/web-react';
import { MY_WORKS } from '../constants/Data';

function MyWork() {

    return (
        <>
            <Divider style={{ margin: '0 auto' }} />
            <section id="MyWork" className="full-container">
                <Space style={{margin: '12px auto' }}>
                    <div>
                        <Typography.Title heading={3} style={{ fontWeight: '700', margin: '0' }}>项目作品集</Typography.Title>
                        <Typography.Paragraph>可以正常访问</Typography.Paragraph>
                    </div>
                </Space>



                <Grid cols={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 5 }} colGap={8} rowGap={6}>
                    {MY_WORKS.map((friend, index) => (
                        <Grid.GridItem key={index}>
                            <Card hoverable={true} className='card-custom-hover-style'
                                cover={
                                    <div style={{ height: 240, overflow: 'hidden' }}>
                                        <img style={{ width: '100%', transform: 'translateY(-20px)' }} alt='dessert' src={friend.image} />
                                    </div>
                                }
                                onClick={() => window.location.href = friend.link}>
                                <Card.Meta title={friend.title} description={friend.description} className='text-ellipsis' />
                            </Card>
                        </Grid.GridItem>
                    ))}
                </Grid>
            </section>
        </>
    );
}
export default MyWork
