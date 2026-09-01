import { useState } from 'react'
import { Layout } from '@douyinfe/semi-ui'
import Headers from './component/Headers'
import SideSheets from './component/SideSheets'
import Carousels from './component/Carousels'
import Hitokotos from './component/Hitokotos'
import Works from './component/Works'
import Links from './component/Links'
import Footers from './component/Footers'

const App = () => {
  // 侧边栏的显示状态
  const [sideSheet, setSideSheet] = useState(false)
  // 切换侧边栏显示状态的函数
  const change = () => setSideSheet(!sideSheet)
  return (
    <Layout style={{ backgroundColor: 'rgba(var(--semi-grey-0), 1)' }}>
      <Layout.Header className='semi-layout-header-diy'>
        <Headers change={change} />
        <SideSheets sideSheet={sideSheet} change={change} />
      </Layout.Header>
      <Layout>
        <Carousels />
        <Hitokotos />
        <Layout.Content className='semi-layout-content-diy' style={{ marginTop: 0 }}>
          <div
            style={{
              borderRadius: '10px',
              border: '1px solid var(--semi-color-border)',
              padding: '8px',
            }}
          >
            <Works />
            <Links />
          </div>
        </Layout.Content>
      </Layout>
      <Footers />
    </Layout>
  )
}


export default App
