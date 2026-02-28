import { useState, useEffect, useMemo } from 'react';
import { Input, Space, Select, Button, Card, Typography, Grid, } from '@arco-design/web-react';
import { IconUpload } from '@arco-design/web-react/icon';
import { CardItemType, SearchType } from './Data';
import ContentCard from './ContentCard';

function InputSearch(db: CardItemType[], search: SearchType[]) {
  const [searchEngine, setSearchEngine] = useState(search[0].name);
  const [searchValue, setSearchValue] = useState('');
  const [showResults, setShowResults] = useState(false);

  const flattenedDb = useMemo(() => {
    const results: CardItemType[] = [];
    const flatten = (data: CardItemType[] | CardItemType) => {
      if (Array.isArray(data)) {
        data.forEach(item => flatten(item));
      } else if (typeof data === 'object' && data !== null) {
        if (data.name && data.url) {
          results.push({
            name: data.name,
            desc: data.desc,
            url: data.url,
            icon: data.icon
          });
        }
        Object.values(data).forEach(value => {
          if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
            flatten(value);
          }
        });
      }
    };
    flatten(db);
    return results;
  }, [db]);

  const searchResults = useMemo(() => {
    if (!searchValue.trim() || searchEngine !== '本站') {
      return [];
    }
    const keyword = searchValue.trim().toLowerCase();
    return flattenedDb.filter(item => {
      const nameMatch = item.name?.toLowerCase().includes(keyword);
      const descMatch = item.desc?.toLowerCase().includes(keyword);
      const urlMatch = item.url?.toLowerCase().includes(keyword);
      return nameMatch || descMatch || urlMatch;
    });
  }, [searchValue, searchEngine, flattenedDb]);

  const handleSearch = (value: string) => {
    const engine = search.find((item: SearchType) => item.name === searchEngine);
    if (engine && value.trim()) {
      if (searchEngine === '本站') {
        setShowResults(true);
      } else {
        window.open(`${engine.url}${encodeURIComponent(value)}`, '_blank');
        setShowResults(false);
      }
    } else {
      setShowResults(false);
    }
  };

  const debouncedValue = useMemo(() => {
    const handler = setTimeout(() => {
      if (searchEngine === '本站' && searchValue.trim()) {
        setShowResults(true);
      }
    }, 300);
    
    return () => {
      clearTimeout(handler);
    };
  }, [searchValue, searchEngine]);

  useEffect(() => {
    if (!searchValue.trim()) {
      setShowResults(false);
    }
    return debouncedValue;
  }, [debouncedValue, searchValue]);

  return (
    <>
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
      {showResults && (
        <div style={{ marginBottom: 24 }}>
          <Card title={`搜索结果 (${searchResults.length})`}>
            {searchResults.length > 0 ? (
              <>
                <Grid cols={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6, xxl: 6 }} colGap={2} rowGap={3}>
                  {searchResults.map((subItem: CardItemType, index) => (
                    <Grid.GridItem key={index}>
                      <ContentCard item={subItem} />
                    </Grid.GridItem>
                  ))}
                </Grid>
              </>

            ) : (
              <Typography.Paragraph style={{ textAlign: 'center' }}>没有找到匹配的结果</Typography.Paragraph>
            )}
          </Card>
        </div>
      )}
    </>
  );
}
export default InputSearch;
