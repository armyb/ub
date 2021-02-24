import React, { FC } from 'react';
import { connect, Dispatch } from 'umi';
// import { ClickParam } from 'antd/es/menu';
import { Dropdown, Menu } from 'antd';
import {
    SettingOutlined,
    LogoutOutlined,
    DownOutlined,
  } from '@ant-design/icons';

  import { LoginModelState } from '@/models/connect';
export interface HeaderLayoutProps {
    dispatch: Dispatch
  }

const UserSettingLayout: FC<HeaderLayoutProps> = ({ dispatch })=>{
    const menu = (
        <Menu>
          <Menu.Item key="setPwd">
            <SettingOutlined />
            设置密码
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="logout">
            <LogoutOutlined /> 退出登录
          </Menu.Item>
        </Menu>
      );

      return (
        <div
          style={{
            width: 200,
            textAlign: 'right',
          }}
        >
          <Dropdown overlay={menu} placement="bottomRight">
            <span style={{ cursor: 'pointer', color: '#fff', fontSize: 16 }}>
              admin <DownOutlined />
            </span>
          </Dropdown>
        </div>
      );
}

export default connect(({ login }:{login:LoginModelState})=>({login}))(UserSettingLayout)