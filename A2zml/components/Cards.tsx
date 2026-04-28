import { Card, Avatar, Typography, Button } from '@douyinfe/semi-ui'
import { CardItem } from '../Interfaces' // 寕入卡片项接口
import { IconDelete } from '@douyinfe/semi-icons';

const { Text } = Typography

const Cards = ({ items, onDelete }: { items: CardItem; onDelete?: (id: string | number | undefined) => void }) => (
    <Card
        className='card'
        shadows='hover'
        style={{ cursor: 'pointer', width: '100%', height: '60px', margin: '2px auto', }}
        bodyStyle={{ display: 'flex', alignItems: 'center', gap: 12, padding: '4px 8px' }}>
        <Avatar shape="square" src={items.icon} alt={items.name} />
        <Card.Meta
            className='carddesc'
            title={<Text onClick={() => window.open(items.url, '_blank')} ellipsis={{ showTooltip: false }}>{items.name}</Text>}
            description={<Text style={{ color: 'var(--semi-color-text-2)' }} ellipsis={{ showTooltip: false }}>{items.desc}</Text>} />
        {onDelete && (
            <Button
                type='tertiary'
                icon={<IconDelete />}
                onClick={(e) => {
                    e.stopPropagation()
                    onDelete(items.id)
                }}
            />
        )}
    </Card>
)
export default Cards