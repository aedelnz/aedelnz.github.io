import React from 'react'
import { Typography, Button, Card, List, Tag } from '@douyinfe/semi-ui'
import { IconAIFilledLevel1, IconAIFilledLevel3 } from '@douyinfe/semi-icons'
import { Sub_Site, Sub_Site_Stop } from '../Data'

interface CardsProps {
    item: { title: string; description: string; tag: string; image: string; link: string; }
}

const { Title, Text, Paragraph } = Typography

const SubSite = () => {
    // 目标文本
    const targetText = [
        { text: '魔法网络', link: '/A2zml/v2/' }
    ]
    // 布局
    // 描述处理函数
    const handleDescription = (description: string) => {
        const parts = description.split(targetText.map(item => item.text).join(''))
        if (parts.length > 1) {
            return parts.map((part, index) => (<React.Fragment key={index}>{part}{index < parts.length - 1 && (<Text link={{ href: targetText[index].link }} underline>{targetText[index].text}</Text>)}</React.Fragment>))
        }
        return description
    }
    // 卡片组件
    const Cards = ({ item }: CardsProps) => (
        <Card
            shadows='hover'
            style={{ cursor: 'pointer', width: '100%', margin: '2px auto', }}
            bodyStyle={{ padding: '8px 16px' }}
            cover={<img src={item.image} alt={item.title} style={{ width: '100%', height: 200, objectFit: 'cover' }} />}
            footerLine={true}
            footerStyle={{ padding: '8px' }}
            footer={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}><Tag colorful prefixIcon={<IconAIFilledLevel1 />} type="solid" gradient>{item.tag}</Tag><Button colorful theme="solid" type="tertiary" onClick={() => window.open(item.link)} icon={<IconAIFilledLevel3 />}>访问</Button></div>}>
            <Title heading={6} ellipsis={{ showTooltip: { opts: { content: item.title } } }}>{item.title}</Title>
            <Text style={{ color: 'var(--semi-color-text-2)' }} ellipsis={{ showTooltip: { opts: { content: item.description } } }}>{handleDescription(item.description)}</Text>
        </Card>
    )

    return (
        <>
            <div id='subsite'>
                <div className='Cont-Cards'>
                    <div className='Title-Sub'>
                        <Title heading={3}>附属网站</Title>
                        <Paragraph>当前附属网站</Paragraph>
                    </div>
                    <List
                        grid={{ gutter: 8, xs: 24, sm: 12, md: 12, lg: 8 }}
                        dataSource={Sub_Site}
                        renderItem={item => (<List.Item><Cards item={item} /></List.Item>)} />
                </div>
                <div className='Cont-Cards'>
                    <div className='Title-Sub'>
                        <Title heading={3}>已停止运行的附属网站</Title>
                        <Paragraph>原因：个不其同</Paragraph>
                    </div>
                    <List
                        grid={{ gutter: 8, xs: 24, sm: 12, md: 12, lg: 8 }}
                        dataSource={Sub_Site_Stop}
                        renderItem={item => (<List.Item><Cards item={item} /></List.Item>)} />
                </div>
            </div>
        </>
    )
}

export default SubSite