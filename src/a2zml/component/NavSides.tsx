import { createElement, type ElementType, type Dispatch, type SetStateAction } from 'react'
import { Avatar, Nav, Tooltip } from "@douyinfe/semi-ui"
import { useBreakpoint } from '../../hook/useBreakpoint'
import { type NavData } from "../Data"
import * as SemiIcons from '@douyinfe/semi-icons'
import * as SemiIconsLab from '@douyinfe/semi-icons-lab'

const NavSides = ({ data, isCollapsed, setIsCollapsed, setNavId }: { data: NavData[] | null; isCollapsed?: boolean; setIsCollapsed: Dispatch<SetStateAction<boolean>>; setNavId: Dispatch<number>; }) => {
    const { height } = useBreakpoint()
    const iconComponents = { ...SemiIcons, ...SemiIconsLab, } as unknown as Record<string, ElementType>
    const getNavIcon = (iconName?: string) => {
        const Icon = iconName ? iconComponents[iconName] : undefined
        return Icon ? createElement(Icon) : undefined
    }

    const NavDataItems = (data ?? []).map((item) => ({
        itemKey: item.id,
        text: item.title,
        icon: getNavIcon(item.icon),
        items: (item.nav ?? []).map((subitem) => ({
            itemKey: subitem.id,
            text: subitem.title,
            icon: getNavIcon(subitem.icon),
        }))
    }))
    const isValidHttpURL = (url: string): boolean => {
        if (!url || typeof url !== 'string') return false;
        return /^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(url.trim());
    };
    const onSelect = (data: any) => {
        const id = data.itemKey;
        if (typeof id === 'string') {
            if (isValidHttpURL(id)) {
                window.location.assign(id)
            }
        } else if (typeof id === 'number') {
            setNavId(id)
        }
    }

    return (
        <Nav
            style={{ maxWidth: 220, height: '100%' }}
            bodyStyle={{ height: height - 192 }}
            isCollapsed={isCollapsed}
            onCollapseChange={setIsCollapsed}
            onSelect={onSelect}
            items={NavDataItems}
            header={{
                logo: <Tooltip content={'首页'} position={'right'}><Avatar shape="square" size="default" src='/favicon.png' onClick={() => { window.location.assign('/') }} /></Tooltip>,
                text: '爱莫能助',
            }}
            footer={{
                collapseButton: true,
            }}
        />
    )
}

export default NavSides