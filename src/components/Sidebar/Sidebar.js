import React, { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import SidebarItem from './SidebarItem';
import classes from './Sidebar.module.css';
import {
  Article,
  Dashboard,
  Inventory,
  LocalShipping,
  LocalShippingOutlined,
  Share,
} from '@mui/icons-material';
const Sidebar = (props) => {
  const [activeSidebar, setActiveSidebar] = useState({
    dashboard: '',
    inventory: '',
    order: 'active',
    channel: '',
    shopping: '',
  });

  const sideActiveChangeHandler = (sideItem) => {
    if (sideItem == 'dashboard') {
      setActiveSidebar({
        dashboard: 'active',
        inventory: '',
        order: '',
        channel: '',
        shopping: '',
      });
    }
    if (sideItem == 'inventory') {
      setActiveSidebar({
        dashboard: '',
        inventory: 'active',
        order: '',
        channel: '',
        shopping: '',
      });
    }

    if (sideItem == 'order') {
      setActiveSidebar({
        dashboard: '',
        inventory: '',
        order: 'active',
        channel: '',
        shopping: '',
      });
    }
    if (sideItem == 'channel') {
      setActiveSidebar({
        dashboard: '',
        inventory: '',
        order: '',
        channel: 'active',
        shopping: '',
      });
    }
    if (sideItem == 'shopping') {
      setActiveSidebar({
        dashboard: '',
        inventory: '',
        order: '',
        channel: '',
        shopping: 'active',
      });
    }
  };
  useEffect(() => {
    if (props.onActiveChange) {
      props.onActiveChange(activeSidebar);
    }
  }, [{ ...activeSidebar }]);

  const iconStyle = { fontSize: '16px', color: '#999', marginTop: '5px' };

  return (
    <div className={classes.sidebar}>
      <SidebarItem
        icon={<Dashboard style={iconStyle} />}
        name='Dashboard'
        isActive={activeSidebar.dashboard === 'active'}
        onClick={() => {
          sideActiveChangeHandler('dashboard');
        }}
      />
      <SidebarItem
        icon={<Inventory style={iconStyle} />}
        name='Inventary'
        isActive={activeSidebar.inventory === 'active'}
        onClick={() => {
          sideActiveChangeHandler('inventory');
        }}
      />
      <SidebarItem
        icon={<Article style={iconStyle} />}
        name='Order'
        isActive={activeSidebar.order === 'active'}
        onClick={() => {
          sideActiveChangeHandler('order');
        }}
      />
      <SidebarItem
        icon={<LocalShippingOutlined style={iconStyle} />}
        name='Shopping'
        isActive={activeSidebar.shopping === 'active'}
        onClick={() => {
          sideActiveChangeHandler('shopping');
        }}
      />
      <SidebarItem
        icon={<Share style={iconStyle} />}
        name='Channel'
        isActive={activeSidebar.channel === 'active'}
        onClick={() => {
          sideActiveChangeHandler('channel');
        }}
      />
    </div>
  );
};

export default Sidebar;
