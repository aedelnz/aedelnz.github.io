import { Menu } from '@arco-design/web-react';
import { IconCodeSandbox } from '@arco-design/web-react/icon';
import { MenuItemType } from './Data';

function SubMenuItem(menuData: MenuItemType[]) {
  const renderMenuItem = (menuData: MenuItemType[], parentKey = '') => {
    return menuData.map((item, index) => {
      return (<Menu.Item key={`${parentKey}-${index}`}>{item.title}</Menu.Item>);
    });
  }

  return menuData.map((item, index) => {
    const key = `${index}`;
    return (<Menu.SubMenu key={key} title={<span>{item.icon ? <img className='arco-icon arco-icon-code-sandbox' src={item.icon} alt='icon' /> : <IconCodeSandbox />}{item.title}</span>}>{renderMenuItem(item.nav || [], key)}</Menu.SubMenu>);
  });
}

export default SubMenuItem;