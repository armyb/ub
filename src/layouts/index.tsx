import React from 'react';
import { Redirect } from 'umi';
import { Layout } from 'antd';
const { Header, Content, Sider } = Layout;
export default function(props: any) {
      // 你可以把它替换成你自己的登录认证规则（比如判断 token 是否存在）
    const isLogin = window.localStorage.getItem('userid');
    console.log("🚀 ~ file: index.ts ~ line 7 ~ function ~ isLogin", isLogin)
    const { pathname } = props.location;
    if(!isLogin && pathname !== '/login'){
        return <Redirect to={`/login?timestamp=${new Date().getTime()}`} />;
    }
    console.log("🚀 ~ file: index.tsx ~ line 14 ~ function ~ props.children", props.children)

    return props.children
}
