import { useState, useEffect, useMemo, useRef } from 'react';
import { Input, Space, Select, Button, Card, Avatar, Typography } from '@arco-design/web-react';
import { IconUpload } from '@arco-design/web-react/icon';
import { CardItemType, SearchType } from './Data';

function InputSearch(db: CardItemType[], search: SearchType[]) {
  const [searchEngine, setSearchEngine] = useState(search[0].name);
  const [searchValue, setSearchValue] = useState('');
  const [showResults, setShowResults] = useState(false);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    if (searchEngine === '本站' && searchValue.trim()) {
      searchTimeoutRef.current = setTimeout(() => {
        setShowResults(true);
      }, 200);
    } else if (!searchValue.trim()) {
      setShowResults(false);
    }

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [searchValue, searchEngine]);

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
    </>
  );
}
export default InputSearch;
