import { List, Typography } from '@douyinfe/semi-ui'
import { type NavData } from './Data'
import ACard from '../component/fast/ACard'

const Contents = ({ data, selectedKey }: { data: NavData[]; selectedKey: string }) => {
    // 获取当前 id 数据组
    const selected = data.flatMap((item) => item.nav ?? []).find((item) => String(item.id) === selectedKey)
    // 为空判断
    if (!selected) {
        return <Typography.Paragraph>请选择一个导航分类</Typography.Paragraph>
    }
    return (
        <div>
            {(selected.nav ?? []).map((group) => (
                <section key={String(group.id)} style={{ margin: '20px 0' }}>
                    <Typography.Title heading={3}>{group.title}</Typography.Title>
                    <List
                        grid={{ gutter: 4, xs: 12, sm: 12, md: 12, lg: 8, xl: 8, xxl: 6 }}
                        dataSource={group.nav ?? []}
                        renderItem={(item) => (
                            <List.Item style={{ margin: '4px 0px' }}>
                                <ACard data={item} />
                            </List.Item>
                        )}
                    />
                </section>
            ))}
        </div>
    )
}

export default Contents