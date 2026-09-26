import '@douyinfe/semi-ui/react19-adapter'
import '../../index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Layout, List, Nav, Typography } from '@douyinfe/semi-ui'
import { OpenTool, SubscribeNode } from './Data'
import DarkMode from '../../component/fast/DarkMode'
import Hitokotos from '../../component/Hitokotos'
import Footers from '../../component/Footers'
import OpenToolCard from './component/OpenToolCard'
import SubscribeNodeCard from './component/SubscribeNodeCard'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout>
      <Layout.Header className='semi-layout-header-diy'>
        <Nav
          mode={'horizontal'}
          header={{ text: '魔法网络' }}
          footer={<DarkMode />}
        />
      </Layout.Header>
      <Layout>
        <Layout.Content className='semi-layout-content-diy'>
          <Hitokotos />
          <div style={{}}>
            <section style={{ margin: '16px 0' }}>
              <Typography.Title heading={3}>开源工具</Typography.Title>
              <Typography.Paragraph>来源 GitHub 仓库</Typography.Paragraph>
              <div style={{ margin: '12px 0' }}>
                <List
                  grid={{ gutter: 12, xs: 24, sm: 12, md: 12, lg: 8, xl: 8, xxl: 6, }}
                  dataSource={OpenTool}
                  renderItem={item => (
                    <List.Item style={{ margin: '8px 2px' }}><OpenToolCard data={item} /></List.Item>
                  )}
                />
              </div>
            </section>
            <section style={{ margin: '16px 0' }}>
              <Typography.Title heading={3}>订阅节点</Typography.Title>
              <Typography.Paragraph>来源 互联网 收录</Typography.Paragraph>
              <div style={{ margin: '12px 0' }}>
                <List
                  grid={{ gutter: 12, xs: 24, sm: 12, md: 12, lg: 8, xl: 8, xxl: 6, }}
                  dataSource={SubscribeNode}
                  renderItem={item => (
                    <List.Item style={{ margin: '8px 2px' }}><SubscribeNodeCard data={item} /></List.Item>
                  )}
                />
              </div>
            </section>
          </div>
        </Layout.Content>
      </Layout>
      <Footers desc='本网站提供的内容信息仅供参考，用户应自行判断并承担使用风险。' />
    </Layout>
  </StrictMode>,
)
