import { IconAIFilledLevel1 } from '@douyinfe/semi-icons/lib/es/icons'
import { Avatar, Space, Tag, Typography } from '@douyinfe/semi-ui'
import { useEffect, useState } from 'react'
import { MY_SOCIALS } from '../Data'
const { Title } = Typography

const Homer = () => {
    const [hitokotoData, setHitokotoData] = useState({ from: '', from_who: '', hitokoto: '获取中...' });

    useEffect(() => {
        fetch("https://v1.hitokoto.cn")
            .then((response) => response.json())
            .then((data) => {
                setHitokotoData({ from: data.from, from_who: data.from_who, hitokoto: data.hitokoto });
            })
            .catch(() => setHitokotoData({ from: '', from_who: '', hitokoto: '获取失败' }));
    }, []);

    return (
        <>
            <div>
                <div className='homer'>
                    <div className='homer-content'>
                        <div id="hitokoto">
                            <Title heading={2}>{hitokotoData.hitokoto}</Title>
                            <Title heading={4} type="tertiary">——  {hitokotoData.from_who}「{hitokotoData.from}」</Title>
                        </div>
                        <div style={{ position: 'absolute', bottom: 0 }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar shape="square" size="large" style={{ marginRight: 12 }} src="/root/tx.png" alt="头像" />
                                <div>
                                    <Title heading={1}>麗姫を描く</Title>
                                    <Title heading={3} type="tertiary">一条咸鱼躺平养成计划！</Title>
                                </div>
                            </div>
                            <div style={{ margin: '12px auto' }}>
                                <Space wrap>
                                    {MY_SOCIALS.map((item, idex) => (
                                        <Tag colorful prefixIcon={<IconAIFilledLevel1 />} type="ghost" shape='circle' onClick={() => window.open(item.link, '_blank')} key={idex}>{item.title}</Tag>
                                    ))}
                                </Space>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Homer