import React from 'react'
import { Typography, Button, Card, List, Tag } from '@douyinfe/semi-ui'
import { IconAIFilledLevel1, IconAIFilledLevel3 } from '@douyinfe/semi-icons'
import { Sub_Site, Sub_Site_Stop, type SubSites } from '../Data'

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
    const Cards = ({ item }: { item: SubSites }) => (
        <>
            <Card
                shadows='hover'
                style={{ cursor: 'pointer', width: '100%', margin: '4px 0' }}
                cover={<img src={item.image} alt={item.title} style={{ width: '100%', height: 200, objectFit: 'cover' }} />}
                footerLine={true}
                bodyStyle={{ display: 'flex', alignItems: 'center', padding: '8px 12px' }}>
                <Tag style={{ position: 'absolute', top: 16 }} colorful prefixIcon={<IconAIFilledLevel1 />} type="solid" gradient>{item.tag}</Tag>
                <span style={{ overflow: 'hidden', flex: 1 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }} ellipsis={{ rows: 1 }}>{item.title}</Text>
                    <Paragraph style={{ color: 'var(--semi-color-text-2)' }} ellipsis={{ rows: 1 }} >{handleDescription(item.description)}</Paragraph>
                </span>
                <Button colorful theme="solid" type="tertiary" icon={<IconAIFilledLevel3 />} onClick={() => window.open(item.link)}>访问</Button>
            </Card >
        </>
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