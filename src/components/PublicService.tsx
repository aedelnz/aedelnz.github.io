import { Divider, Space, Tag, Typography, Grid, Card, Avatar } from '@arco-design/web-react';
import { PUBLIC_SERVICE } from '../constants/Data';

function PublicService() {

    return (
        <>
            <Divider />
            <section id="PublicService" className="full-container">
                <Space direction='vertical' align='center' style={{ width: '100%' }}>
                    <Tag size='large' color='arcoblue'>Public welfare</Tag>
                    <div style={{ textAlign: 'center' }}>
                        <Typography.Title heading={3} style={{ fontWeight: '700', margin: '0' }}>服务</Typography.Title>
                        <Typography.Paragraph>提供公益服务</Typography.Paragraph>
                    </div>
                </Space>

                <Grid cols={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 3 }} colGap={16} rowGap={24}>
                    {PUBLIC_SERVICE.map((friend, index) => (
                        <Grid.GridItem key={index}>
                            <Card hoverable={true} className='card-custom-hover-style card-custom' onClick={() => window.open(friend.link, '_blank')}>
                                <Space>
                                    <Avatar size={80} shape='square'>
                                        <img alt='avatar' src={friend.image} />
                                    </Avatar>
                                    <div>
                                        <Typography.Text className='text-ellipsis' style={{fontSize: '18px', fontWeight: '700'}}>{friend.title}</Typography.Text>
                                        <Typography.Text className='text-ellipsis-2'>{friend.description}</Typography.Text>
                                    </div>
                                </Space>
                            </Card>
                        </Grid.GridItem>
                    ))}
                </Grid>
            </section>
        </>
    )
}
export default PublicService