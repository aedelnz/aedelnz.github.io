import { useState } from 'react';
import { Layout, Menu, PageHeader, Radio, Typography, Link, Divider, Grid, Card, Space, Avatar, Select, Input, Button, BackTop, Tooltip, Affix } from '@arco-design/web-react';
import { IconSwap, IconShrink, IconCodeSandbox, IconUp, IconUpload } from '@arco-design/web-react/icon';
import '../src/App.css'
import db from './data/db.json';
import search from './data/search.json';

// 定义菜单数据类型
interface MenuItemType {
  title?: string;
  nav?: MenuItemType[];
  icon?: string;
  id?: number;
}

interface CardItemType {
  name?: string;
  desc?: string;
  icon?: string;
  url?: string;
  id?: number;
}

interface SearchType {
  name?: string;
  url?: string;
}

function App() {
  // 菜单是否折叠
  const [collapsed, setCollapsed] = useState(false);
  // 状态管理
  const [selectedKeys, setSelectedKeys] = useState('0-0');
  // 当前年份
  const currentYear = new Date().getFullYear();
  // 递归渲染菜单函数
  const renderMenuItem = (menuData: MenuItemType[], parentKey = '') => {
    return menuData.map((item, index) => {
      return (<Menu.Item key={`${parentKey}-${index}`}>{item.title}</Menu.Item>);
    });
  }
  // 递归渲染子菜单函数
  const renderSubMenu = (menuData: MenuItemType[]) => {
    return menuData.map((item, index) => {
      const key = `${index}`;
      return (<Menu.SubMenu key={key} title={<span>{item.icon ? <img className='arco-icon arco-icon-code-sandbox' src={item.icon} alt='icon' /> : <IconCodeSandbox />}{item.title}</span>}>{renderMenuItem(item.nav || [], key)}</Menu.SubMenu>);
    });
  };
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
  // 搜索功能处理
  const [searchEngine, setSearchEngine] = useState(search[0].name);
  const [searchValue, setSearchValue] = useState('');
  const handleSearch = (value: string) => {
    const engine = search.find((item: SearchType) => item.name === searchEngine);
    if (engine && value.trim()) {
      window.open(`${engine.url}${encodeURIComponent(value)}`, '_blank');
    } else if (searchEngine === '本站') {
      // 搜索功能
    }
  };

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
            {renderSubMenu(db)}
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

            <Space direction='vertical' style={{ marginBottom: 24, width: '100%', maxWidth: '600px' }}>
              <div style={{ margin: '1rem auto', display: 'flex', marginBottom: 12, alignItems: 'center', }}>
                <Input.Group compact style={{ width: '100%' }}>
                  <Select value={searchEngine} showSearch style={{ width: '30%' }} onChange={(value) => setSearchEngine(value)}>
                    {search.map((item: SearchType, index) => (
                      <Select.Option key={`a0-${index}`} value={item.name || ''}>{item.name}</Select.Option>
                    ))}
                  </Select>
                  <Input.Search placeholder='请输入搜索内容' style={{ width: '70%' }} value={searchValue} onChange={setSearchValue} onSearch={handleSearch} />
                </Input.Group>
              </div>
              <Button type='primary' icon={<IconUpload />} onClick={() => window.open('https://wj.qq.com/s2/25645278/5e9a/', '_blank')}>收录提交</Button>
            </Space>
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