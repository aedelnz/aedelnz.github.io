import { useMemo, useState } from 'react';
import { Button, Collapsible, Layout, Spin, Switch, Typography, Descriptions, Card } from '@douyinfe/semi-ui';
import { IconSetting } from '@douyinfe/semi-icons';
import { useBreakpoint } from '../hook/useBreakpoint';
import { useRequest } from '../hook/useRequest';
import useLocalStorage from '../component/lib/LocalStorage';
import { type NavData } from './Data'
import DarkMode from '../component/fast/DarkMode';
import NavSides from './component/NavSides';
import Searchs from './Searchs';
import Customs from './Customs';
import Contents from './Contents';
import Footers from '../component/Footers';

interface OpenData {
    isOpen: boolean;
    search: boolean;
    center: boolean;
    custom: boolean;
    Show: boolean;
    Selected: boolean;
}

const App = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true)
    const [navId, setNavId] = useState<number>()

    const { value: openData, setValue: setOpenData } = useLocalStorage<OpenData>(
        'a2zml-data',
        { isOpen: false, search: true, center: true, custom: true, Show: true, Selected: true }
    );

    const { value: savedKey } = useLocalStorage('a2zml-data-Selected', '');
    const { data, loading, error } = useRequest<NavData[]>('/root/db.json');
    const { height } = useBreakpoint();

    const selectedKey = useMemo(() => {
        if (!openData.Show || !data) return null;

        const firstKey = data[0]?.nav?.[0]?.id;
        const keyToSet = openData.Selected ? savedKey : firstKey;

        return keyToSet ? String(keyToSet) : null;
    }, [data, savedKey, openData.Show, openData.Selected]);


    const switches = [
        { key: 'search', label: '搜索框' },
        { key: 'center', label: '搜索框居中' },
        { key: 'custom', label: '自定义网站' },
        { key: 'Show', label: '首页列表显示' },
        { key: 'Selected', label: '侧边栏记忆' }
    ] as const;
    const onbreakpoint = (_screen: string, bool: boolean) => {
        setIsCollapsed(!bool)
        console.log(bool);

    };

    return (
        <Layout style={{ backgroundColor: 'rgba(var(--semi-grey-0), 1)', height }}>
            <Layout.Sider
                style={{ backgroundColor: 'var(--semi-color-bg-1)' }}
                breakpoint={['md']}
                onBreakpoint={onbreakpoint}
            >
                <NavSides data={data ?? []} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} setNavId={setNavId} />
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
                                onClick={() => setOpenData(prev => ({ ...prev, isOpen: !prev.isOpen }))}
                            />
                            <DarkMode />
                        </div>

                        {/* 设置面板 */}
                        <Collapsible isOpen={openData.isOpen}>
                            <Card style={{ marginTop: 10 }}>
                                <Descriptions align="left">
                                    {switches.map(({ key, label }) => (
                                        <Descriptions.Item key={key} itemKey={label}>
                                            <Switch
                                                checked={openData[key]}
                                                onChange={checked =>
                                                    setOpenData(prev => ({
                                                        ...prev,
                                                        [key]: checked,
                                                        isOpen: !openData.isOpen
                                                    }))
                                                }
                                            />
                                        </Descriptions.Item>
                                    ))}
                                </Descriptions>
                            </Card>
                        </Collapsible>

                        {/* 搜索区 */}
                        <div style={openData.center ? { display: 'flex', alignItems: 'center', height: height - 200 } : undefined}>
                            <div style={{ width: '100%' }}>
                                <Searchs data={data ?? []} search={openData.search} />
                                <Customs custom={openData.custom} />
                            </div>
                        </div>

                        {/* 内容区 */}
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
