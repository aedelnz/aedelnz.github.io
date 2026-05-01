import { Typography, Button, Card, List, Tag, Input, Toast } from '@douyinfe/semi-ui'
import { IconAIFilledLevel1, IconAIFilledLevel3, IconCopy } from '@douyinfe/semi-icons'
import { Proxy_Tools, ProxyTool, Node_Subscriptions, NodeSubscription } from './Data'

// 布局
const { Title, Text, Paragraph } = Typography

const SubCards = () => {

    const doCopy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            Toast.success({ content: '复制文本成功', duration: 1, stack: true })
        } catch (error) {
            Toast.error({ content: `复制文本失败: ${error}`, duration: 1, stack: true })
        }
    }

    // 卡片组件
    const Cards = ({ item }: { item: ProxyTool }) => (
        <>
            <Card
                shadows='hover'
                style={{ width: '100%', margin: '4px 0' }}
                bodyStyle={{ display: 'flex', alignItems: 'center', padding: '8px 12px' }}
                footerLine={true}
                footerStyle={{ padding: '8px' }}
                footer={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}><div>{item.platform?.map((platform, index) => (<Tag style={{ margin: 2 }} key={index} colorful prefixIcon={<IconAIFilledLevel1 />} type="light" gradient>{platform}</Tag>))}</div><Button colorful theme="outline" type="primary" size='small' onClick={() => window.open(item.download)} icon={<IconAIFilledLevel3 />}>下载</Button></div>}>
                <span style={{ overflow: 'hidden', flex: 1 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }} ellipsis={{ rows: 1 }}>{item.name}</Text>
                    <Paragraph style={{ color: 'var(--semi-color-text-2)' }} ellipsis={{ rows: 1 }} >{item.description}</Paragraph>
                </span>
                <Button colorful theme="light" type="primary" onClick={() => window.open(item.github)}>GitHub</Button>
            </Card >
        </>
    )

    const NodeCards = ({ item }: { item: NodeSubscription }) => (
        <>
            <Card
                shadows='hover'
                style={{ width: '100%', margin: '4px 0' }}
                bodyStyle={{ display: 'flex', alignItems: 'center', padding: '8px 12px' }}
                footerLine={true}
                footerStyle={{ padding: '8px' }}
                footer={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
                    <Input style={{ marginRight: 8 }} defaultValue={item.url}></Input>
                    <Button type="primary" onClick={() => doCopy(item.url || '')} icon={<IconCopy />}></Button>
                </div>}>
                <span style={{ overflow: 'hidden', flex: 1 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }} ellipsis={{ rows: 1 }}>{item.name}</Text>
                    <Paragraph style={{ color: 'var(--semi-color-text-2)' }} ellipsis={{ rows: 1 }} >{item.platform?.map((platform, index) => (<Tag style={{ margin: 2 }} key={index}>{platform}</Tag>))}</Paragraph>
                </span>
            </Card >

        </>
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
