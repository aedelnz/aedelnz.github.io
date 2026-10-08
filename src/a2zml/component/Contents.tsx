import { useCallback, useState } from 'react'
import { Button, Input, List, Modal, Space, Typography } from '@douyinfe/semi-ui'
import { IconPlus, IconEdit } from '@douyinfe/semi-icons'
import { type NavData, type CardItem } from '../Data'
import { useLocalStorage } from '../../hook/useLocalStorage'
import { useToast } from '../../module/useToast'
import ItemCard from './ItemCard'

const Contents = ({ data, selectedKey }: { data: NavData[]; selectedKey: number }) => {
    const selected = data.flatMap((item) => item.nav ?? []).find((item) => item.id === selectedKey)

    const [modalVisible, setModalVisible] = useState(false) // 新增：受控 Modal 开关
    const [editable, setEditable] = useState(false)
    const [form, setForm] = useState({ name: '', desc: '', icon: '', url: '' })
    const [customData, setCustomData] = useLocalStorage<CardItem[]>('a2zmlData', [])
    const Toast = useToast()
    
    const toggleEditable = useCallback(() => setEditable((v) => !v), [])
    const toggleModal = useCallback(() => setModalVisible((v) => !v), [])

    const handleAdd = () => {
        const name = form.name.trim()
        const url = form.url.trim()
        if (!name || !url) {
            Toast.info('标题地址不能为空')
            return
        }
        const newItem: CardItem = { id: Date.now(), name, desc: form.desc.trim(), icon: form.icon.trim(), url }
        setCustomData((prev) => [newItem, ...prev])
        setForm({ name: '', desc: '', icon: '', url: '' })
        // 同时关闭两个入口，避免 SideSheet 误开
        setModalVisible(false)
    }

    const handleDelete = (id?: string | number) => {
        if (id == null) return
        setCustomData((prev) => prev.filter((item) => item.id !== id))
    }

    // 只负责打开弹窗
    const openModal = () => setModalVisible(true)

    const fields = [
        { key: 'name', placeholder: '站点名称' },
        { key: 'url', placeholder: 'https://example.com' },
        { key: 'icon', placeholder: '图标 URL（可选）' },
        { key: 'desc', placeholder: '描述（可选）' },
    ] as const

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
                            onClick={openModal}
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

                {/* 受控 Modal：form 变化可以正常驱动输入框重渲染 */}
                <Modal
                    title="添加自定义网站"
                    visible={modalVisible}
                    onCancel={toggleModal}
                    onOk={handleAdd}
                    style={{ maxWidth: '320px' }}
                >
                    {fields.map(({ key, placeholder }) => (
                        <Input
                            key={key}
                            placeholder={placeholder}
                            value={form[key]}
                            onChange={(val) => setForm((prev) => ({ ...prev, [key]: val }))}
                            style={{ margin: '6px 0' }}
                        />
                    ))}
                </Modal>
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