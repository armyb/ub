import React from 'react';
import { Redirect } from 'umi';

export default function(props: any) {
      // 你可以把它替换成你自己的登录认证规则（比如判断 token 是否存在）
    const isLogin = window.localStorage.getItem('userid');
    console.log("🚀 ~ file: index.ts ~ line 7 ~ function ~ isLogin", isLogin)
    const { pathname } = props.location;
    if(!isLogin && pathname !== '/login'){
        return <Redirect to={`/login?timestamp=${new Date().getTime()}`} />;
    }
    return props.children
}
