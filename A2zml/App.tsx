import { useState, useMemo, useCallback } from 'react';
import { Layout, Menu, PageHeader, Radio, Typography, Link, Divider, Grid, Button, BackTop, Affix } from '@arco-design/web-react';
import { IconSwap, IconShrink, IconUp, IconHome } from '@arco-design/web-react/icon';
import '../src/App.css'
import ContentCard from './ContentCard';
import db from './data/db.json';
import search from './data/search.json';
import { MenuItemType, CardItemType } from './Data';
import SubMenuItem from './SubMenuItem';
import InputSearch from './InputSearch';

// 滚动到指定元素
const scrollToElement = (id: string) => {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// 获取当前导航数据
const getCurrentNavData = (db: typeof import('./data/db.json'), selectedKeys: string) => {
  const [penKey, navId] = selectedKeys.split('-').map(Number);
  const currentItem = db[penKey];
  if (!currentItem?.nav?.length) return null;

  const selectedNavItem = currentItem.nav[navId] || currentItem.nav[0];
  return {
    currentItem,
    selectedNavItem,
    navToRender: selectedNavItem?.nav || []
  };
};

function App() {
  const currentYear = new Date().getFullYear();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState('0-0');

  // 使用 useMemo 缓存导航数据，避免重复计算
  const navData = useMemo(() => getCurrentNavData(db, selectedKeys), [selectedKeys]);

  // 菜单点击处理
  const handleMenuClick = useCallback((key: string | number) => {
    setSelectedKeys(String(key));
  }, []);

  const handleSubMenuClick = useCallback((key: string | number) => {
    setSelectedKeys(`${key}-0`);
  }, []);

  // 渲染顶部标签栏
  const renderNavTabs = () => {
    if (!navData?.navToRender?.length) return null;

    return (
      <Affix offsetTop={64}>
        <Radio.Group mode='fill' type='button' defaultValue='small'>
          {navData.navToRender.map((item: MenuItemType, index: number) => (
            <Radio key={index} value={index} onClick={() => scrollToElement(item.id?.toString() || '')}>
              {item.title}
            </Radio>
          ))}
        </Radio.Group>
      </Affix>
    );
  };

  // 渲染内容主体
  const renderContentBody = () => {
    if (!navData?.navToRender?.length) return null;

    return (
      <>
        {navData.navToRender.map((item: MenuItemType, index: number) => (
          <div key={`nav-${index}`}>
            <Typography>
              <Typography.Title heading={6} id={item.id?.toString()}>{item.title}</Typography.Title>
            </Typography>
            <Grid cols={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6, xxl: 6 }} colGap={2} rowGap={3}>
              {item.nav?.map((subItem: CardItemType, idx: number) => (
                <Grid.GridItem key={idx}>
                  <ContentCard item={subItem} />
                </Grid.GridItem>
              ))}
            </Grid>
          </div>
        ))}
      </>
    );
  };

  return (
    <Layout>
      <Layout.Sider
        style={{ height: '100vh', position: 'fixed', top: 0, left: 0 }}
        trigger={collapsed ? <IconSwap /> : <IconShrink />}
        breakpoint='md'
        onCollapse={setCollapsed}
        collapsed={collapsed}
        collapsible
      >
        <Menu
          defaultSelectedKeys={[selectedKeys]}
          selectedKeys={[selectedKeys]}
          onClickSubMenu={handleSubMenuClick}
          onClickMenuItem={handleMenuClick}
        >
          {SubMenuItem(db)}
        </Menu>
      </Layout.Sider>

      <Layout style={{ marginLeft: collapsed ? 46 : 200 }}>
        <Affix>
          <Layout.Header style={{ background: 'var(--color-bg-1)' }}>
            <PageHeader
              title='爱莫能助'
              subTitle='一个追番导航站'
              extra={
                <Button type='secondary' icon={<IconHome />} href='/' />
              }
            />
            <Divider style={{ margin: '0 auto' }} />
          </Layout.Header>
        </Affix>

        <Layout.Content style={{ padding: 8 }}>
          {InputSearch(db, search)}
          {renderNavTabs()}
          {renderContentBody()}
        </Layout.Content>

        <Layout.Footer style={{ background: 'var(--color-neutral-1)' }}>
          <Divider style={{ margin: 0 }} />
          <footer style={{ padding: '1rem' }}>
            <Typography style={{ textAlign: 'center' }}>
              <Typography.Paragraph bold>
                Copyright © 2020 - {currentYear} {' '}
                <Link hoverable={false} href='https://jixiejidiguan.top'>画的个人记录</Link>. All Rights Reserved.
              </Typography.Paragraph>
              <Typography.Paragraph>
                本网站提供的内容信息仅供参考，用户应自行判断并承担使用风险。
              </Typography.Paragraph>
            </Typography>
          </footer>
        </Layout.Footer>

        <BackTop visibleHeight={80}>
          <Button type='outline' status='success' icon={<IconUp />} style={{ width: 40, height: 40 }} />
        </BackTop>
      </Layout>
    </Layout>
  );
}

export default App;
