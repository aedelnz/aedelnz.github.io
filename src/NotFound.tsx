import '@douyinfe/semi-ui/react19-adapter'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Empty, Button, Space } from '@douyinfe/semi-ui'
import { IllustrationNotFound, IllustrationNotFoundDark } from '@douyinfe/semi-illustrations'
import Headers from './components/element/Headers'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Headers configNav={{
      siteLogo: '/favicon.png',
      siteName: '404 Not Found',
      items: [],
    }} onChange={() => { }} />
    <div style={{ height: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Empty
        image={<IllustrationNotFound style={{ width: 150, height: 150 }} />}
        darkModeImage={<IllustrationNotFoundDark style={{ width: 150, height: 150 }} />}
        title="404 Not Found"
        description="页面不存在或已被删除">
        <Space>
          <Button type="primary" onClick={() => window.location.href = '/'}>返回主页</Button>
          <Button type="primary" onClick={() => window.location.href = '/A2zml/'}>爱莫能助</Button>
        </Space>
      </Empty>
    </div>
  </StrictMode>,
)
