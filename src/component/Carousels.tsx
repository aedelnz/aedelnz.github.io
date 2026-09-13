import { Carousel } from '@douyinfe/semi-ui'
import { ContactMe } from '../Data'
import { useBreakpoint } from '../hook/useBreakpoint'
import CarouselsCard from './fast/CarouselsCard'

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