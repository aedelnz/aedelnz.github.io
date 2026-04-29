import { useState } from 'react'
import { Button, Card, List, Modal, Typography } from '@douyinfe/semi-ui'
import { IconAIFilledLevel1 } from '@douyinfe/semi-icons'
import { FRIENDLY_LINKS } from '../Data'

interface CardsProps {
    item: { title: string; description: string; image: string; link: string; }
}

const Linkso = () => {
    // 友情链接申请弹窗
    const [visible, setVisible] = useState(false);
    // 显示弹窗
    const showDialog = () => setVisible(true)
    // 关闭弹窗
    const handleCancel = () => setVisible(false)
    // 友情链接列表数据源
    const dataSource = () => {
        return [...FRIENDLY_LINKS].sort(() => Math.random() - 0.5)
    }
    // 布局
    const { Title, Text, Paragraph } = Typography
    // 卡片组件
    const Cards = ({ item }: CardsProps) => (
        <Card
            className='cardis'
            shadows='hover'
            style={{ cursor: 'pointer', width: '100%', height: '60px', margin: '2px auto', }}
            bodyStyle={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 16px' }}>
            <img src={item.image} alt={item.title} style={{ width: 40, height: 40, borderRadius: 8, objectFit: 'cover', flexShrink: 0 }} />
            <Card.Meta
                className='carddesc'
                title={<Text ellipsis={{ showTooltip: { opts: { content: item.title } } }}>{item.title}</Text>}
                description={<Text style={{ color: 'var(--semi-color-text-2)' }} ellipsis={{ showTooltip: { opts: { content: item.description } } }}>{item.description}</Text>} />
            <Button type="primary" onClick={() => window.open(item.link)}>访问</Button>
        </Card>
    )

    return (
        <>
            <div id='linkso'>
                <div className='Cont-Cards'>
                    <div className='Title-Sub'>
                        <Title heading={3}>友情链接<Button theme='solid' type='primary' onClick={showDialog} style={{ marginLeft: 10 }}>申请</Button></Title>
                        <Paragraph>排名不分先后，随机排序。</Paragraph>
                    </div>
                    <List
                        grid={{ gutter: 8, xs: 24, sm: 12, md: 12, lg: 8 }}
                        dataSource={dataSource()}
                        renderItem={item => (<List.Item><Cards item={item} /></List.Item>)} />
                </div>
                <Modal title="友情链接申请" visible={visible} footer={null} onCancel={handleCancel} centered closeOnEsc={true} bodyStyle={{ overflow: 'auto', height: '50vh', marginBottom: 24 }}>
                    <Title heading={4}>交换友链要求</Title>
                    <ol>
                        <li>先链后审：请贵站优先添加本站链接，我方审核通过后同步添加；</li>
                        <li>HTTPS：仅接受标准 HTTPS 访问，拒绝纯 HTTP、非常规端口站点；</li>
                        <li>内容合规：仅限纯内容分享类站点，谢绝营销推广、广告引流、资源售卖类网站。</li>
                    </ol>
                    <Title heading={4}>我方友链信息</Title>
                    <ul>
                        <li>站点名称：画的个人记录</li>
                        <li>站点链接：https://jixiejidiguan.top</li>
                        <li>站点描述：一条咸鱼躺平养成计划！</li>
                        <li>站点图标：https://jixiejidiguan.top/favicon.png</li>
                    </ul>
                    <Button colorful theme="solid" type="primary" onClick={() => window.open('https://wj.qq.com/s2/25425052/c669/')} icon={<IconAIFilledLevel1 />}>点击申请</Button>
                </Modal>
            </div>
        </>
    )
}



export default Linkso