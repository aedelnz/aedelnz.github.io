// 标题
export interface MenuItemType {
  title?: string;
  nav?: MenuItemType[];
  icon?: string;
  id?: number;
}
// 内容
export interface CardItemType {
  name?: string;
  desc?: string;
  icon?: string;
  url?: string;
  id?: number;
}
// 搜索
export interface SearchType {
  name?: string;
  url?: string;
}