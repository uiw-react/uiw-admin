import React, { Fragment } from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import Menu, { MenuItemProps, SubMenuProps } from '@uiw/react-menu';
import { DefaultProps } from '@uiw-admin/router-control';

interface MenuProps {
  collapsed?: boolean;
  routes?: DefaultProps['routes'];
}

function renderMenuItem(
  routes: MenuProps['routes'] = [],
  collapsed: boolean,
  level?: boolean,
) {
  return routes.map((item, index) => {
    const props = {
      key: index,
      icon: item.icon,
    } as MenuItemProps & SubMenuProps;
    if (level) {
      props.className = classnames({
        'uiw-admin-global-sider-menu-collapsed': collapsed,
      });
    }
    if (item.redirect) {
      return <Fragment key={index} />;
    }
    if (item.routes) {
      if (collapsed) {
        props.overlayProps = {
          isOutside: true,
          usePortal: true,
        };
      }
      return (
        <Menu.SubMenu {...props} text={item.name || '-'} collapse={collapsed}>
          {renderMenuItem(item.routes, collapsed)}
        </Menu.SubMenu>
      );
    }
    return (
      <Menu.Item
        {...props}
        tagName={NavLink}
        to={item.path}
        text={item.name || '-'}
      />
    );
  });
}

export default (props: MenuProps = {}) => {
  const { routes = [] } = props;
  return (
    <Menu
      theme="dark"
      inlineCollapsed={!!props.collapsed}
      style={{ padding: '0 12px' }}
    >
      {renderMenuItem(routes, !!props.collapsed, true)}
    </Menu>
  );
};
