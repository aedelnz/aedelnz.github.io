import { useState } from 'react';
import { Layout, Menu, PageHeader, Radio, Typography, Link, Divider, Grid, Card, Space, Avatar, Button, BackTop, Tooltip, Affix } from '@arco-design/web-react';
import { IconSwap, IconShrink, IconCodeSandbox, IconUp } from '@arco-design/web-react/icon';
import '../src/App.css'
import db from './data/db.json';
import search from './data/search.json';
import { MenuItemType, CardItemType } from './Data';
import SubMenuItem from './SubMenuItem';
import InputSearch from './InputSearch';



function App() {
  // 当前年份
  const currentYear = new Date().getFullYear();
  // 菜单是否折叠
  const [collapsed, setCollapsed] = useState(false);
  // 状态管理
  const [selectedKeys, setSelectedKeys] = useState('0-0');

  // 数据处理函数
  const getCurrentNavData = () => {
    const [penKey, navId] = selectedKeys.split('-').map(Number);
    const currentItem = db[penKey];
    if (!currentItem?.nav?.length) {
      return null;
    }
    return {
      currentItem,
      selectedNavItem: currentItem.nav[navId] || currentItem.nav[0],
      navToRender: (currentItem.nav[navId] || currentItem.nav[0])?.nav || []
    };
  };
  const renderContent = () => {
    const navData = getCurrentNavData();
    if (!navData?.navToRender.length) {
      return null;
    }
    return (
      <Affix offsetTop={64}>
        <div>
        <Radio.Group mode='fill' type='button' defaultValue='small'>
          {navData.navToRender.map((item: MenuItemType, index) => (
            <Radio
              key={index}
              value={index}
              onClick={() => {
                const el = document.getElementById(item.id?.toString() || '');
                el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              {item.title}
            </Radio>
          ))}
        </Radio.Group>
        </div>
      </Affix>
    );
  }
  const renderContentBody = () => {
    const navData = getCurrentNavData();
    if (!navData?.navToRender.length) {
      return null;
    }
    return (
      <>
        {navData.navToRender.map((item: MenuItemType, index) => (
          <div key={`a1-${index}`}>
            <Typography>
              <Typography.Title heading={6} id={item.id?.toString()}>{item.title}</Typography.Title>
            </Typography>
            <Grid cols={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6, xxl: 6 }} colGap={2} rowGap={3}>
              {item.nav?.map((subItem: CardItemType, index) => (
                <Grid.GridItem key={index}>
                  <Card hoverable={true} bodyStyle={{ padding: '2px', height: '45px', display: 'flex', alignItems: 'center' }} onClick={() => window.open(subItem.url, '_blank')}>
                    <Space align='center'>
                      <Tooltip content={subItem.desc}>
                        <Avatar size={43} shape='square' style={{ backgroundColor: 'var(--color-menu-dark-hover)' }}>
                          {subItem.icon ? (<img alt='avatar' src={subItem.icon} onError={(e) => { e.currentTarget.src = '/stop.png'; }} />) : (<IconCodeSandbox style={{ color: 'var(--color-text-1)' }} />)}
                        </Avatar>
                      </Tooltip>
                      <Typography.Text className='text-ellipsis-2' style={{ margin: 'auto', fontWeight: 'bold' }}>{subItem.name}</Typography.Text>
                    </Space>
                  </Card>
                </Grid.GridItem>
              ))}
            </Grid>
          </div>
        ))}
      </>
    );
  }


  return (
    <>
      <Layout>
        <Layout.Sider
          style={{ height: '100vh', position: 'fixed', top: '0', left: '0' }}
          trigger={collapsed ? <IconSwap /> : <IconShrink />}
          breakpoint='md'
          onCollapse={setCollapsed}
          collapsed={collapsed}
          collapsible>
          <Menu
            defaultSelectedKeys={[selectedKeys]}
            selectedKeys={[selectedKeys]}
            onClickSubMenu={(key) => {
              setSelectedKeys(`${key}-0`);
            }}
            onClickMenuItem={(key) => {
              setSelectedKeys(key);
            }}
          >
            {SubMenuItem(db)}
          </Menu>
        </Layout.Sider>
        <Layout style={{ marginLeft: collapsed ? '46px' : '200px' }}>
          <Affix>
            <Layout.Header style={{ background: 'var(--color-bg-1)' }}>
              <PageHeader
                title='爱莫能助'
                subTitle='一个追番导航站'
              />
              <Divider style={{ margin: '0 auto' }} />
            </Layout.Header>
          </Affix>
          <Layout.Content style={{ padding: '8px' }}>
            {InputSearch(db, search)}

            
            
            {renderContent()}
            {renderContentBody()}
          </Layout.Content>
          <Layout.Footer style={{ background: 'var(--color-neutral-1)' }}>
            <Divider style={{ margin: '0' }} />
            <footer style={{ padding: '1rem' }}>
              <Typography style={{ textAlign: 'center' }}>
                <Typography.Paragraph bold>Copyright © 2020 - {currentYear}  <Link hoverable={false} href='https://jixiejidiguan.top'>画的个人记录</Link>. All Rights Reserved.</Typography.Paragraph>
                <Typography.Paragraph>本网站提供的内容信息仅供参考，用户应自行判断并承担使用风险。</Typography.Paragraph>
              </Typography>
            </footer>
          </Layout.Footer>
          <BackTop visibleHeight={80}>
            <Button type='outline' status='success' icon={<IconUp />} style={{ width: 40, height: 40 }} />
          </BackTop>
        </Layout>
      </Layout>
    </>
  );
}

export default App;