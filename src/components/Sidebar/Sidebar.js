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
  const [isActiveSidebar, setIsSidebarActive] = useState({
    dashboard: '',
    inventory: '',
    order: 'active',
    channel: '',
    shopping: '',
  });

  const iconStyle = { fontSize: '16px', color: '#999', marginTop: '5px' };

  return (
    <div className={classes.sidebar}>
      <SidebarItem
        icon={<Dashboard style={iconStyle} />}
        name='Dashboard'
        isActive={isActiveSidebar.dashboard === 'active'}
        onClick={() => {
          setIsSidebarActive({
            dashboard: 'active',
            inventory: '',
            order: '',
            channel: '',
            shopping: '',
          });
        }}
      />
      <SidebarItem
        icon={<Inventory style={iconStyle} />}
        name='Inventary'
        isActive={isActiveSidebar.inventory === 'active'}
        onClick={() => {
          setIsSidebarActive({
            inventory: 'active',
            dashboard: '',
            order: '',
            channel: '',
            shopping: '',
          });
        }}
      />
      <SidebarItem
        icon={<Article style={iconStyle} />}
        name='Order'
        isActive={isActiveSidebar.order === 'active'}
        onClick={() => {
          setIsSidebarActive({
            order: 'active',
            dashboard: '',
            inventory: '',
            channel: '',
            shopping: '',
          });
        }}
      />
      <SidebarItem
        icon={<LocalShippingOutlined style={iconStyle} />}
        name='Shopping'
        isActive={isActiveSidebar.shopping === 'active'}
        onClick={() => {
          setIsSidebarActive({
            shopping: 'active',
            dashboard: '',
            inventory: '',
            order: '',
            channel: '',
          });
        }}
      />
      <SidebarItem
        icon={<Share style={iconStyle} />}
        name='Channel'
        isActive={isActiveSidebar.channel === 'active'}
        onClick={() => {
          setIsSidebarActive({
            channel: 'active',
            dashboard: '',
            inventory: '',
            order: '',

            shopping: '',
          });
        }}
      />
    </div>
  );
};

export default Sidebar;
