import { useState, useEffect } from 'react';
import { Divider, Space, Typography, Button, Modal, Grid, Card, Avatar } from '@arco-design/web-react';
import { IconPlus } from '@arco-design/web-react/icon';
import { FRIENDLY_LINKS } from '../constants/Data';

const FriendlyLinks = () => {
    // 自适应按钮判断
    const [isMobile, setIsMobile] = useState(false);
    // 友链交换弹窗状态
    const [visible, setVisible] = useState(false);
    // 初始化时随机排序
    const getFriendlyLinks = () => {
        return [...FRIENDLY_LINKS].sort(() => Math.random() - 0.5);
    };
    // 本站信息
    const ownerInfo = {
        name: "画的个人记录",
        url: "https://s.jixiejidiguan.top",
        description: "一条咸鱼躺平养成计划！",
        avatar: "https://jixiejidiguan.top/favicon.ico"
    };
    
    // 监听窗口大小变化
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        // 初始化
        checkScreenSize();
        // 监听窗口变化
        window.addEventListener('resize', checkScreenSize);
        // 清理
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <>
            <Divider />
            <section id="FriendlyLinks" className="full-container">
                <Space direction={isMobile ? 'vertical' : 'horizontal'} style={{width: '100%', justifyContent: 'space-between', margin: '12px auto'}}>
                    <div>
                        <Typography.Title heading={3} style={{ fontWeight: '700', margin: '0' }}>友情链接</Typography.Title>
                        <Typography.Paragraph>在这个卷王世界里寻找志同道合的小伙伴。</Typography.Paragraph>
                    </div>
                    <Button type='outline' icon={<IconPlus />} onClick={() => setVisible(true)}>申请友链</Button>
                </Space>

                <Modal
                    style={{ margin: 'auto 0.35rem', width: 'auto' }}
                    title={<div style={{ textAlign: 'left', fontWeight: '700', color: '#165DFF' }} onClick={() => window.location.href = 'https://wj.qq.com/workspace'}>申请友链交换</div>}
                    visible={visible}
                    footer={null}
                    onCancel={() => { setVisible(false) }}
                >
                    <Space size='large' direction='vertical' style={{ width: '100%' }}>
                        <Card>
                            <Typography>
                                <Typography.Title heading={5} style={{ margin: '0' }}>申请前必读</Typography.Title>
                                <Typography.Paragraph>
                                    <ul>
                                        <li>先链后审：请先在贵站添加本站链接。</li>
                                        <li>HTTPS 必须：全站需部署 SSL，不接受 HTTP 或非常规端口。</li>
                                        <li>纯粹分享：谢绝推广、广告、资源贩卖类站点。</li>
                                    </ul>
                                </Typography.Paragraph>
                            </Typography>
                        </Card>
                        <Card>
                            <Typography>
                                <Typography.Title heading={5} style={{ margin: '0' }}>本站信息</Typography.Title>
                                <Typography.Paragraph>
                                    <ul>
                                        <li>站点名称：{ownerInfo.name}</li>
                                        <li>站点链接：{ownerInfo.url}</li>
                                        <li>站点描述：{ownerInfo.description}</li>
                                        <li>站点图标：{ownerInfo.avatar}</li>
                                    </ul>
                                </Typography.Paragraph>
                            </Typography>
                        </Card>
                        <Button type='primary' status='success' long href='https://wj.qq.com/s2/25425052/c669/' target='_blank'>去申请</Button>
                    </Space>
                </Modal>

                <Grid cols={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 5 }} colGap={8} rowGap={6}>
                    {getFriendlyLinks().map((friend, index) => (
                        <Grid.GridItem key={index}>
                            <Card hoverable={true} style={{height: '100px'}} className='card-custom-hover-style' onClick={() => window.open(friend.link, '_blank')}>
                                <Space align='center' style={{margin: 'auto 0'}}>
                                    <Avatar size={60} shape='square'>
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
    );
};

export default FriendlyLinks;
