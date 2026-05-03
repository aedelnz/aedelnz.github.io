import { useState, useEffect, useCallback } from 'react'
import { Layout, Nav, Skeleton, Avatar, Typography, Button, SideSheet, Banner, Collapsible, Descriptions, Switch } from '@douyinfe/semi-ui'
import { IconMenu, IconSetting } from '@douyinfe/semi-icons'
import SemiThemer from '../src/components/SemiThemer' // 主题切换
import SideNav from './components/SideNav' // 侧边栏
import SubSearch from './components/SubSearch' // 搜索栏
import SubCards from './components/SubCards' // 网站卡片
import Customize from './components/Customize' // 自定义网站卡片


// 布局
const { Header, Sider, Footer, Content } = Layout
const { Text } = Typography
interface NavItem { nav: []; id: string | number; }
interface DataItem { nav: NavItem[]; id: string | number; }

const App = () => {
  // 侧边栏
  const [visible, setVisible] = useState(false)
  // 加载中
  const [loadings, setLoadings] = useState(true)
  // 是否展开设置
  const [isOpen, setIsOpen] = useState(false)
  // 附属网站数据
  const [data, setData] = useState([])
  // 显示数据
  const [displayData, setDisplayData] = useState([])
  // 切换侧边栏
  const change = () => setVisible(!visible)

  // 是否关闭通知横幅
  const [isCloseBanner, setIsCloseBanner] = useState(() => {
    const saved = localStorage.getItem('isCloseBanner')
    return saved !== null ? JSON.parse(saved) : true
  })
  // 搜索模式
  const [isTabMode, setIsTabMode] = useState(() => {
    const saved = localStorage.getItem('isTabMode')
    return saved !== null ? JSON.parse(saved) : true
  })
  // 是否开启自定义网站
  const [isCustomMode, setIsCustomMode] = useState(() => {
    const saved = localStorage.getItem('isCustomMode')
    return saved !== null ? JSON.parse(saved) : true
  })

  // 保存状态到 localStorage
  useEffect(() => {
    localStorage.setItem('isTabMode', JSON.stringify(isTabMode));
    localStorage.setItem('isCloseBanner', JSON.stringify(isCloseBanner));
    localStorage.setItem('isCustomMode', JSON.stringify(isCustomMode));
  }, [isTabMode, isCloseBanner, isCustomMode]);

  // 加载数据
  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch('/root/a2zml/db.json').then(res => res.json())
        setData(res)
        setDisplayData(res[0]?.nav[0].nav || [])
        setLoadings(false)
      } catch (error) {
        console.error('加载失败:', error)
        setLoadings(false)
      }
    }
    loadData()
  }, [])
  // 新增：处理菜单点击的逻辑
  const handleSelect = useCallback((itemKey: string | number) => {
    // 1. 定义 nav 子项类型


    const selectedCategory = (data as DataItem[]).flatMap(item => item.nav).find(nav => nav.id === itemKey);
    if (selectedCategory && selectedCategory.nav) {
      setDisplayData(selectedCategory.nav);
    }
    // 如果是移动端（SideSheet 展开时），点击后自动关闭
    setVisible(false);
  }, [data]);

  return (
    <>
      <Layout>
        <Header>
          <div>
            <Nav
              mode={'horizontal'}
              header={{
                logo: <Avatar src="/favicon.png" size="default" shape="square" alt="图标" />,
                text: '爱莫能助'
              }}
              footer={
                <>
                  <SemiThemer />
                  <Button type="tertiary" icon={<IconSetting />} onClick={() => setIsOpen(!isOpen)} />
                  <Button id="button-sidesheet" type="tertiary" icon={<IconMenu />} onClick={change} />
                </>
              }
            />
          </div>
        </Header>
        <Sider>
          <SideNav datas={data} onSelectCategory={handleSelect} />
          <SideSheet title='画的个人记录' visible={visible} onCancel={change} placement="left" style={{ width: 'auto' }}>
            <SideNav datas={data} onSelectCategory={handleSelect} />
          </SideSheet>
        </Sider>
        <Content>
          {isCloseBanner && <Banner onClose={() => setIsCloseBanner(true)} type="danger" description="本网站提供的内容信息仅供参考，用户应自行判断并承担使用风险。" bordered />}
          <Collapsible isOpen={isOpen}>
            <Descriptions layout='vertical' size="large">
              <Descriptions.Item itemKey="是否开启通知横幅"><Switch defaultChecked={isCloseBanner} checkedText="关" uncheckedText="开" onChange={setIsCloseBanner} /></Descriptions.Item>
              <Descriptions.Item itemKey="是否开启标签选择样式"><Switch defaultChecked={isTabMode} checkedText="关" uncheckedText="开" onChange={setIsTabMode} /></Descriptions.Item>
              <Descriptions.Item itemKey="是否开启自定义网站"><Switch defaultChecked={isCustomMode} checkedText="关" uncheckedText="开" onChange={setIsCustomMode} /></Descriptions.Item>
            </Descriptions>
          </Collapsible>
          <div id='a2zml' className='contents'>
            <SubSearch isTabMode={isTabMode} data={data} />
            {isCustomMode && <Customize />}
            <Skeleton placeholder={<><Skeleton.Image style={{ width: '100%', height: 150 }} /><Skeleton.Paragraph rows={10} /></>} active={true} loading={loadings}>
              <div id='mainShow'>
                <SubCards datas={displayData} />
              </div>
            </Skeleton>
          </div>
          <Footer>
            <div>
              <span>Copyright © 2020-{new Date().getFullYear()} <Text link={{ href: 'https://jixiejidiguan.top/A2zml/' }} underline>爱莫能助</Text>. All Rights Reserved. </span>
            </div>
            <div>
              <Text>本网站提供的内容信息仅供参考，用户应自行判断并承担使用风险。</Text>
            </div>
          </Footer>
        </Content>
      </Layout>
    </>
  )
}


export default App
