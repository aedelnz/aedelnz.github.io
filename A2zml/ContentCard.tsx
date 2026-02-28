import { Card, Space, Avatar, Typography, Tooltip } from '@arco-design/web-react';
import { IconCodeSandbox } from '@arco-design/web-react/icon';
import { CardItemType } from './Data';

const ContentCard = ({ item }: { item: CardItemType }) => {

    return (
        <>
            <Card hoverable={true} bodyStyle={{ padding: '2px', height: '45px', display: 'flex', alignItems: 'center' }} onClick={() => window.open(item.url, '_blank')}>
                <Space align='center'>
                    <Tooltip content={item.desc}>
                        <Avatar size={43} shape='square' style={{ backgroundColor: 'var(--color-menu-dark-hover)' }}>
                            {item.icon ? (<img alt='avatar' src={item.icon} onError={(e) => { e.currentTarget.src = '/stop.png'; }} />) : (<IconCodeSandbox style={{ color: 'var(--color-text-1)' }} />)}
                        </Avatar>
                    </Tooltip>
                    <Typography.Text className='text-ellipsis-2' style={{ margin: 'auto', fontWeight: 'bold' }}>{item.name}</Typography.Text>
                </Space>
            </Card>
        </>
    );
}
export default ContentCard;