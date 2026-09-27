import { Carousel, Typography, Button, Space } from '@douyinfe/semi-ui'
import { ContactMe, type iContactMe } from '../Data'
import { useBreakpoint } from '../hook/useBreakpoint'

const CarouselsCard = ({ data }: { data: iContactMe }) => {
    const { title, description, image, link } = data
    return (
        <div style={{
            backgroundImage: `url('${image}')`,
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
                        onClick={() => { window.open(link) }}
                    >
                        查看
                    </Button>
                </Space>
            </Space>
        </div>
    )
}

const Carousels = () => {
  // 屏幕高度获取
  const { height } = useBreakpoint()

    return (
        <Carousel
            theme='dark'
            indicatorType='line'
            speed={1000} 
            animation='fade'
            style={{
                width: '100%',
                height: height,
            }}
        >
            {ContactMe.map((item, index) => (
                <div key={index}>
                    <CarouselsCard data={item} />
                </div>
            ))}
        </Carousel>
    )
}

export default Carousels