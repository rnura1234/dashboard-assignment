import React from 'react';
import {
  Close,
  Input,
  Search,
  PrintOutlined,
  SendOutlined,
  FilterAlt,
  ArrowDropDown,
  Settings,
  Refresh,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardArrowDown,
} from '@mui/icons-material';

import classes from './Order.module.css';
import OrderItem from './OrderItem';
const Order = () => {
  return (
    <div className={classes.content}>
      <div className={classes['content-header']}>
        <div className={classes.left}>
          <span className={classes.heading}>Order</span>
          <span>
            <Close className={classes.closeIcon} style={{ fontSize: '1rem' }} />
          </span>
        </div>
        <div>
          <Settings style={{ fontSize: '1.3rem' }} />
        </div>
      </div>
      <div className={classes['content-navbar']}>
        <span className={`${classes['nav-item']} ${classes.nactive} `}>Pending</span>
        <span className={classes['nav-item']}>Accepted</span>
        <span className={classes['nav-item']}>Aws created</span>
        <span className={classes['nav-item']}>Ready to ship</span>
        <span className={classes['nav-item']}>Shipped</span>
        <span className={classes['nav-item']}>Completed</span>
        <span className={classes['nav-item']}>Cancelled</span>
      </div>
      <div className={classes['order-detail']}>
        <div className={classes['order-header']}>
          <div className={classes['header-left']}>
            <div className={classes.btn}>
              <span className={classes['input-icon']}>
                <Input style={{ fontSize: '1.1rem', marginTop: '4px' }} />
              </span>
              <span>Import Order</span>
            </div>
            <div className={`${classes.btn} ${classes['print-btn']}`}>
              <span>
                <SendOutlined style={{ fontSize: '1.1rem', marginTop: '4px' }} />
              </span>
              <span>Accept</span>
            </div>
            <div className={`${classes.btn} ${classes['print-btn']}`}>
              <span>
                <PrintOutlined style={{ fontSize: '1.1rem', marginTop: '4px' }} />
              </span>
              <span>Print</span>
              <span>
                <ArrowDropDown />
              </span>
            </div>
          </div>
          <div className={classes['header-right']}>
            <div className={`${classes.btn} ${classes['refresh-btn']}`}>
              <span>
                <Refresh
                  style={{ fontSize: '1.1rem', marginTop: '4px' }}
                  className={classes['refresh-icon']}
                />
              </span>
              <span className={classes['refresh-text']}>Refresh</span>
            </div>
          </div>
        </div>
        <div className={classes.wrapper}>
          <div className={classes['content-detail']}>
            <div className={classes.channel}></div>
            <div className={classes.checkbox}>
              <input type='checkbox'></input>
            </div>
            <div className={classes.channel}>
              <span>Channel</span>
              <span className={classes.icon}>
                <img
                  src={process.env.PUBLIC_URL + '/assest/image/sort-icon.svg'}
                  alt='sort'
                  width='16px'
                />

                <FilterAlt style={{ fontSize: '0.9rem' }} />
              </span>
            </div>
            <div className={classes.channel}>
              <span>Order No</span>
              <span className={classes.icon}>
                <img
                  src={process.env.PUBLIC_URL + '/assest/image/sort-icon.svg'}
                  alt='sort'
                  width='15px'
                />

                <Search style={{ fontSize: '0.9rem' }} />
              </span>
            </div>
            <div className={classes.channel}>
              <span>Order Date</span>
              <span className={classes.icon}>
                <img
                  src={process.env.PUBLIC_URL + '/assest/image/sort-icon.svg'}
                  alt='sort'
                  width='15px'
                />

                <Search style={{ fontSize: '0.9rem' }} />
              </span>
            </div>
            <div className={classes.channel}>
              <span>City</span>
              <span className={classes.icon}>
                <img
                  src={process.env.PUBLIC_URL + '/assest/image/sort-icon.svg'}
                  alt='sort'
                  width='15px'
                />
              </span>
            </div>
            <div className={classes.channel}>
              <span>Customer Name</span>
              <span>
                <Search style={{ fontSize: '0.9rem', color: '#c9c9c9' }} />
              </span>
            </div>

            <div className={classes.channel}>
              <span>Order Value</span>
              <span className={classes.icon}>
                <img
                  src={process.env.PUBLIC_URL + '/assest/image/sort-icon.svg'}
                  alt='sort'
                  width='15px'
                />
              </span>
            </div>
            <div className={classes.channel}>
              <span>Status</span>
              <span className={classes.sort}>
                <img
                  src={process.env.PUBLIC_URL + '/assest/image/sort-icon.svg'}
                  alt='sort'
                  width='15px'
                />
              </span>
            </div>
            <div className={classes.channel}>
              <span>Operation</span>
            </div>
          </div>
          <div className={classes['tatal-order']}>
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
          </div>
          <div className={classes['next-pre-btn']}>
            <div className={classes['left-page']}>
              <KeyboardArrowLeft />
            </div>
            <div className={classes['page-no']}>1</div>
            <div className={classes['left-page']}>
              <KeyboardArrowRight />
            </div>
            <div className={classes['left-page']}>
              <span>20/page</span>
              <span>
                <KeyboardArrowDown />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    /*<div className={classes['content-table']}>
           <table class={classes.table}>
            <thead className={classes['table-header']}>
              <tr className={classes.row}>
                <th className={classes.channel}></th>
                <th className={classes.channel}>
                  <input type='checkbox'></input>
                </th>
                <th className={classes.channel}>
                  <span>Channel</span>
                  <span className={classes.icon}>
                    <img
                      src={process.env.PUBLIC_URL + '/assest/image/sort-icon.svg'}
                      alt='sort'
                      width='15px'
                    />

                    <FilterAlt />
                  </span>
                </th>
                <th className={classes.channel}>
                  <span>Order No</span>
                  <span className={classes.icon}>
                    <img
                      src={process.env.PUBLIC_URL + '/assest/image/sort-icon.svg'}
                      alt='sort'
                      width='30px'
                    />
                 
                    <Search />
                  </span>
                </th>
                <th className={classes.channel}>
                  <span>Order Date</span>
                  <span className={classes.icon}>
                    <img
                      src={process.env.PUBLIC_URL + '/assest/image/sort-icon.svg'}
                      alt='sort'
                      width='30px'
                    />
                 
                    <Search />
                  </span>
                </th>
                <th className={classes.channel}>
                  <span>City</span>
                  <span className={classes.icon}>
                    <img
                      src={process.env.PUBLIC_URL + '/assest/image/sort-icon.svg'}
                      alt='sort'
                      width='30px'
                    />
                  </span>
                </th>
                <th className={classes.channel}>
                  <span>Customer Name</span>
                  <span>
                    <Search />
                  </span>
                </th>
                <th className={classes.channel}>
                  <span>Order Value</span>
                  <span className={classes.icon}>
                    <img
                      src={process.env.PUBLIC_URL + '/assest/image/sort-icon.svg'}
                      alt='sort'
                      width='30px'
                    />
                  </span>
                </th>
                <th className={classes.channel}>
                  <span>Status</span>
                  <span className={classes.sort}>
                    <img
                      src={process.env.PUBLIC_URL + '/assest/image/sort-icon.svg'}
                      alt='sort'
                      width='30px'
                    />
                  </span>
                </th>
                <th className={classes.channel}>
                  <span>Operatin</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className=''>
                <td className={classes['row-item']}>+</td>
                <td className={classes['row-item']}>
                  <input type='checkbox' />
                </td>
                <td className={classes['row-item']}>channel-img</td>
                <td className={classes['row-item']}>orderno</td>
                <td className={classes['row-item']}>orderdate</td>
                <td className={classes['row-item']}>city</td>
                <td className={classes['row-item']}>customer name</td>
                <td className={classes['row-item']}>order value</td>
              </tr>
            </tbody>
          </table> 
      </div>
         */
  );
};

export default Order;
