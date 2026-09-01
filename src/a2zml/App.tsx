import { useEffect, useState } from 'react'
import { Button, Collapsible, Layout, Space, Spin, Switch, Typography } from '@douyinfe/semi-ui'
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
}

const App = () => {
    const [selectedKey, setSelectedKey] = useState<string | null>(null)
    const [onbreakpointBoot, setOnbreakpointBoot] = useState(false)
    const { value: openData, setValue: setOpenData } = useLocalStorage<OpenData>('a2zml-data', { isOpen: false, search: true, custom: true })
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
        firstFetch()
    }, [data, selectedKey])

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
                            <Space vertical>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography.Text style={{ margin: 8 }}>
                                        {openData?.search ? '已开启搜索' : '已关闭搜索'}
                                    </Typography.Text>
                                    <Switch
                                        checked={openData?.search}
                                        onChange={(checked) => setOpenData(prev => ({ ...prev, search: checked, isOpen: !openData?.isOpen }))}
                                    />
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography.Text style={{ margin: 8 }}>
                                        {openData?.custom ? '已开启自定义' : '已关闭自定义'}
                                    </Typography.Text>
                                    <Switch
                                        checked={openData?.custom}
                                        onChange={(checked) => setOpenData(prev => ({ ...prev, custom: checked, isOpen: !openData?.isOpen }))}
                                    />
                                </div>
                            </Space>
                        </Collapsible>
                        <Searchs search={openData?.search} />
                        <Customs custom={openData?.custom} />
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
