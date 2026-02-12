import { Space, Tag, Typography, Button } from '@arco-design/web-react';
import { MY_WORKS } from '../constants/Data';

function Homer() {
    // 获取项目数量
    const projectCount = MY_WORKS.length > 0 ? MY_WORKS.length : 0;

    return (
        <>
            <section className="full-container">
                <Space direction='vertical' align='center' style={{ width: '100%' }}>
                    <Tag color='arcoblue' style={{ fontWeight: '700' }}>MSALT FISH MODE: ACTIVE</Tag>
                    <div style={{ textAlign: 'center' }}>
                        <Typography.Title heading={1} style={{ fontWeight: '700' }}>画的<span style={{ color: '#165DFF' }}>个人记录</span></Typography.Title>
                        <Typography.Text type='secondary'>一条咸鱼躺平养成计划！</Typography.Text>
                        <Typography.Paragraph bold style={{ padding: '2rem 1.5rem' }}>在繁杂的世界里，寻找最舒服的躺姿。<br />偶尔编码，偶尔公益，剩下的时间交给发呆。</Typography.Paragraph>
                    </div>
                    <Space size='large'>
                        <Button size='large' shape='round' type='primary' style={{ backgroundColor: '#000' }} href='#MyWork'>浏览项目</Button>
                        <Button size='large' shape='round' type='primary' style={{ backgroundColor: '#165DFF' }} href='#MySocial'>寻找足迹</Button>
                    </Space>
                    <Space size='large' style={{ textTransform: 'uppercase', padding: '2rem 0.12rem' }}>
                        <div style={{ textAlign: 'center', fontWeight: '700' }}>
                            <Typography.Title heading={4} style={{ color: '#F53F3F', fontSize: '2rem' }}>{projectCount}+</Typography.Title>
                            <Typography.Text type='secondary'>Active Projects</Typography.Text>
                        </div>
                        <div style={{ textAlign: 'center', fontWeight: '700' }}>
                            <Typography.Title heading={4} style={{ color: '#165DFF', fontSize: '2rem' }}>24h</Typography.Title>
                            <Typography.Text type='secondary'>Dazing/Week</Typography.Text>
                        </div>
                        <div style={{ textAlign: 'center', fontWeight: '700' }}>
                            <Typography.Title heading={4} style={{ color: '#D91AD9', fontSize: '2rem' }}>∞</Typography.Title>
                            <Typography.Text type='secondary'>Happiness Index</Typography.Text>
                        </div>
                    </Space>
                </Space>
            </section>
        </>
    );
}
export default Homer;
