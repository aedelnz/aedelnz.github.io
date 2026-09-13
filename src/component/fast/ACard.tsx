import { useState } from "react"
import { Avatar, Card, Typography } from "@douyinfe/semi-ui"
import { IconInfoCircle } from "@douyinfe/semi-icons"
import { type CardItem } from '../../a2zml/Data'
import BottomSideSheet from '../../a2zml/BottomSideSheet'

const ACard = ({ data }: { data: CardItem }) => {
const [visible, setVisible] = useState(false)

const toggleVisible = () => setVisible(v => !v)

    // 文本截断函数
    const truncate = (text?: string) => {
        if (typeof text !== 'string') return undefined
        return text.split('\n\n')[0]
    }
    const iconUrl = (icon: string | undefined) => {
        if (!icon) return undefined
        if (icon.startsWith('OIP-C')|| icon.startsWith('ODF.')) return `https://ts4.tc.mm.bing.net/th/id/${icon}`
        return icon
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
                <Typography.Text onClick={() => window.open(data.url)}>
                    <Card.Meta
                        title={data.name}
                        description={truncate(data.desc)}
                        avatar={
                            <Avatar
                                size="default"
                                shape="square"
                                src={iconUrl(data.icon)}
                            />
                        }
                    />
                </Typography.Text>
            </div>
            <IconInfoCircle onClick={toggleVisible} style={{ color: 'var(--semi-color-primary)' }} />
            <BottomSideSheet data={data} visible={visible} toggleVisible={toggleVisible}/>

        </Card>
    )
}

export default ACard