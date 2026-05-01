import { useState } from 'react'
import { Layout, Nav, Avatar, Typography, Button, SideSheet } from '@douyinfe/semi-ui'
import { IconMenu } from '@douyinfe/semi-icons'
import SemiThemer from './components/SemiThemer' // 主题切换
import SideNav from './components/SideNav' // 侧边栏
import Homer from './components/Homer' // 首页内容
import SubSite from './components/SubSite' // 附属网站
import Linkso from './components/Linkso' // 友情链接

const { Header, Sider, Footer, Content } = Layout
const { Text } = Typography

const App = () => {
  // 侧边栏
  const [visible, setVisible] = useState(false)
  // 切换侧边栏
  const change = () => setVisible(!visible)

  return (
    <>
      <Layout>
        <Header>
          <div>
            <Nav
              mode={'horizontal'}
              header={{
                logo: <Avatar src="/favicon.png" size="default" shape="square" alt="图标" />,
                text: '画的个人记录'
              }}
              footer={
                <>
                  <SemiThemer />
                  <Button id="button-sidesheet" type="tertiary" icon={<IconMenu />} onClick={change} />
                </>
              }
            />
          </div>
        </Header>
        <Sider>
          <SideNav />
          <SideSheet title='画的个人记录' visible={visible} onCancel={change} placement="left" style={{ width: 'auto' }}>
            <SideNav />
          </SideSheet>
        </Sider>
        <Content>
          <div id='home' className='contents'>
            <Homer />
            <SubSite />
            <Linkso />
          </div>
          <Footer>
            <div>
              <span>Copyright © 2020-{new Date().getFullYear()} <Text link={{ href: 'https://jixiejidiguan.top/' }} underline>画的<span className="Highlight">个人记录</span></Text>. All Rights Reserved. </span>
            </div>
            <div>
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
