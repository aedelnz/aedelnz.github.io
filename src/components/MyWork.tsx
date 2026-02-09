import { Divider, Typography, Grid, Card } from '@arco-design/web-react';
import { MY_WORKS } from '../constants/Data';

function MyWork() {
    // 自适应列表布局
    const { GridItem } = Grid;
    // 卡片元数据
    const { Meta } = Card;
    // 自适应图片高度
    const cardDivStyle: React.CSSProperties = {
        borderRadius: '1rem 1rem 0 0',
        overflow: 'hidden',
        height: 'clamp(200px, 10vw, 500px)',
    };

    return (
        <>
            <Divider style={{ margin: '0 auto' }} />
            <section id="MyWork" className="full-container">
                <Typography>
                    <Typography.Title heading={4}>咸鱼作品集</Typography.Title>
                    <Typography.Paragraph>这些是还没被我鸽掉的项目。</Typography.Paragraph>
                </Typography>

                <Grid cols={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 5 }} colGap={8} rowGap={6}>
                    {MY_WORKS.map((friend, index) => (
                        <GridItem key={index}>
                            <Card hoverable={true} className='card-custom-hover-style'
                                cover={
                                    <div style={{ height: 240, overflow: 'hidden' }}>
                                        <img style={{ width: '100%', transform: 'translateY(-20px)' }} alt='dessert' src={friend.image} />
                                    </div>
                                }
                                onClick={() => window.location.href = friend.link}
                            >
                                <Meta title={friend.title} description={friend.description} />
                            </Card>
                        </GridItem>
                    ))}
                </Grid>
            </section>
        </>
    );
}
export default MyWork
