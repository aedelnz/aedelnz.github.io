import { useMemo, useState } from 'react';
import { Button, Layout, Spin, Typography, } from '@douyinfe/semi-ui';
import { IconSetting } from '@douyinfe/semi-icons';
import { useBreakpoint } from '../hook/useBreakpoint';
import { useRequest } from '../hook/useRequest';
import { type NavData } from './Data';
import DarkMode from '../component/fast/DarkMode';
import NavSides from './component/NavSides';
import Searchs from './component/Searchs';
import Customs from './Customs';
import Contents from './component/Contents';
import Footers from '../component/Footers';



const App = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true)
    const [navId, setNavId] = useState<number>()
    const { data, loading, error } = useRequest<NavData[]>('/root/db.json')
    const { height } = useBreakpoint()
    const selectedKey: number = useMemo(() => {
        const defaultID = Number(data?.[0]?.nav?.[0]?.id) || 2
        return navId != null ? Number(navId) : defaultID
    }, [data, navId])
    // 自适应手机电脑隐藏显示测边栏
    const onbreakpoint = (_screen: string, bool: boolean) => {
        setIsCollapsed(!bool)
    }

    return (
        <Layout style={{ height }}>
            <Layout.Sider breakpoint={['md']} onBreakpoint={onbreakpoint}>
                <NavSides
                    data={data ?? []}
                    isCollapsed={isCollapsed}
                    setIsCollapsed={setIsCollapsed}
                    setNavId={setNavId}
                />
            </Layout.Sider>
            <Layout.Header className="semi-layout-header-diy" />

            <Layout>
                <Layout.Content className="semi-layout-content-diy" style={{ marginTop: 0 }}>
                    <div>
                        {/* 顶部设置按钮 */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Button
                                theme="borderless"
                                type="tertiary"
                                icon={<IconSetting />}
                            />
                            <DarkMode />
                        </div>

                        <div>
                            <div style={{ width: '100%' }}>
                                <Searchs data={data ?? []} />
                                <Customs />
                            </div>
                        </div>

                        {loading && <Spin size="large" />}
                        {error && <Typography.Paragraph type="danger">导航数据加载失败：{error.message}</Typography.Paragraph>}
                        {data && selectedKey && <Contents data={data} selectedKey={selectedKey} />}
                    </div>
                </Layout.Content>

                <Footers desc="本网站提供的内容信息仅供参考，用户应自行判断并承担使用风险。" />
            </Layout>
        </Layout>
    );
};

export default App;