import { useState, useEffect } from 'react'
import { Button, Dropdown, Toast } from '@douyinfe/semi-ui'
import { IconSun, IconMoon } from '@douyinfe/semi-icons'
import { IconColorPlatteNew } from '@douyinfe/semi-icons-lab'

const Themer = () => {
    const STORAGE_KEY = 'semi-theme-mode'
    const getInitialTheme = () => {
        const savedTheme = localStorage.getItem(STORAGE_KEY)
        return savedTheme === 'dark' ? 'dark' : 'light'
    }

    const [themeMode, setThemeMode] = useState(getInitialTheme)

    useEffect(() => {
        if (themeMode === 'dark') {
            document.body.setAttribute('theme-mode', 'dark')
        } else {
            document.body.removeAttribute('theme-mode')
        }
    }, [themeMode])

    const setLightMode = () => {
        document.body.removeAttribute('theme-mode')
        localStorage.setItem(STORAGE_KEY, 'light')
        setThemeMode('light')
        Toast.success({ content: '浅色模式已启用', duration: 1, stack: true })
    }

    const setDarkMode = () => {
        document.body.setAttribute('theme-mode', 'dark')
        localStorage.setItem(STORAGE_KEY, 'dark')
        setThemeMode('dark')
        Toast.success({ content: '深色模式已启用', duration: 1, stack: true })
    }

    return (
        <Dropdown
            position={'bottomRight'}
            showTick
            render={
                <Dropdown.Menu>
                    <Dropdown.Title>主题模式</Dropdown.Title>
                    <Dropdown.Item icon={<IconSun />} active={themeMode === 'light'} onClick={setLightMode}>亮色模式</Dropdown.Item>
                    <Dropdown.Item icon={<IconMoon />} active={themeMode === 'dark'} onClick={setDarkMode}>暗色模式</Dropdown.Item>
                </Dropdown.Menu>
            }
        >
            <Button type="secondary" icon={<IconColorPlatteNew />} aria-label="主题" />
        </Dropdown>
    )
}

export default Themer