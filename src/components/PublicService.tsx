import { Divider, Space, Tag, Typography, Grid, Card } from '@arco-design/web-react';
import { IconStar } from '@arco-design/web-react/icon';
import { PUBLIC_SERVICE } from '../constants/Data';

function PublicService() {
    // 自适应列表布局
    const { Row, Col } = Grid;

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

                <Row gutter={[24, 12]} align='center' justify='center'>
                    {PUBLIC_SERVICE.map((friend, index) => (
                        <Col key={index} xs={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
                            <Card hoverable={true} className='card-custom-hover-style' style={{ borderRadius: '1rem' }} onClick={() => window.open(friend.link, '_blank')}>
                                <Space align='center'>
                                    <IconStar style={{ fontSize: 64, color: '#ffcd00' }} />
                                    <Typography>
                                        <Typography.Title heading={6} style={{ margin: '0', fontWeight: '700' }}>{friend.title}</Typography.Title>
                                        <Typography.Text type='secondary' ellipsis={true}>{friend.description}</Typography.Text>
                                    </Typography>
                                </Space>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>
        </>
    )
}
export default PublicService