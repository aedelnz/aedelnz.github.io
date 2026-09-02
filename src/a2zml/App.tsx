import { useEffect, useState } from 'react'
import { Button, Collapsible, Layout, Space, Spin, Switch, Typography, Descriptions, Card } from '@douyinfe/semi-ui'
import { IconSetting } from '@douyinfe/semi-icons'
import { useDB } from '../component/lib/DB'
import { useWindowHeight } from '../component/lib/Breakpoints'
import useLocalStorage from '../component/lib/LocalStorage'
import DarkMode from '../component/fast/DarkMode'
import NavSides from './NavSides'
import Searchs from './Searchs'
import Customs from './Customs'
import Contents from './Contents'
import Footers from '../component/Footers'

interface OpenData {
    isOpen: boolean;
    search: boolean;
    custom: boolean;
    Show: boolean;
}

const App = () => {
    const [selectedKey, setSelectedKey] = useState<string | null>(null)
    const [onbreakpointBoot, setOnbreakpointBoot] = useState(false)
    const { value: openData, setValue: setOpenData } = useLocalStorage<OpenData>('a2zml-data', { isOpen: false, search: true, custom: true, Show: true })
    const { data, loading, error } = useDB()
    const screenHeight = useWindowHeight()
    const onbreakpoint = (_screen: unknown, bool: boolean) => setOnbreakpointBoot(!bool)
    
    useEffect(() => {
        const firstFetch = () => {
            const firstKey = data?.[0]?.nav?.[0]?.id
            if (firstKey !== undefined && !selectedKey) {
                setSelectedKey(String(firstKey))
            }
        }
        if(!openData?.Show) {
            firstFetch()
        }
    }, [data, selectedKey])
const switchConfigs = [
  { key: 'search', label: '搜索框' },
  { key: 'custom', label: '自定义网站' },
  { key: 'Show', label: '首页列表显示' },
];

    return (
        <Layout style={{ backgroundColor: 'rgba(var(--semi-grey-0), 1)', height: `${screenHeight}px` }}>
            <Layout.Sider
                style={{ backgroundColor: 'var(--semi-color-bg-1)' }}
                breakpoint={['md']}
                onBreakpoint={onbreakpoint}
            >
                <NavSides
                    onSelect={setSelectedKey}
                    onbreakpointBoot={onbreakpointBoot}
                    onCollapseChange={setOnbreakpointBoot}
                />
            </Layout.Sider>
            <Layout.Header className='semi-layout-header-diy'>
            </Layout.Header>
            <Layout>
                <Layout.Content className='semi-layout-content-diy' style={{ marginTop: 0 }}>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Button
                                theme='borderless'
                                type="tertiary"
                                icon={<IconSetting />}
                                onClick={() => setOpenData(prev => ({ ...prev, isOpen: !prev.isOpen }))}
                            />
                            <DarkMode />
                        </div>
                        <Collapsible isOpen={openData?.isOpen}>
                            <Card style={{marginTop: '10px'}}>
                                <Descriptions align='left'>
                                {switchConfigs.map(({ key, label }) => (
                                    <Descriptions.Item key={key} itemKey={label}>
                                    <Switch
                                        checked={openData?.[key]}
                                        onChange={(checked) => setOpenData(prev => ({ ...prev, [key]: checked, isOpen: !openData?.isOpen }))}
                                    />
                                    </Descriptions.Item>
                                ))}
                                </Descriptions>
                            </Card>
                        </Collapsible>
                        <div style={{height: screenHeight}}>
                        <Searchs search={openData?.search} />
                        <Customs custom={openData?.custom} />
                        </div>
                        {loading && <Spin size="large" />}
                        {error && <Typography.Paragraph type="danger">导航数据加载失败：{error.message}</Typography.Paragraph>}
                        {data && selectedKey && <Contents data={data} selectedKey={selectedKey} />}
                    </div>
                </Layout.Content>
                <Footers desc='本网站提供的内容信息仅供参考，用户应自行判断并承担使用风险。' />
            </Layout>
        </Layout>
    )
}

export default App
