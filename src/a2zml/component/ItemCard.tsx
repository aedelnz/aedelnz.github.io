import { Avatar, Card, MarkdownRender, Modal } from "@douyinfe/semi-ui"
import { IconInfoCircle, IconMinusCircle } from "@douyinfe/semi-icons"
import { type CardItem } from '../Data'

const ItemCard = ({ data, editable, onDelete }: { data: CardItem; editable?: boolean; onDelete?: (id?: string | number) => void }) => {
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
    }

    const cutAfter = (text?: string) =>
        typeof text === 'string' ? text.split('\n\n').slice(1).join('\n\n') : undefined;

    const handleOpenUrl = () => {
        if (data.url) window.open(data.url, '_blank')
    }

    const config = {
        fullScreen: true,
        icon: <Avatar style={{ width: 24, height: 24 }} src={iconUrl(data.icon)} />,
        title: data.name,
        content: <MarkdownRender raw={cutAfter(data.desc) || '暂无描述'} format="md" style={{ marginBottom: 20 }} />,
        bodyStyle: { margin: 0 },
        footer: false
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
                    style={{ color: 'var(--semi-color-text-2)', cursor: 'pointer' }}
                    onClick={(e) => {
                        e.stopPropagation()
                        Modal.confirm(config)
                    }}
                />
                {editable && (
                    <IconMinusCircle
                        onClick={() => onDelete?.(data.id)}
                        style={{ color: 'var(--semi-color-danger)', cursor: 'pointer' }}
                    />
                )}
            </Card>
        </>
    )
}

export default ItemCard