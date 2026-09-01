import { useEffect, useMemo, useState } from 'react'
import { Button, Input, InputGroup, List, Select, Toast, Typography } from '@douyinfe/semi-ui'
import { IconSearch } from '@douyinfe/semi-icons'
import { type NavData, type CardItem } from './Data'
import { useDB } from '../component/lib/DB'
import { useBreakpoint } from '../component/lib/Breakpoints'
import useLocalStorage from '../component/lib/LocalStorage'
import ACard from '../component/fast/ACard'

const Searchs = ({ search = true }: { search?: boolean }) => {
    const [keyword, setKeyword] = useState('')
    const [debouncedKeyword, setDebouncedKeyword] = useState<string>('')
    const { value: engine, setValue: setEngine } = useLocalStorage('search-engine', 'GitHub')
    const { data } = useDB()
    const breakpoint = useBreakpoint('md')
    // 防抖处理：延迟更新用于过滤的关键词
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedKeyword(keyword)
        }, 600)
        // 清理定时器，防止内存泄漏和过期更新
        return () => clearTimeout(timer)
    }, [keyword])
    // 展平导航数据，返回所有卡片项的列表
    const flattenSiteItems = (data: NavData[] | null): CardItem[] => (data ?? []).flatMap(item => (item.nav ?? []).flatMap(group => (group.nav ?? []).flatMap(card => card.nav ?? [])))
    // 缓存展平后的站点列表，避免每次过滤时重复展平
    const allItems = useMemo(() => flattenSiteItems(data), [data])
    // 规范化搜索文本，统一为小写并去除空格
    const normalizeSearchText = (value?: string) => String(value ?? '').trim().toLowerCase()
    // 根据防抖后的关键词过滤站点列表
    const siteMatches = useMemo(() => {
        const q = debouncedKeyword.trim()
        if (!q) return []
        const terms = q.toLowerCase().split(/\s+/).filter(Boolean)
        return allItems.filter((item) => {
            return terms.every((term) => [item.name, item.desc, item.url].map(normalizeSearchText).join(' ').includes(term))
        })
    }, [allItems, debouncedKeyword])
    // 处理搜索按钮点击事件
    const handleSearch = () => {
        const q = keyword.trim()
        if (!q) {
            Toast.info({ content: '搜索内容不能为空', duration: 0.5, stack: true })
            return
        }
        if (engine === 'ThisSite') return
        const searchEngine: Record<string, string> = { GitHub: 'https://github.com/search?q=', Google: 'https://www.google.com/search?q=', Bing: 'https://www.bing.com/search?q=', ThisSite: '', }
        const baseUrl = searchEngine[engine]
        if (baseUrl) {
            window.open(`${baseUrl}${encodeURIComponent(q)}`)
        }
    }

    return (
        <>
            {search && (
                <div>
                    <div style={{ padding: '24px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <InputGroup size={breakpoint ? 'default' : 'large'} style={{ display: 'flex', flexWrap: 'nowrap' }}>
                            <Select
                                style={{ width: 'auto' }}
                                value={engine}
                                onChange={(value) => setEngine(String(value))}
                            >
                                <Select.Option value='GitHub'>GitHub</Select.Option>
                                <Select.Option value='Google'>谷歌</Select.Option>
                                <Select.Option value='Bing'>必应</Select.Option>
                                <Select.Option value='ThisSite'>本站</Select.Option>
                            </Select>
                            <Input
                                showClear
                                placeholder="输入搜索内容"
                                value={keyword}
                                onChange={(value) => setKeyword(String(value))}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter') handleSearch()
                                }}
                                style={{ width: 'auto' }}
                            />
                            <Button colorful theme="light" type="primary" icon={<IconSearch />} onClick={handleSearch}>
                                搜索
                            </Button>
                        </InputGroup>
                    </div>
                    {engine === 'ThisSite' && debouncedKeyword.trim() && (
                        <section style={{ margin: '20px 0' }}>
                            <Typography.Title heading={3}>搜索结果</Typography.Title>
                            <List
                                grid={{ gutter: 4, xs: 12, sm: 12, md: 12, lg: 8, xl: 8, xxl: 6 }}
                                dataSource={siteMatches}
                                renderItem={(item) => (
                                    <List.Item style={{ margin: '4px 0px' }}>
                                        <ACard data={item} />
                                    </List.Item>
                                )}
                            />
                        </section>
                    )}
                </div>
            )}
        </>
    )
}

export default Searchs