import { useMatchBreakpoint, useScrollThreshold } from '../lib/Breakpoints'
import { Nav, Avatar, Button } from '@douyinfe/semi-ui'
import Themes from './Themes'
import { IconMenu } from '@douyinfe/semi-icons'

const Headers = ({ configNav, onChange }: {
    configNav: {
        siteLogo: string;
        siteName: string;
        items: { text: string; itemKey: string }[];
    };
    onChange?: () => void;
}) => {
    // 解构配置项
    const { siteLogo, siteName, items } = configNav
    // 获取当前断点
    const breakpoint = useMatchBreakpoint('md')
    // 监听滚动事件
    const isScrolled = useScrollThreshold()
    // 导航栏点击事件
    const NavClick = (data: { itemKey?: string; }) => {
        const { itemKey } = data
        if (itemKey) {
            // 处理外部链接和内部链接
            if (/^https?:\/\//.test(String(itemKey)) || /^\//.test(String(itemKey))) {
                window.open(String(itemKey))
                return
            }
            // 处理内部定位
            const targetElement = document.getElementById(String(itemKey))
            if (targetElement) {
                const top = targetElement.getBoundingClientRect().top + window.pageYOffset - 80
                window.scrollTo({ top, behavior: 'smooth' })
            }
        }
    }

    return (
        <div>
            <Nav
                style={{
                    backgroundColor: isScrolled ? 'var(--semi-color-bg-0)' : 'transparent',
                    boxShadow: 'var(--semi-color-shadow)',
                    transition: 'background-color 0.3s ease'
                }}
                mode={'horizontal'}
                {...(breakpoint && { items: items })}
                header={{
                    logo: <Avatar shape="square" size="small" alt="图标" src={siteLogo} />,
                    text: siteName
                }}
                footer={
                    <>
                        <Themes />
                        {!breakpoint && <Button type="secondary" icon={<IconMenu />} onClick={onChange} />}
                    </>
                }
                onClick={NavClick}
            />
        </div>
    )
}
export default Headers