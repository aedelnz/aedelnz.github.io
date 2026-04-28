import { useState, useEffect } from 'react'
import { Typography, List, Modal, Input, Toast } from '@douyinfe/semi-ui'
import { CardItem } from '../Interfaces' // 寕入导航项和卡片项接口
import Cards from './Cards' // 引入卡片组件

const { Title } = Typography

const STORAGE_KEY = 'customize_cards'

const Customize = () => {
    const [datas, setDatas] = useState<CardItem[]>(() => {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) return JSON.parse(stored) as CardItem[]
        const defaultData: CardItem[] = []
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData))
        return defaultData
    })
    const [visible, setVisible] = useState(false)
    const [formData, setFormData] = useState<CardItem>({ id: 0, name: '', desc: '', icon: '', url: '' })
    useEffect(() => {
        if (datas.length >= 0) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(datas))
        }
    }, [datas])

    const handleAdd = () => {
        const newItem: CardItem = { id: datas.length + 1, name: formData.name, desc: formData.desc, icon: formData.icon, url: formData.url }
        if (!newItem.name || !newItem.url) {
            Toast.error({ content: '请输入网站名称或URL', duration: 1, stack: true })
            return
        }
        setDatas([...datas, newItem])
        setVisible(false)
        setFormData({ id: 0, name: '', desc: '', icon: '', url: '' })
    }

    const handleDelete = (id: string | number | undefined) => {
        setDatas(datas.filter(item => item.id !== id))
    }

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    return (
        <div style={{ width: '100%', margin: '20px auto' }}>
            <List
                grid={{ gutter: 8, xs: 12, sm: 12, md: 8, lg: 6 }}
                header={<Title heading={4} link onClick={() => setVisible(true)}>添加网站</Title>}
                dataSource={datas}
                renderItem={item => (<List.Item><Cards items={item} onDelete={handleDelete} /></List.Item>)} />
            <Modal title="添加自定义网站" visible={visible} onOk={handleAdd} onCancel={() => setVisible(false)} okText="添加" cancelText="取消">
                <div>
                    <Input style={{ marginBottom: 8 }} prefix="网站名称" value={formData.name} onChange={(value) => handleInputChange('name', value)} placeholder="请输入网站名称" />
                    <Input style={{ marginBottom: 8 }} prefix="网站描述" value={formData.desc} onChange={(value) => handleInputChange('desc', value)} placeholder="请输入网站描述" />
                    <Input style={{ marginBottom: 8 }} prefix="图标链接" value={formData.icon} onChange={(value) => handleInputChange('icon', value)} placeholder="https://" />
                    <Input style={{ marginBottom: 8 }} prefix="网站链接" value={formData.url} onChange={(value) => handleInputChange('url', value)} placeholder="https://" />
                </div>
            </Modal>
        </div>
    )
}

export default Customize