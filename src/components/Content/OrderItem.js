import { KeyboardArrowDown } from '@mui/icons-material';
import React from 'react';
import classes from './OrderItem.module.css';
const OrderItem = (props) => {
  return (
    <div className={classes['item-detail']}>
      <div>+</div>
      <div>
        <input type='checkbox' />
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + '/assest/image/shopify.png'} alt='sort' width='20px' />
      </div>
      <div className={classes.orderno}>{props.orderNo}</div>
      <div>{props.date}</div>
      <div>{props.city}</div>
      <div>{props.customerName}</div>
      <div>{props.value}</div>
      <div>
        <button className={classes['status-btn']}>Pending</button>
      </div>
      <div>
        <button className={classes['action-btn']}>
          <span>Action</span>
          <span>
            <KeyboardArrowDown />
          </span>
        </button>
      </div>
    </div>
  );
};

export default OrderItem;
