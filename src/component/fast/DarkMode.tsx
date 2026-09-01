import { useEffect } from "react"
import { Button, Popover } from "@douyinfe/semi-ui"
import { IconMoon, IconSun } from "@douyinfe/semi-icons"
import useLocalStorage from "../lib/LocalStorage"

const DarkMode = () => {
    // 使用自定义的 useLocalStorage 钩子来管理主题模式
    const { value: theme, setValue: setTheme } = useLocalStorage<'light' | 'dark'>('theme-mode', 'light')
    // 切换主题模式的函数
    const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
    // 当主题模式发生变化时，更新 body 元素的属性
    useEffect(() => {
        const body = document.body
        if (theme === 'dark') {
            body.setAttribute('theme-mode', 'dark')
        } else {
            body.removeAttribute('theme-mode')
        }
    }, [theme])
    return (
        <Popover
            position='bottomRight'
            trigger='click'
            content={
                <article style={{ padding: 6 }}>
                    {theme === 'light' ? '切换到深色模式' : '切换到浅色模式'}
                </article>
            }
        >
            <Button
                theme='borderless'
                type="tertiary"
                icon={theme === 'light' ? <IconMoon /> : <IconSun />}
                onClick={toggleTheme}
            />
        </Popover>
    )
}

export default DarkMode