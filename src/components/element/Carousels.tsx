import { Carousel, Typography, Space, Button, Empty } from '@douyinfe/semi-ui'
import { IconChevronRight } from '@douyinfe/semi-icons'
// 定义轮播项类型，替代any做类型约束
interface AboutItem {
  image: string
  title: string
  name: string
  link: string
  button: string
}
const Carousels = ({ data = [] }: { data: AboutItem[] }) => {

  return (
    <div id="home">
      <Carousel
        style={{ width: '100%', height: '100vh' }}
        theme="primary"
        indicatorType="line"
        indicatorSize="medium"
        indicatorPosition="right"
      >
        {data.length > 0 ? (
          data.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100vh'
              }}
            >
              {/* 半透明遮罩层 */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(120, 80, 220, 0.4)' // 替换不稳定的css变量
                }}
              >
                <Space vertical align="start">
                  <Space align="center">
                    <Typography.Title heading={2}>{item.title}</Typography.Title>
                    <Typography.Title heading={2}>|</Typography.Title>
                    <Typography.Title heading={4}>{item.name}</Typography.Title>
                  </Space>
                  <Button
                    icon={<IconChevronRight />}
                    iconPosition="right"
                    theme="solid"
                    // 移除冲突tertiary类型
                    onClick={() => window.open(item.link, '_blank', 'noopener,noreferrer')}
                  >
                    {item.button}
                  </Button>
                </Space>
              </div>
            </div>
          ))
        ) : (
          <Empty
            title="功能建设中"
            description="当前功能暂未开放，敬请期待。"
            style={{ paddingTop: '40vh' }}
          />
        )}
      </Carousel>
    </div>
  )
}

export default Carousels