import { Divider, Space, Tag, Typography, Card, Avatar } from '@arco-design/web-react';
import { MY_SOCIALS } from '../constants/Data';

function MySocial() {
    // 使用 Map 缓存，避免多次 includes 遍历
    const PLATFORM_COLORS = new Map([
        ['爱发电', '#B010B6'],
        ['哔哩', '#CB1E83'],
        ['微信', '#008026'],
        ['QQ', '#CB272D'],
        ['腾讯', '#CB272D'],
        ['网易', '#4E5969'],
        ['微博', '#FF9900'],
        ['抖音', '#000000'],
        ['快手', '#000000'],
    ]);
    // 图标颜色映射
    const getIconColor = (title: string) => {
        for (const [key, color] of PLATFORM_COLORS.entries()) {
            if (title.includes(key)) return color;
        }
        return '#CCCCCC';
    };

    return (
        <>
            <Divider style={{ margin: '0 auto' }} />
            <section id="MySocial" className="full-container">
                <Space direction='vertical' align='center' style={{ width: '100%' }}>
                    <Tag checkable color='green' defaultChecked>My Social</Tag>
                    <Typography style={{ textAlign: 'center' }}>
                        <Typography.Title heading={3} style={{ fontWeight: '700', marginTop: '0' }}>咸鱼的社交圈</Typography.Title>
                        <Typography.Paragraph>在这些地方或许能抓到我（如果我没在睡觉的话）。</Typography.Paragraph>
                    </Typography>
                </Space>

                <Space wrap style={{ display: 'flex', justifyContent: 'center' }}>
                    {MY_SOCIALS.map((friend, index) => (
                        <Card key={index} hoverable={true} className='card-custom-hover-style' style={{ width: '8rem', height: '8rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => window.open(friend.link, '_blank')}>
                            <Space align='center' direction='vertical'>
                                <Avatar shape='square' style={{ backgroundColor: getIconColor(friend.title) }}>{friend.title[0]}</Avatar>
                                <Typography>
                                    <Typography.Title heading={6} style={{ margin: '0', fontWeight: '700' }}>{friend.title}</Typography.Title>
                                </Typography>
                            </Space>
                        </Card>
                    ))}
                </Space>
            </section>
        </>
    );
}

export default MySocial
