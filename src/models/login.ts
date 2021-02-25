import { Effect, Reducer, history } from 'umi';
import { message } from 'antd';
import { queryLogin,logout } from '@/services/login';
import { ConnectState, LoginUserInfoState } from './connect.d';

export interface LoginModelState {
    userInfo: LoginUserInfoState;
    isError: boolean;
}

export interface LoginModelType {
  namespace: 'login',
  state:LoginModelState,
  effects:{
    queryLogin: Effect;
    logout:Effect
  },
  reducers:{
    save:Reducer<LoginModelState>
  }
}

const LoginModel:LoginModelType = {
  namespace: 'login',
  state: {
    userInfo: {
      id: '',
      name: '',
    },
    isError: false,
  },
  effects:{
    *queryLogin({ payload }, { call, put }) {
      const response = yield call(queryLogin, { ...payload });
      console.log("🚀 ~ file: login.ts ~ line 34 ~ *queryLogin ~ response", response)
      //正确的账号密码
      if (response.status === 'ok') {
        yield put({
          type:'save',
          payload:{
            userInfo:response.currentAuthority
          }
        })

        localStorage.setItem(
          'userid',
          JSON.stringify(response.currentAuthority.userid)
        )

        message.success('登录成功!')
        history.replace('/')

      }else{
        yield put({
          type:'save',
          payload:{
            isError: true,
          }
        })

      }
      console.log("🚀 ~ file: login.ts ~ line 24 ~ *queryLogin ~ response", response)
    },
    *logout(_, { call }){
      const response = yield call(logout)
      console.log("🚀 ~ file: login.ts ~ line 66 ~ *logout ~ response", response)
      if(response.status === 'ok'){
        localStorage.removeItem('userid');
        history.replace({
          pathname: '/login',
          search: `timestamp=${new Date().getTime()}`,
        });
      }
     
    }
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
}

export default LoginModel;