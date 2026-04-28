import React, { useMemo, useState } from 'react'
import { Button, Nav } from '@douyinfe/semi-ui'
import { IconApartment } from '@douyinfe/semi-icons'
import * as SemiIcons from '@douyinfe/semi-icons'
import * as SemiIconsLab from '@douyinfe/semi-icons-lab'
import { NavData } from '../Interfaces' // 寕入导航项和卡片项接口
import { IconUpload } from '@douyinfe/semi-icons-lab'

type IconComponentType = React.ComponentType<unknown>

const SideNav = ({ datas, onSelectCategory }: { datas: NavData[]; onSelectCategory: (id: string | number) => void; }) => {
    // 状态管理
    const [openKeys, setOpenKeys] = useState<(string | number)[]>([])
    // 选中项
    const [selectedKeys, setSelectedKeys] = useState<(string | number)[]>([])
    // 图标映射
    const iconMap = useMemo(() => {
        const map: Record<string, IconComponentType> = {}
        const allExports = { ...SemiIcons, ...SemiIconsLab }
        Object.entries(allExports).forEach(([key, value]) => {
            if (key.startsWith('Icon') && (typeof value === 'function' || typeof value === 'object')) map[key] = value as IconComponentType
        })
        return map
    }, [])
    // 构造 Nav Items
    const navItems = useMemo(() => {
        const renderIcon = (iconName?: string) => {
            if (!iconName) return null
            const IconComponent = iconMap[iconName]
            return IconComponent ? <IconComponent /> : null
        }
        return datas?.map(item => ({
            text: item.title,
            itemKey: item.id,
            icon: renderIcon(item.icon),
            items: item.nav?.map(sub => ({
                text: sub.title,
                itemKey: sub.id,
                icon: renderIcon(sub.icon),
            }))
        }))
    }, [datas, iconMap])

    const onOpenChange = ({ openKeys = [] }: { openKeys?: (string | number)[] }) => {
        if (openKeys.length > 0) {
            const currentKey = openKeys[openKeys.length - 1]
            setOpenKeys([currentKey])
        } 
    }

    const onSelect = ({ selectedKeys = [], itemKey }: { selectedKeys: (string | number)[]; itemKey?: string | number; }) => {
        setSelectedKeys(selectedKeys)
        if (itemKey) onSelectCategory(itemKey)
    }

    return (
        <Nav
            style={{ width: '100%', paddingBottom: '16px' }}
            openKeys={openKeys}
            selectedKeys={selectedKeys}
            items={navItems}
            onSelect={onSelect}
            onOpenChange={onOpenChange}
            header={<Button onClick={() => window.location.href = '/'} theme='borderless' type='tertiary' icon={<IconApartment />} block>个人主页</Button>}
            footer={<Button onClick={() => window.open('https://wj.qq.com/s2/25645278/5e9a/', '_blank')}  theme='borderless' type='tertiary' icon={<IconUpload />} block>收录提交</Button>}
        />
    )
}

export default SideNav
