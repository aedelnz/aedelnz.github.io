import { useState } from 'react'
import { Layout, Nav, Avatar, Typography, Button, SideSheet } from '@douyinfe/semi-ui'
import { IconMenu } from '@douyinfe/semi-icons'
import SemiThemer from '../../src/components/SemiThemer' // 主题切换
import SideNav from './components/SideNav' // 侧边栏
import SubCards from './components/SubCards' // 内容卡片

// 布局
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
                text: '魔法网络'
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
          <SideSheet placement="left" style={{ width: '240px' }} bodyStyle={{ padding: 0 }} title={<>画的<span className="Highlight">个人记录</span></>} visible={visible} onCancel={change}>
            <SideNav />
          </SideSheet>
        </Sider>
        <Content>
          <div id='a2zml' className='contents'>
            <SubCards />
          </div>
          <Footer>
            <div>
              <span>Copyright © 2020-{new Date().getFullYear()} <Text link={{ href: 'https://jixiejidiguan.top/A2zml/' }} underline>魔法网络</Text>. All Rights Reserved. </span>
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
