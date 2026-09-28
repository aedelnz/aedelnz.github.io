import { useCallback, useState } from 'react'
import { Button, Card, Input, List, SideSheet, Space, Toast, Typography } from '@douyinfe/semi-ui'
import { IconPlus, IconEdit } from '@douyinfe/semi-icons'
import { type NavData, type CardItem } from '../Data'
import { useBreakpoint } from '../../hook/useBreakpoint'
import { useLocalStorage } from '../../hook/useLocalStorage'
import ItemCard from './ItemCard'

const Contents = ({ data, selectedKey }: { data: NavData[]; selectedKey: number }) => {
    // 获取当前 id 数据组
    const selected = data.flatMap((item) => item.nav ?? []).find((item) => item.id === selectedKey)
    // 数据值
    const [visible, setVisible] = useState(false)
    const [editable, setEditable] = useState(false)
    const [form, setForm] = useState({ name: '', desc: '', icon: '', url: '' })
    const [customData, setCustomData] = useLocalStorage<CardItem[]>('a2zmlData', [])
    const { height } = useBreakpoint()
    const toggleVisible = useCallback(() => setVisible((v) => !v), [])
    const toggleEditable = useCallback(() => setEditable((v) => !v), [])
    // 添加自定义网站项
    const handleAdd = () => {
        const name = form.name.trim()
        const url = form.url.trim()
        if (!name || !url) {
            Toast.info({ content: '标题地址不能为空', duration: 1.5, stack: true })
            return
        }
        const newItem: CardItem = { id: Date.now(), name, desc: form.desc.trim(), icon: form.icon.trim(), url }
        // 函数式更新，确保基于最新状态
        setCustomData((prev) => [newItem, ...prev])
        setForm({ name: '', desc: '', icon: '', url: '' })
        toggleVisible()
    }
    // 删除自定义网站项
    const handleDelete = (id?: string | number) => {
        if (id == null) return
        setCustomData((prev) => prev.filter((item) => item.id !== id))
    }

    return (
        <div>
            <section style={{ margin: '20px 0' }}>
                <Typography.Title heading={3}>
                    <Space align='center'>
                        自定义网站
                        <Button
                            colorful
                            theme="solid"
                            type="primary"
                            size="small"
                            icon={<IconPlus />}
                            onClick={toggleVisible}
                            style={{ marginLeft: '8px' }}
                        />
                        <Button
                            colorful
                            type="tertiary"
                            size="small"
                            icon={<IconEdit />}
                            onClick={toggleEditable}
                            style={{ marginLeft: '8px' }}
                        />
                    </Space>
                </Typography.Title>
                <List
                    grid={{ gutter: 4, xs: 12, sm: 12, md: 12, lg: 8, xl: 8, xxl: 6 }}
                    dataSource={customData ?? []}
                    renderItem={(item) => (
                        <List.Item style={{ margin: '4px 0px' }}>
                            <ItemCard data={item} onDelete={handleDelete} editable={editable} />
                        </List.Item>
                    )}
                />
                <SideSheet
                    title="添加自定义网站"
                    height={height}
                    visible={visible}
                    onCancel={toggleVisible}
                    closeOnEsc={true}
                    placement="bottom"
                >
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
                                    onChange={(val) =>
                                        setForm((prev) => ({ ...prev, [key]: val }))
                                    }
                                    placeholder={placeholder}
                                />
                            ))}
                            <Button theme="solid" type="primary" onClick={handleAdd}>
                                保存
                            </Button>
                        </Space>
                    </Card>
                </SideSheet>
            </section>
            {selected ? (
                (selected.nav ?? []).map((group) => (
                    <section key={String(group.id)} style={{ margin: '20px 0' }}>
                        <Typography.Title heading={3}>{group.title}</Typography.Title>
                        <List
                            grid={{ gutter: 4, xs: 12, sm: 12, md: 12, lg: 8, xl: 8, xxl: 6 }}
                            dataSource={group.nav ?? []}
                            renderItem={(item) => (
                                <List.Item style={{ margin: '4px 0px' }}>
                                    <ItemCard data={item} />
                                </List.Item>
                            )}
                        />
                    </section>
                ))
            ) : (
                <Typography.Paragraph>请选择一个导航分类</Typography.Paragraph>
            )}
        </div>
    )
}

export default Contents