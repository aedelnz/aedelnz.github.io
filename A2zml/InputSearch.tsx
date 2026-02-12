import { Input } from '@arco-design/web-react';
import { IconSearch } from '@arco-design/web-react/icon';

function setSearchValue(value: string) {
  console.log(value);
}

function InputSearch() {
  return (
    <Input
      placeholder='搜索搜索'
      prefix={<IconSearch />}
      allowClear
      onChange={setSearchValue}
    />
  );
}
export default InputSearch;
