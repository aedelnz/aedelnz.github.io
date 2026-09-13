import { useEffect, useState } from 'react';
import { Nav, Avatar, Space, Button } from '@douyinfe/semi-ui';
import { IconAccessibility, IconBadgeStar, IconHeart, IconRating, IconSideSheet, IconToken } from '@douyinfe/semi-icons-lab';
import { useBreakpoint } from '../hook/useBreakpoint';
import DarkMode from './fast/DarkMode';

const Headers = ({ mode = 'horizontal', change }: { mode?: 'horizontal' | 'vertical'; change?: () => void }) => {
    const [opacity, setOpacity] = useState(0);
    const { isMobile } = useBreakpoint();

    const items = [
        {
            itemKey: 'isO',
            text: '其他页面',
            icon: <IconToken />,
            items: [
                { itemKey: 'A2zml', url: '/A2zml/', text: '爱莫能助', icon: <IconRating /> },
                { itemKey: 'v2', url: '/A2zml/v2/', text: '魔法网络', icon: <IconBadgeStar /> }
            ]
        },
        { itemKey: 'works', text: '其他作品', icon: <IconHeart /> },
        { itemKey: 'links', text: '友情链接', icon: <IconAccessibility /> }
    ];

    // 滚动透明度
    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setOpacity(Math.min(window.scrollY / 100, 1));
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 滚动定位
    const scrollToId = (id: string, offset = 80) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
    };

    // 根据 itemKey 查找 item
    const findItem = (key: string) => {
        for (const item of items) {
            if (item.itemKey === key) return item;
            if (item.items) {
                const child = item.items.find(i => i.itemKey === key);
                if (child) return child;
            }
        }
        return null;
    };

    // 点击事件
    const onSelect = ({ itemKey }: { itemKey: string | number }) => {
        const key = String(itemKey);
        const item = findItem(key);

        if (!item) return;

        // 存在 url → 跳转
        if (item.url) {
            window.location.assign(item.url);
            return;
        }

        // 不存在 url → 滚动定位
        scrollToId(key);
    };

    return (
        <Nav
            style={{
                height: '100%',
                backgroundColor: opacity < 1 ? 'transparent' : 'var(--semi-color-nav-bg)',
                transition: 'background-color .2s ease, box-shadow 3s ease'
            }}
            mode={mode}
            items={(!isMobile || mode === 'vertical') ? items : undefined}
            onSelect={onSelect}
            header={{
                logo: <Avatar shape="square" size="default" src="/favicon.png" />,
                text: '画的个人记录'
            }}
            footer={
                mode === 'horizontal' && (
                    <Space>
                        <DarkMode />
                        {isMobile && (
                            <Button
                                theme="borderless"
                                type="tertiary"
                                icon={<IconSideSheet />}
                                onClick={() => change?.()}
                            />
                        )}
                    </Space>
                )
            }
        />
    );
};

export default Headers;
