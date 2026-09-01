import { Typography, Button, Space } from '@douyinfe/semi-ui'
import { type iContactMe } from '../../Data'

const CarouselsCard = ({ data }: { data: iContactMe }) => {
    const { title, description, image, link } = data
    return (
        <div style={{
            backgroundImage: `url('https://img02.sogoucdn.com/v2/thumb/retype_exclude_gif/ext/auto/q/95/crop/xy/ai/t/0/?appid=122&url=https://jixiejidiguan.top${image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%'
        }}>
            <div style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(var(--semi-grey-1), 0.6)'
            }}></div>
            <Space
                vertical
                align='start'
                spacing='medium'
                style={{
                    position: 'absolute',
                    top: '40%',
                    left: '80px',
                    right: '80px',
                }}>
                <Typography.Title heading={2}>{title}</Typography.Title>
                <Space vertical align='start'>
                    <Typography.Paragraph>{description}</Typography.Paragraph>
                    <Button
                        size='large'
                        onClick={() => { window.open(link, '_blank') }}
                    >
                        查看
                    </Button>
                </Space>
            </Space>
        </div>
    )
}

export default CarouselsCard