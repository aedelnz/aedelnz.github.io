import { useState, useEffect } from 'react'
import { Fetchs } from './components/lib/Fetchs'
import { Layout } from '@douyinfe/semi-ui'
import { IconAvatar, IconToken, IconHeart, IconCascader, IconCollapse } from '@douyinfe/semi-icons-lab'
import Headers from './components/element/Headers'
import SideSheets from './components/element/SideSheets'
import Carousels from './components/element/Carousels'
import SubSite from './components/SubSite'
import Links from './components/Links'

const App = () => {
  // 首页数据
  const [data, setData] = useState<any>([])
  // 侧边栏是否可见
  const [visible, setVisible] = useState(false)
  // 页头配置
  const configNav = {
    siteLogo: '/favicon.png',
    siteName: '画的个人记录',
    items: [
      { text: '首页内容', icon: <IconAvatar />, itemKey: 'home', },
      {
        text: '附属网站',
        icon: <IconToken />,
        itemKey: 'subsite',
        items: [
          { text: '爱莫能助', icon: <IconCascader />, itemKey: '/A2zml/' },
          { text: '魔法网络', icon: <IconCollapse />, itemKey: '/A2zml/v2/' }],
      },
      { text: '友情链接', icon: <IconHeart />, itemKey: 'linkso', },
    ]
  }
  // 切换侧边栏可见性
  const change = () => setVisible(!visible)
  // 获取首页数据
  useEffect(() => {
    const load = async () => {
      const data = await Fetchs('/root/index.json');
      if (data) {
        setData(data);
      }
    }
    load();
    
  }, []);
  return (
    <>
      <Layout>
        <Layout.Header>
          <Headers configNav={configNav} onChange={change} />
        </Layout.Header>
        <Layout.Sider>
          <SideSheets items={configNav.items} visible={visible} onChange={change} />
        </Layout.Sider>
        <Layout.Content>
          <Carousels data={data.about} />
          <div style={{ height: '100px' }} />
          <div style={{ padding: '8px' }}>
            <SubSite />
            <Links />
          </div>
        </Layout.Content>
      </Layout >
    </>
  )
}

export default App
