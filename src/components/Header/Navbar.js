import React from 'react';
import {DarkModeOutlined,FormatIndentIncrease,NotificationsOutlined,GTranslateOutlined} from '@mui/icons-material';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import {Avatar} from '@mui/material';
import classes from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={classes.navbar} >
      <div className={classes.navLeft}>
        <span><img src='' alt='logo'/></span>
       <FormatIndentIncrease className={classes.icons}/>
      </div>
      <div className={classes.navRight}>
       <DarkModeOutlined className={`${classes.icons} ${classes.darkIcon}`}/>
       <NotificationsOutlined className={classes.icons} />
        <GTranslateOutlined className={`${classes.icons} ${classes.darkIcon}`}/>
        <img src='' alt='avatar' className={classes.icons}></img>
        {/* <Avatar >A</Avatar> */}
      </div>

    </div>
  );
}

export default Navbar;
