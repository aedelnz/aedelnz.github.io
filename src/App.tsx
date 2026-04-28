import { useState, useEffect } from 'react'
import { Layout, Nav, Skeleton, Avatar, Typography, Button, SideSheet } from '@douyinfe/semi-ui'
import { IconMenu } from '@douyinfe/semi-icons'
import SemiThemer from './components/SemiThemer' // 主题切换
import SideNav from './components/SideNav' // 侧边栏
import Homer from './components/Homer' // 首页内容
import SubSite from './components/SubSite' // 附属网站
import Linkso from './components/Linkso' // 友情链接

const App = () => {
  // 侧边栏
  const [visible, setVisible] = useState(false)
  // 加载中
  const [loadings, setLoadings] = useState(true)
  // 切换侧边栏
  const change = () => setVisible(!visible)
  // 模拟数据加载
  useEffect(() => {
    // 组件挂载时开始加载数据
    const loadData = async () => {
      try {
        // 模拟网络请求延迟
        await new Promise(resolve => setTimeout(resolve, 1000))
        // 加载完成
        setLoadings(false)
      } catch (error) {
        console.error('加载失败:', error)
        setLoadings(false)
      }
    }
    loadData()
  }, [])
  // 布局
  const { Header, Sider, Footer, Content } = Layout
  const { Title, Text } = Typography

  return (
    <>
      <Layout>
        <Header>
          <div>
            <Nav mode="horizontal">
              <Nav.Header>
                <Avatar shape="square" size="small" src='/favicon.png' alt="来源：" />
                <Title heading={4} style={{ margin: '0 4px' }}>画的<span className="Highlight">个人记录</span></Title>
              </Nav.Header>
              <Nav.Footer>
                <SemiThemer />
                <Button id='menu' className="hf" type="tertiary" icon={<IconMenu />} onClick={change} />
              </Nav.Footer>
            </Nav>
          </div>
        </Header>
        <Sider>
          <SideNav />
          <SideSheet placement="left" style={{ width: '240px' }} bodyStyle={{ padding: 0 }} title={<>画的<span className="Highlight">个人记录</span></>} visible={visible} onCancel={change}>
            <SideNav />
          </SideSheet>
        </Sider>
        <Content>
          <div id='home' className='contents'>
            <Skeleton placeholder={<><Skeleton.Image style={{ width: '100%', height: 150 }} /><Skeleton.Paragraph rows={10} /></>} active={true} loading={loadings}>
              <Homer />
              <SubSite />
              <Linkso />
            </Skeleton>
          </div>
          <Footer>
            <div>
              <span>Copyright © 2020-{new Date().getFullYear()} <Text link={{ href: 'https://jixiejidiguan.top/' }} underline>画的<span className="Highlight">个人记录</span></Text>. All Rights Reserved. </span>
            </div>
            <div className='ic'>
              <Text link={{ href: 'https://jixiejidiguan.top/' }} underline>湘ICP备2022000040号</Text>
              <Text link={{ href: 'https://icp.gov.moe/?keyword=20220440' }} underline>萌ICP备20220440号</Text>
              <Text link={{ href: 'https://www.12377.cn/' }} underline>违法和不良信息举报中心</Text>
            </div>
          </Footer>
        </Content>

      </Layout>
    </>
  )
}


export default App
