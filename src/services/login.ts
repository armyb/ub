import request from '@/utils/request';

export interface LoginParamsType {
    userName: string;
    password: string;
  }

export async function queryLogin(params:LoginParamsType) {
    console.log("🚀 ~ file: login.ts ~ line 9 ~ queryLogin ~ params", params)
    return request('/api/login', {
        method: 'POST',
        data: params,
    });
}

