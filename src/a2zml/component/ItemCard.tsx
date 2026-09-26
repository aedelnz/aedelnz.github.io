import { useState } from "react"
import { Avatar, Button, Card, MarkdownRender, Modal } from "@douyinfe/semi-ui"
import { IconInfoCircle } from "@douyinfe/semi-icons"
import { type CardItem } from '../Data'

const ItemCard = ({ data }: { data: CardItem }) => {
    const [visible, setVisible] = useState(false)
    // 必应地址
    const iconUrl = (icon: string | undefined) => {
        if (!icon) return undefined
        if (icon.startsWith('OIP-C') || icon.startsWith('ODF.')) {
            return `https://ts4.tc.mm.bing.net/th/id/${icon}`
        }
        return icon
    }
    const cut = (text?: string) => {
        if (typeof text !== 'string') return undefined;
        const idx = text.indexOf('\n\n');
        return idx === -1 ? text : text.slice(0, idx);
    };

    const cutAfter = (text?: string) =>
        typeof text === 'string' ? text.split('\n\n').slice(1).join('\n\n') : undefined;

    const handleOpenUrl = () => {
        if (data.url) window.open(data.url, '_blank')
    }

    return (
        <>
            <Card className="acard" shadows='hover'
                style={{ width: '100%', cursor: 'pointer' }}
                bodyStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, }} >
                <div onClick={handleOpenUrl}
                    style={{ flex: 1, minWidth: 0, overflow: 'hidden' }} >
                    <Card.Meta
                        title={data.name}
                        description={cut(data.desc)}
                        avatar={<Avatar size="default" shape="square" src={iconUrl(data.icon)} />}
                    />
                </div>
                <IconInfoCircle
                    style={{ fontSize: 18, color: 'var(--semi-color-text-2)', cursor: 'pointer' }}
                    onClick={(e) => {
                        e.stopPropagation()
                        setVisible(true)
                    }}
                />
            </Card>

            <Modal
                title={
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <Avatar
                            size="small"
                            shape="square"
                            src={iconUrl(data.icon)}
                        />
                        <span>{data.name}</span>
                    </div>
                }
                visible={visible}
                onCancel={() => setVisible(false)}
                footer={
                    <>
                        <Button theme="borderless" onClick={() => setVisible(false)}>
                            关闭
                        </Button>
                        <Button theme="solid" onClick={handleOpenUrl}>
                            访问
                        </Button>
                    </>
                }
                style={{ width: 520, maxWidth: '90vw' }}
                closeOnEsc
                maskClosable
            >
                <MarkdownRender
                    raw={cutAfter(data.desc)|| '暂无描述'}
                    format="md"
                    style={{ marginBottom: 20 }}
                />
            </Modal>
        </>
    )
}

export default ItemCard