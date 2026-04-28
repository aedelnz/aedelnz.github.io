import { Typography, Button, Card, List, Tag, Input } from '@douyinfe/semi-ui'
import { IconAIFilledLevel1, IconAIFilledLevel3, IconCopy } from '@douyinfe/semi-icons'
import { Proxy_Tools, ProxyTool, Node_Subscriptions, NodeSubscription } from '../Data'

interface CardsProps {
    item: ProxyTool
}
interface NodeCardsProps {
    item: NodeSubscription
}
const SubCards = () => {
    // 布局
    const { Title, Text, Paragraph } = Typography

    // 卡片组件
    const Cards = ({ item }: CardsProps) => (
        <Card
            shadows='hover'
            style={{ cursor: 'pointer', width: '100%', margin: '2px auto', }}
            bodyStyle={{ padding: '8px 16px' }}
            footerLine={true}
            footerStyle={{ padding: '8px' }}
            footer={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}><div>{item.platform.map((platform, index) => (<Tag style={{ margin: 2 }} key={index} colorful prefixIcon={<IconAIFilledLevel1 />} type="light" gradient>{platform}</Tag>))}</div><Button colorful theme="outline" type="primary" size='small' onClick={() => window.open(item.github)} icon={<IconAIFilledLevel3 />}>访问</Button></div>}>
            <Title heading={6} ellipsis={{ showTooltip: { opts: { content: item.name } } }}>{item.name}</Title>
            <Text style={{ color: 'var(--semi-color-text-2)' }} ellipsis={{ showTooltip: { opts: { content: item.description } } }}>{item.description}</Text>
        </Card>
    )
    const NodeCards = ({ item }: NodeCardsProps) => (
        <Card
            shadows='hover'
            style={{ cursor: 'pointer', width: '100%', margin: '2px auto', }}
            bodyStyle={{ padding: '8px 16px' }}
            footerLine={true}
            footerStyle={{ padding: '8px' }}
            footer={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
                <Input style={{ marginRight: 8 }} defaultValue={item.url}></Input>
                <Paragraph copyable={{
                    content: item.url,
                    render: (copied, doCopy) => { return (<Button colorful theme="outline" type="primary" onClick={doCopy} icon={<IconCopy />}>{copied ? '复制成功' : '点击复制'}</Button>) }
                }} />
            </div>}>
            <Title heading={6} ellipsis={{ showTooltip: { opts: { content: item.name } } }}>{item.name}</Title>
            <Text style={{ color: 'var(--semi-color-text-2)' }}>{item.platform.map((platform, index) => (<Tag style={{ margin: 2 }} key={index}>{platform}</Tag>))}</Text>
        </Card>
    )

    return (
        <>
            <div>
                <div id='ProxyTool' className='Cont-Cards'>
                    <div className='Title-Sub'>
                        <Title heading={3}>代理工具</Title>
                        <Paragraph>来源 GitHub 仓库</Paragraph>
                    </div>
                    <List
                        grid={{ gutter: 8, xs: 24, sm: 12, md: 12, lg: 8 }}
                        dataSource={Proxy_Tools}
                        renderItem={item => (<List.Item><Cards item={item} /></List.Item>)} />
                </div>
                <div id='SubsNode' className='Cont-Cards'>
                    <div className='Title-Sub'>
                        <Title heading={3}>订阅节点</Title>
                        <Paragraph>来源站长搭建跟网络收集</Paragraph>
                    </div>
                    <List
                        grid={{ gutter: 8, xs: 24, sm: 12, md: 12, lg: 8 }}
                        dataSource={Node_Subscriptions}
                        renderItem={item => (<List.Item><NodeCards item={item} /></List.Item>)} />
                </div>
            </div>
        </>
    )
}

export default SubCards
