import { Avatar, Nav } from "@douyinfe/semi-ui"
import { createElement, useState, type ElementType } from 'react'
import { useDB } from '../component/lib/DB'
import { useWindowHeight } from '../component/lib/Breakpoints'
import * as SemiIcons from '@douyinfe/semi-icons'
import * as SemiIconsLab from '@douyinfe/semi-icons-lab'

const NavSides = ({ onSelect, onbreakpointBoot, onCollapseChange, }: { onSelect: (key: string) => void, onbreakpointBoot: boolean, onCollapseChange?: (collapsed: boolean) => void, }) => {
    const [openKeys, setOpenKeys] = useState<(string | number)[]>([])
    const [selectedKeys, setSelectedKeys] = useState<(string | number)[]>([])
    const { data } = useDB()
    const screenHeight = useWindowHeight()
    const iconComponents = { ...SemiIcons, ...SemiIconsLab, } as unknown as Record<string, ElementType>
    const getNavIcon = (iconName?: string) => {
        const Icon = iconName ? iconComponents[iconName] : undefined
        return Icon ? createElement(Icon) : undefined
    }
    const navdata = (data ?? []).map((item) => ({
        itemKey: String(item.id ?? ''),
        text: item.title ?? '',
        icon: getNavIcon(item.icon),
        items: (item.nav ?? []).map((item) => ({
            itemKey: String(item.id ?? ''),
            text: item.title ?? '',
            icon: getNavIcon(item.icon),
        })),
    }))
    // 处理选中项的变化
    const onOpenChange = ({ openKeys = [] }: { openKeys?: (string | number)[] }) => {
        if (openKeys.length > 0) {
            const currentKey = openKeys[openKeys.length - 1]
            setOpenKeys([currentKey])
        }
    }
    // 处理选中项的变化
    const onSelects = ({itemKey}: {itemKey: string | number}) => {
        const text = String(itemKey)
            if (text.startsWith('/') || text.startsWith('https')) {
                window.open(text)
                return
            }
        onSelect(String(itemKey))
        setSelectedKeys([itemKey])
    }
    return (
        <Nav
            openKeys={openKeys}
            selectedKeys={selectedKeys}
            style={{ maxWidth: 220, height: '100%' }}
            bodyStyle={{ height: screenHeight - 192 }}
            isCollapsed={onbreakpointBoot}
            onOpenChange={onOpenChange}
            onCollapseChange={onCollapseChange}
            items={navdata}
            onSelect={onSelects}
            header={{
                logo: <Avatar shape="square" size="default" src='/favicon.png' onClick={() => { window.open('/') }} />,
                text: '爱莫能助',
            }}
            footer={{
                collapseButton: true,
            }}
        />
    )
}

export default NavSides