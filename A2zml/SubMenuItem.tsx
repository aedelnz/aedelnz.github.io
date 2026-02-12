import { useState } from 'react';
import { Layout, Menu, PageHeader, Radio, Typography, Link, Divider, Grid, Card, Space, Avatar, Select, Input, Button, BackTop, Tooltip, Affix } from '@arco-design/web-react';
import { IconSwap, IconShrink, IconCodeSandbox, IconUp, IconUpload } from '@arco-design/web-react/icon';
import { MenuItemType, CardItemType, SearchType } from '../constants/Data';

export default function SubMenuItem(menuData: MenuItemType[]) {
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