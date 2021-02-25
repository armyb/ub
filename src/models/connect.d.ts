import { GlobalModelState } from './global'
import { DashboardState } from './dashboard';
import { LoginModelState } from './login';

export {GlobalModelState, DashboardState,LoginModelState };

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    global?: boolean;
    menu?: boolean;
    setting?: boolean;
    user?: boolean;
    login: boolean;
    queryTable: boolean;
    dashboard: boolean;
  };
}

export interface ConnectState {
  loading: Loading;
  login:LoginModelState
}
export interface Route {
  routes?: Route[];
}

export interface MenusDate {
  title: string;
  link: string;
  key: string;
  icon: string;
  children: any;
}

export interface LoginUserInfoState {
  id: string;
  name: string;
  role?: string;
  [key: string]: any
}
