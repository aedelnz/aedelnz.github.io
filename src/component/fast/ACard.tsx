import { useState } from "react"
import { Avatar, Button, Card, MarkdownRender, SideSheet, Space, Typography } from "@douyinfe/semi-ui"
import { IconAIFilledLevel1, IconInfoCircle } from "@douyinfe/semi-icons"
import { type CardItem } from '../../a2zml/Data'
import { useWindowHeight } from '../lib/Breakpoints'

const ACard = ({ data }: { data: CardItem }) => {
    // 底部栏弹窗开关存储
    const [visible, setVisible] = useState(false)
    // 底部栏弹窗切换函数
    const change = () => setVisible(!visible)
    // 屏幕高度获取函数
    const screenHeight = useWindowHeight()
    // 文本截断函数
    const truncate = (text?: string) => {
        if (typeof text !== 'string') return undefined
        return text.split('\n\n')[0]
    }
    return (
        <Card
            className="acard"
            shadows='hover'
            style={{ width: '100%' }}
            bodyStyle={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <div style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
                <Typography.Text link={{ href: `${data.url}` }}>
                    <Card.Meta
                        title={data.name}
                        description={truncate(data.desc)}
                        avatar={
                            <Avatar
                                size="default"
                                shape="square"
                                src={data.icon}
                            />
                        }
                    />
                </Typography.Text>
            </div>
            <IconInfoCircle onClick={change} style={{ color: 'var(--semi-color-primary)' }} />
            <SideSheet title={data.name} height={screenHeight} visible={visible} onCancel={change} closeOnEsc={true} placement='bottom'>
                <Space vertical align='start'>
                    <Avatar
                        size="extra-large"
                        shape="square"
                        src={data.icon}
                    />
                    <Typography.Title>{data.name}</Typography.Title>
                     <Button colorful theme="solid" type="primary" icon={<IconAIFilledLevel1 />} onClick={() => { window.open(data.url, '_blank') }}>点击直达</Button>
                </Space>
                <MarkdownRender raw={data.desc} format="md" style={{margin: '20px 8px'}} />
            </SideSheet>
        </Card>
    )
}

export default ACard