import React from 'react';
import classes from './SidebarItem.module.css';
const SidebarItem = (props) => {
  const sideItmeStyle = `${classes['sidebar-item']} ${props.isActive? classes['sidebar-active']:'' } `;
  return (
    <div className={sideItmeStyle} onClick={props.onClick}>
      <span className={classes['item-icon']}>{props.icon}</span>
      <span className={classes['item-name']}>{props.name}</span>
    </div>
  );
};

export default SidebarItem;
