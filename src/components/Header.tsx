import { useState, useEffect } from 'react';
import { Affix, Divider, PageHeader, Button, Drawer, Space } from '@arco-design/web-react';
import { IconMenuFold } from '@arco-design/web-react/icon';
import { NAV_LINKS } from '../constants/Data';

function Header() {
    // 侧边导航栏隐藏显示
    const [visible, setVisible] = useState(false);
    // 自适应按钮判断
    const [isMobile, setIsMobile] = useState(false);
    // 更新
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        // 初始化
        checkScreenSize();
        // 监听窗口变化
        window.addEventListener('resize', checkScreenSize);
        // 清理
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <>
            <Affix>
                <div>
                    <PageHeader
                        style={{ background: 'var(--color-bg-2)' }}
                        title={<span>画的<span style={{ color: 'var(--color-data-1)' }}>个人记录</span></span>}
                        extra={isMobile ? (
                            <Button size='large' type='secondary' icon={<IconMenuFold />} onClick={() => { setVisible(true); }} />
                        ) : (
                            <Space>
                                {NAV_LINKS.map((friend, index) => (
                                    <Button key={index} size='large' type='text' href={friend.link} style={{ fontWeight: '700' }}>{friend.title}</Button>
                                ))}
                            </Space>
                        )}
                    />
                    <Divider style={{ margin: '0 auto' }} />
                </div>
            </Affix>
            <Drawer
                width={260}
                title={<span>画的导航</span>}
                visible={visible}
                footer={null}
                onCancel={() => { setVisible(false); }}
            >
                <Space direction='vertical' style={{ width: '100%' }}>
                    {NAV_LINKS.map((friend, index) => (
                        <Button key={index} size='large' type='secondary' long onClick={() => { setVisible(false); }} href={friend.link} style={{ fontWeight: '700', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>{friend.title}</Button>
                    ))}
                </Space>
            </Drawer>
        </>
    )
}
export default Header