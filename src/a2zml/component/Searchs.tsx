import { useEffect, useMemo, useState } from 'react'
import { Button, Input, InputGroup, List, Select, Toast, Typography } from '@douyinfe/semi-ui'
import { IconSearch } from '@douyinfe/semi-icons'
import { type NavData, type CardItem } from '../Data'
import { useBreakpoint } from '../../hook/useBreakpoint'
import { useLocalStorage } from '../../hook/useLocalStorage'
import ItemCard from './ItemCard'

// 常量提到组件外，避免每次渲染重建
const SEARCH_ENGINES: Record<string, string> = {
    GitHub: 'https://github.com/search?q=',
    Google: 'https://www.google.com/search?q=',
    Bing: 'https://www.bing.com/search?q=',
    ThisSite: '',
}

const ENGINE_OPTIONS = [
    { value: 'GitHub', label: 'GitHub' },
    { value: 'Google', label: '谷歌' },
    { value: 'Bing', label: '必应' },
    { value: 'ThisSite', label: '本站' },
]

// 展平导航数据 → CardItem[]
const flattenSiteItems = (data: NavData[] | null): CardItem[] =>
    (data ?? []).flatMap(item =>
        (item.nav ?? []).flatMap(group =>
            (group.nav ?? []).flatMap(card => card.nav ?? [])
        )
    )

// 统一规范化搜索文本
const normalize = (v?: string) => (v ?? '').trim().toLowerCase()

// 提取所有可搜索字段拼接成字符串
const buildSearchText = (item: CardItem) =>
    [item.name, item.desc, item.url].map(normalize).join(' ')

interface Props {
    data: NavData[] | null
    search?: boolean
}

const Searchs = ({ data, search = true }: Props) => {
    const [keyword, setKeyword] = useState('')
    const [debouncedKeyword, setDebouncedKeyword] = useState('')
    const { isMobile } = useBreakpoint()
    const [engine, setEngine] = useLocalStorage('search-engine', 'GitHub')

    // 关键词防抖
    useEffect(() => {
        const timer = setTimeout(() => setDebouncedKeyword(keyword), 600)
        return () => clearTimeout(timer)
    }, [keyword])

    // 展平 + 预计算搜索文本，避免重复计算
    const allItems = useMemo(() => {
        return flattenSiteItems(data).map(item => ({
            item,
            text: buildSearchText(item),
        }))
    }, [data])

    // 过滤本站结果
    const siteMatches = useMemo(() => {
        const q = normalize(debouncedKeyword)
        if (!q) return []
        const terms = q.split(/\s+/).filter(Boolean)
        return allItems
            .filter(({ text }) => terms.every(term => text.includes(term)))
            .map(({ item }) => item)
    }, [allItems, debouncedKeyword])

    // 搜索（跳转外部引擎 or 本站防抖结果）
    const handleSearch = () => {
        const q = keyword.trim()
        if (!q) {
            Toast.info({ content: '搜索内容不能为空', duration: 0.5, stack: true })
            return
        }
        if (engine === 'ThisSite') return
        const baseUrl = SEARCH_ENGINES[engine]
        if (baseUrl) window.open(`${baseUrl}${encodeURIComponent(q)}`)
    }

    if (!search) return null

    return (
        <div>
            <div style={{ padding: '24px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <InputGroup size={isMobile ? 'default' : 'large'} style={{ display: 'flex', flexWrap: 'nowrap' }}>
                    <Select
                        style={{ width: 'auto' }}
                        value={engine}
                        onChange={(value) => setEngine(String(value))}
                        optionList={ENGINE_OPTIONS}
                    />
                    <Input
                        showClear
                        placeholder="输入搜索内容"
                        value={keyword}
                        onChange={(value) => setKeyword(String(value))}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
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
                                <ItemCard data={item} />
                            </List.Item>
                        )}
                    />
                </section>
            )}
        </div>
    )
}

export default Searchs