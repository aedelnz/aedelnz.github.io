import { Carousel } from '@douyinfe/semi-ui'
import { ContactMe } from '../Data'
import { useWindowHeight } from './lib/Breakpoints'
import CarouselsCard from './fast/CarouselsCard'

const Carousels = () => {
    return (
        <Carousel
            theme='dark'
            indicatorType='line'
            speed={1000} 
            animation='fade'
            style={{
                width: '100%',
                height: useWindowHeight(),
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