import { useEffect, useState } from 'react'
import { Nav, Avatar, Space, Button } from '@douyinfe/semi-ui'
import { IconAccessibility, IconBadgeStar, IconHeart, IconRating, IconSideSheet, IconToken } from '@douyinfe/semi-icons-lab'
import { useBreakpoint } from './lib/Breakpoints'
import DarkMode from './fast/DarkMode'

const Headers = ({ mode = 'horizontal', change }: { mode?: 'horizontal' | 'vertical'; change?: () => void; }) => {
    const [opacity, setOpacity] = useState(0);
    // 获取当前断点
    const breakpoint = useBreakpoint('md') // 监听 'md' 断点
    // 导航栏数据
    const data = [
        {
            itemKey: 'isO',
            text: '其他页面',
            icon: <IconToken />,
            items: [
                { itemKey: '/A2zml/', text: '爱莫能助', icon: <IconRating /> },
                { itemKey: '/A2zml/v2/', text: '魔法网络', icon: <IconBadgeStar /> }
            ],
        },
        { itemKey: 'works', text: '其他作品', icon: <IconHeart /> },
        { itemKey: 'links', text: '友情链接', icon: <IconAccessibility /> },

    ]
    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const newOpacity = Math.min(window.scrollY / 100, 1);
                    setOpacity(newOpacity);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 滚动到指定ID的元素的函数
    const scrollToId = (id: string, offset: number = 80) => {
        const element = document.getElementById(id)
        if (element) {
            const rect = element.getBoundingClientRect()
            // 当前滚动位置
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop
            // 计算目标滚动位置（元素顶部 - 偏移量）
            const targetScroll = rect.top + currentScroll - offset;
            window.scrollTo({ top: targetScroll, behavior: 'smooth' })
        }
    }
    // 处理导航栏点击事件
    const onSelect = (data: { itemKey: string | number }) => {
        const text = String(data.itemKey)
        if (text.startsWith('/')) {
            window.open(text)
            return
        }
        scrollToId(text)
    }

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Nav
                style={{ height: '100%', backgroundColor: opacity < 1 ? 'transparent' : 'var(--semi-color-nav-bg)', transition: 'background-color 0.2s ease, box-shadow 3s ease', }}
                mode={mode}
                {...(!breakpoint && { items: data })}
                {...(mode === 'vertical' && { items: data })}
                onSelect={onSelect}
                header={{
                    logo: <Avatar shape="square" size="default" src='/favicon.png' />,
                    text: '画的个人记录'
                }}
                footer={mode === 'horizontal' &&
                    <Space>
                        <DarkMode />
                        {breakpoint && (
                            <Button
                                theme='borderless'
                                type="tertiary"
                                icon={<IconSideSheet />}
                                onClick={() => change?.()}
                            />
                        )}
                    </Space>
                }
            />
        </div>
    )
}

export default Headers