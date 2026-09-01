import { useState } from 'react'
import { Typography, List, Button } from '@douyinfe/semi-ui'
import { IconAIFilledLevel1 } from '@douyinfe/semi-icons/lib/es/icons'
import { FriendLinks } from '../Data'
import LinksCard from './fast/LinksCard'

const Links = () => {
    // 洗牌函数
    const [data] = useState(() =>
        FriendLinks
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
    )
    // 样式
    const style = { margin: '8px 2px' }
    return (
        <section id="links" style={{ margin: '16px 0' }}>
            <Typography.Title heading={3}>友情链接</Typography.Title>
            <Typography.Paragraph>
                列表排名不分先后，随机排序。
            </Typography.Paragraph>
            <div style={{ margin: '12px 0' }}>
                <List
                    grid={{
                        gutter: 12,
                        xs: 24,
                        sm: 12,
                        md: 12,
                        lg: 8,
                        xl: 8,
                        xxl: 6,
                    }}
                    dataSource={data}
                    renderItem={item => (
                        <List.Item style={style}>
                            <LinksCard data={item} />
                        </List.Item>
                    )}
                />
            </div>
            <Button colorful theme="solid" type="primary" icon={<IconAIFilledLevel1 />} iconPosition="right" onClick={() => { window.open('https://wj.qq.com/s2/25425052/c669/', '_blank') }}>友情链接申请</Button>
        </section>
    )
}

export default Links