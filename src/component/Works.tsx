import { Typography, List } from '@douyinfe/semi-ui'
import { OtherWorks } from '../Data'
import WorksCard from './fast/WorksCard'

const Works = () => {
    // 样式
    const style = { margin: '8px 2px' }
    return (
        <section id="works" style={{ margin: '16px 0' }}>
            <Typography.Title heading={3}>其他作品</Typography.Title>
            <Typography.Paragraph>
                欢迎访问和使用。
            </Typography.Paragraph>
            <div style={{ margin: '12px 0' }}>
                <List
                    grid={{
                        gutter: 12,
                        xs: 24,
                        sm: 12,
                        md: 12,
                        lg: 8,
                        xl: 8,
                        xxl: 6,
                    }}
                    dataSource={OtherWorks}
                    renderItem={item => (
                        <List.Item style={style}>
                            <WorksCard data={item} />
                        </List.Item>
                    )}
                />
            </div>
        </section>
    )
}
export default Works