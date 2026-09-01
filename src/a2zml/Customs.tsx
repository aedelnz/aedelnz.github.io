import { useCallback, useState } from "react"
import { Button, Card, Input, List, SideSheet, Space, Toast, Typography } from "@douyinfe/semi-ui"
import { IconPlus } from "@douyinfe/semi-icons"
import type { CardItem } from "./Data"
import { useWindowHeight } from '../component/lib/Breakpoints'
import useLocalStorage from '../component/lib/LocalStorage'
import CACard from "../component/fast/CACard"

const Customs = ({ custom = true }: { custom?: boolean }) => {
    const [form, setForm] = useState({ name: '', desc: '', icon: '', url: '' })
    const [visible, setVisible] = useState(false)
    const { value: customData, setValue: setCustomData } = useLocalStorage<CardItem[]>('a2zml-custom', [])
    const screenHeight = useWindowHeight()
    const toggleVisible = useCallback(() => setVisible(v => !v), [])
    // 添加自定义网站项
    const handleAdd = () => {
        const name = form.name.trim()
        const url = form.url.trim()
        if (!name || !url) {
            Toast.info({ content: '标题地址不能为空', duration: 1.5, stack: true })
            return
        }
        const newItem: CardItem = {
            id: Date.now(),
            name,
            desc: form.desc.trim(),
            icon: form.icon.trim(),
            url
        }
        // 函数式更新，确保基于最新状态
        setCustomData(prev => [newItem, ...prev])
        setForm({ name: '', desc: '', icon: '', url: '' })
        toggleVisible()
    }
    // 删除自定义网站项
    const handleDelete = (id?: string | number) => {
        if (id == null) return
        setCustomData(prev => prev.filter(item => item.id !== id))
    }

    return (
        <>
            {custom && (
                <section style={{ margin: '20px 0' }}>
                    <Typography.Title heading={3}>自定义网站
                        <Button colorful theme="solid" type="primary" size='small' icon={<IconPlus />} onClick={toggleVisible} style={{ marginLeft: '8px' }} />
                    </Typography.Title>
                    <List
                        grid={{ gutter: 4, xs: 12, sm: 12, md: 12, lg: 8, xl: 8, xxl: 6 }}
                        dataSource={customData ?? []}
                        renderItem={(item) => (
                            <List.Item style={{ margin: '4px 0px' }}>
                                <CACard data={item} onDelete={handleDelete} />
                            </List.Item>
                        )}
                    />
                    <SideSheet title='添加自定义网站' height={screenHeight} visible={visible} onCancel={toggleVisible} closeOnEsc={true} placement='bottom'>
                        <Card style={{ maxWidth: '400px', margin: '16px auto' }}>
                            <Space vertical style={{ width: '100%' }}>
                                {[
                                    { key: 'name', placeholder: '站点名称' },
                                    { key: 'url', placeholder: 'https://example.com' },
                                    { key: 'icon', placeholder: '图标 URL（可选）' },
                                    { key: 'desc', placeholder: '描述（可选）' },
                                ].map(({ key, placeholder }) => (
                                    <Input
                                        key={key}
                                        value={form[key as keyof typeof form]}
                                        onChange={(val) => setForm(prev => ({ ...prev, [key]: val }))}
                                        placeholder={placeholder}
                                    />
                                ))}
                                <Button theme='solid' type='primary' onClick={handleAdd}>保存</Button>
                            </Space>
                        </Card>
                    </SideSheet>
                </section>
            )}
        </>
    )
}

export default Customs