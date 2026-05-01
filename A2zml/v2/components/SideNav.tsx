import { Button, Nav } from '@douyinfe/semi-ui'
import { IconApartment } from '@douyinfe/semi-icons'
import { IconBadgeStar, IconRating } from '@douyinfe/semi-icons-lab/lib/es/icons'

const SideNav = () => {
    // 导航点击处理函数
    const handleNavClick = (data: { itemKey?: string | number; text?: string }) => {
        const { itemKey, text } = data
        if (text === '爱莫能助' || text === '魔法网络') {
            window.open(String(itemKey))
            return
        }
        if (itemKey) {
            const targetElement = document.getElementById(String(itemKey))
            if (targetElement) {
                const top = targetElement.getBoundingClientRect().top + window.pageYOffset - 80
                window.scrollTo({ top, behavior: 'smooth' })
            }
        }
    }
    return (
        <div style={{ width: '100%' }}>
            <Nav
                items={[
                    { itemKey: 'ProxyTool', text: '代理工具', icon: <IconBadgeStar /> },
                    { itemKey: 'SubsNode', text: '订阅节点', icon: <IconRating /> },
                ]}
                onClick={key => handleNavClick(key)}
                header={<Button onClick={() => window.location.href = '/'} theme='borderless' type='tertiary' icon={<IconApartment />} block>个人主页</Button>}
            />
        </div>
    )
}

export default SideNav
