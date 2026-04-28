import { useState, useEffect, useMemo } from 'react'
import { Typography, List } from '@douyinfe/semi-ui'
import { NavData, CardItem } from '../Interfaces' // 寕入导航项和卡片项接口
import Cards from './Cards' // 引入卡片组件

const { Title, Text } = Typography

const HsSearch = ({ keyword, data }: { keyword: string; data: NavData[] }) => {
    // 搜索关键词去抖延迟
    const delay = 1000
    // 搜索关键词去抖
    const [debouncedValue, setDebouncedValue] = useState(keyword)
    // 搜索关键词小写
    const lowerKeyword = debouncedValue.toLowerCase()
    useEffect(() => {
        const timer = setTimeout(() => { setDebouncedValue(keyword) }, delay)
        return () => clearTimeout(timer)
    }, [keyword, delay])

    const filteredData = useMemo(() => {
        // 搜索关键词为空时返回空数组
        if (!lowerKeyword.trim()) return []
        // 递归展开导航项
        const flattenData = (items: NavData[]) => {
            const result: CardItem[] = [];
            items.forEach(item => {
                if (item.nav && Array.isArray(item.nav)) {
                    result.push(...flattenData(item.nav))
                } else {
                    result.push(item)
                }
            })
            return result
        }
        // 过滤搜索结果
        const filtered = flattenData(data).filter((item) =>
            item.name?.toLowerCase().includes(lowerKeyword) ||
            item.desc?.toLowerCase().includes(lowerKeyword)
        )
        return filtered;
    }, [lowerKeyword, data])

    return (
        <div style={{ width: '100%', margin: '20px auto' }}>
            {keyword === '' ? null :
                <List
                    grid={{ gutter: 8, xs: 12, sm: 12, md: 8, lg: 6 }}
                    header={<Title heading={4}>搜索结果 ({filteredData.length})</Title>}
                    emptyContent={<Text>暂无搜索结果</Text>}
                    dataSource={filteredData}
                    renderItem={item => (<List.Item><Cards items={item} /></List.Item>)} />
            }
        </div>

    )
}

export default HsSearch