import { useState, useEffect } from 'react'
import { Tabs, Select, Input, Button, InputGroup } from '@douyinfe/semi-ui'
import { IconSearch } from '@douyinfe/semi-icons'
import { NavData } from '../Interfaces'
import HsSearch from './HsSearch' // 引入本站搜索组件


const SubSearch = ({ isTabMode, data }: { isTabMode: boolean; data: NavData[] }) => {
  // 搜索关键词
  const [keyword, setKeyword] = useState('')
  // 搜索引擎
  const [activeEngine, setActiveEngine] = useState(() => {
    const saved = localStorage.getItem('searchEngine')
    return saved !== null ? JSON.parse(saved) : 'baidu'
  })
  // 搜索引擎状态管理
  useEffect(() => {
    localStorage.setItem('searchEngine', JSON.stringify(activeEngine))
  }, [activeEngine])
  // 搜索引擎映射
  const searchEngineMap: Record<string, { label: string; search?: (q: string) => string }> = {
    homestation: { label: '本站', search: undefined },
    baidu: { label: '百度', search: (q: string) => `https://www.baidu.com/s?wd=${encodeURIComponent(q)}` },
    google: { label: '谷歌', search: (q: string) => `https://www.google.com/search?q=${encodeURIComponent(q)}` },
    github: { label: 'GitHub', search: (q: string) => `https://github.com/search?q=${encodeURIComponent(q)}` },
    blog: { label: '必应', search: (q: string) => `https://cn.bing.com/search?q=${encodeURIComponent(q)}` },
  }
  // 搜索引擎tab选项
  const tabItems = Object.entries(searchEngineMap).map(([key, item]) => ({ itemKey: key, tab: item.label }))
  // 搜索引擎select选项
  const selectOptions = Object.entries(searchEngineMap).map(([key, item]) => ({ value: key, label: item.label }))
  // 搜索处理函数
  const handleSearch = () => {
    if (!keyword.trim()) return
    if (activeEngine === 'homestation') return
    const url = searchEngineMap[activeEngine].search!(keyword)
    window.open(url, '_blank')
  }
  // 搜索关键词按下Enter键处理函数
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => { if (e.key === 'Enter') { handleSearch() } }

  return (
    <div style={{ width: '100%', margin: '20px auto' }}>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        {isTabMode ? <Tabs defaultActiveKey={activeEngine} tabList={tabItems} type="line" onChange={setActiveEngine} /> : null}
        <InputGroup>
          {isTabMode ? null : <Select value={activeEngine} onChange={value => setActiveEngine(value as string)} optionList={selectOptions} />}
          <Input placeholder="输入搜索内容" value={keyword} onChange={setKeyword} onKeyDown={handleKeyDown} prefix={<IconSearch />} style={{ flex: 1 }} />
          <Button onClick={handleSearch}>搜索</Button>
        </InputGroup>
      </div>
      {activeEngine === 'homestation' && <HsSearch keyword={keyword} data={data} />}
    </div>
  )
}

export default SubSearch