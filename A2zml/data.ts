// 标题
interface MenuItemType {
  title?: string;
  nav?: MenuItemType[];
  icon?: string;
  id?: number;
}
// 内容
interface CardItemType {
  name?: string;
  desc?: string;
  icon?: string;
  url?: string;
  id?: number;
}
// 搜索
interface SearchType {
  name?: string;
  url?: string;
}