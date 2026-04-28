import { IconAIFilledLevel1 } from '@douyinfe/semi-icons/lib/es/icons'
import { Avatar, Space, Tag, Typography } from '@douyinfe/semi-ui'
import { MY_SOCIALS } from '../Data'

const Homer = () => {
    // 布局
    const { Title } = Typography

    return (
        <>
            <div style={{ marginBottom: 26 }}>
                <div className='homer'>
                    <div className='homer-content'>
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
        </>
    )
}
export default Homer