import { Nav } from '@douyinfe/semi-ui'
import { IconAvatar, IconToken, IconHeart, IconCascader, IconCollapse } from '@douyinfe/semi-icons-lab'

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
                    { itemKey: 'home', text: '首页内容', icon: <IconAvatar /> },
                    {
                        text: '附属网站',
                        icon: <IconToken />,
                        itemKey: 'subsite',
                        items: [
                            { text: '爱莫能助', icon: <IconCascader />, itemKey: '/A2zml/' }, 
                            { text: '魔法网络', icon: <IconCollapse />, itemKey: '/A2zml/v2/' }],
                    },
                    { itemKey: 'linkso', text: '友情链接', icon: <IconHeart /> },
                ]}
                onClick={key => handleNavClick(key)}
            />
        </div>
    )
}

export default SideNav