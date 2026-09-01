import { Nav, SideSheet } from '@douyinfe/semi-ui'

const SideSheets = ({ items, visible, onChange }: {
    items: { text: string; itemKey: string }[];
    visible: boolean;
    onChange: () => void;
}) => {
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
                // 关闭侧边栏
                onChange()
            }
        }
    }
    return (
        <div>
            <SideSheet title="菜单" style={{ width: 'auto' }} bodyStyle={{ padding: '0' }} visible={visible} onCancel={onChange} placement='left'>
                <Nav
                    mode={'vertical'}
                    items={items}
                    onClick={NavClick}
                />
            </SideSheet>
        </div>
    )
}
export default SideSheets