import { useState } from 'react';
import { Layout, Menu, PageHeader, Radio, Typography, Link, Divider, Grid, Card, Space, Avatar, Select, Input, Button, BackTop, Tooltip, Affix } from '@arco-design/web-react';
import { IconSwap, IconShrink, IconCodeSandbox, IconUp, IconUpload } from '@arco-design/web-react/icon';
import '../src/App.css'
import db from './data/db.json';
import search from './data/search.json';
import { MenuItemType, CardItemType, SearchType } from './Data';
import SubMenuItem from './SubMenuItem';

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
  // 搜索功能处理
  const [searchEngine, setSearchEngine] = useState(search[0].name);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  
  // 搜索功能
  const handleSearch = (value: string) => {
    const engine = search.find((item: SearchType) => item.name === searchEngine);
    if (engine && value.trim()) {
      if (searchEngine === '本站') {
        // 本站搜索
        const results = searchInDb(value.trim());
        setSearchResults(results);
        setShowResults(true);
      } else {
        // 外部搜索引擎
        window.open(`${engine.url}${encodeURIComponent(value)}`, '_blank');
        setShowResults(false);
      }
    } else {
      setShowResults(false);
    }
  };
  
  // 在 db.json 中搜索
  const searchInDb = (keyword: string): any[] => {
    const results: any[] = [];
    
    // 递归搜索函数
    const searchRecursive = (data: any[] | any) => {
      if (Array.isArray(data)) {
        data.forEach(item => {
          searchRecursive(item);
        });
      } else if (typeof data === 'object' && data !== null) {
        // 检查是否是网站条目
        if (data.name && data.url) {
          const nameMatch = data.name?.toLowerCase().includes(keyword.toLowerCase());
          const descMatch = data.desc?.toLowerCase().includes(keyword.toLowerCase());
          const urlMatch = data.url?.toLowerCase().includes(keyword.toLowerCase());
          
          if (nameMatch || descMatch || urlMatch) {
            results.push({
              name: data.name,
              desc: data.desc,
              url: data.url,
              icon: data.icon
            });
          }
        }
        
        // 继续递归搜索子项
        Object.values(data).forEach(value => {
          if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
            searchRecursive(value);
          }
        });
      }
    };
    
    searchRecursive(db);
    return results;
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
            
            {/* 搜索结果显示 */}
            {showResults && (
              <div style={{ marginBottom: 24 }}>
                <Card title={`搜索结果 (${searchResults.length})`}>
                  {searchResults.length > 0 ? (
                    <Space direction='vertical' style={{ width: '100%' }}>
                      {searchResults.map((result, index) => (
                        <Card key={index} hoverable={true} style={{ width: '100%' }} onClick={() => window.open(result.url, '_blank')}>
                          <Space align='center'>
                            <Avatar size={40} shape='square'>
                              {result.icon ? <img alt='icon' src={result.icon} /> : null}
                            </Avatar>
                            <div style={{ flex: 1 }}>
                              <Typography.Title heading={5} style={{ margin: '0' }}>{result.name}</Typography.Title>
                              {result.desc && (
                                <Typography.Paragraph style={{ margin: '0' }} className='text-ellipsis-2'>{result.desc}</Typography.Paragraph>
                              )}
                            </div>
                          </Space>
                        </Card>
                      ))}
                    </Space>
                  ) : (
                    <Typography.Paragraph style={{ textAlign: 'center' }}>没有找到匹配的结果</Typography.Paragraph>
                  )}
                </Card>
              </div>
            )}
            
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