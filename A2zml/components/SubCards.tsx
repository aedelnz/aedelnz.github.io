import { Typography, List, Button, BackTop } from '@douyinfe/semi-ui'
import { IconArrowUp } from '@douyinfe/semi-icons'
import { NavData } from '../Interfaces' // 寕入导航项接口
import Cards from './Cards' // 引入卡片组件

const { Title } = Typography

const SubCards = ({ datas }: { datas: NavData[] }) => {

    return (
        <>
            <div id='a2zml-sub'>
                <div >
                    <BackTop style={{ position: 'fixed', bottom: 10, right: 10, zIndex: 10 }}>
                        <Button colorful theme="outline" type="primary" icon={<IconArrowUp />} />
                    </BackTop>
                </div>
                <List
                    dataSource={datas}
                    renderItem={item => (<>
                        <div id={item.title} className='Cont-Cards'>
                            <List
                                grid={{ gutter: 8, xs: 12, sm: 12, md: 8, lg: 6 }}
                                header={<Title heading={4}>{item.title}</Title>}
                                dataSource={item.nav}
                                renderItem={item => (<List.Item><Cards items={item} /></List.Item>)} />
                        </div>
                    </>)} />
            </div>
        </>
    )
}

export default SubCards