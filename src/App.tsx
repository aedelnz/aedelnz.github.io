import Header from './components/Header'
import Homer from './components/Homer'
import MySocial from './components/MySocial'
import MyWork from './components/MyWork'
import PublicService from './components/PublicService'
import FriendlyLinks from './components/FriendlyLinks'
import Footer from './components/Footer'
import './App.css'
import { Layout } from '@arco-design/web-react'

function App() {
  return (
    <>
    <Layout style={{ background: 'var(--color-bg-2)' }}>
      <Header />
      <Homer />
      <MySocial />
      <MyWork />
      <PublicService />
      <FriendlyLinks />
      <Footer />
    </Layout>
    </>
  )
}

export default App
