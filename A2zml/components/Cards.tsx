import { Card, Avatar, Typography, Button } from '@douyinfe/semi-ui'
import { CardItem } from '../Interfaces' // 寕入卡片项接口
import { IconCheckboxIndeterminate } from '@douyinfe/semi-icons';

const { Text, Paragraph } = Typography

const Cards = ({ items, onDelete }: { items: CardItem; onDelete?: (id: string | number | undefined) => void }) => (
    <>
        <Card
            shadows='hover'
            style={{ width: '100%', margin: '4px 0' }}
            bodyStyle={{ display: 'flex', alignItems: 'center', padding: '8px 12px' }}>
            <Card.Meta avatar={<Avatar shape="square" size="default" src={items.icon} />} />
            <span style={{ overflow: 'hidden', flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }} onClick={() => window.open(items.url, '_blank')} ellipsis={{ rows: 1 }}>{items.name}</Text>
                <Paragraph style={{ color: 'var(--semi-color-text-2)' }} ellipsis={{ rows: 1 }} >{items.desc}</Paragraph>
            </span>
            {onDelete && (
                <Button
                    type='tertiary'
                    icon={<IconCheckboxIndeterminate />}
                    onClick={(e) => {
                        e.stopPropagation()
                        onDelete(items.id)
                    }}
                />
            )}
        </Card >

    </>

)
export default Cards