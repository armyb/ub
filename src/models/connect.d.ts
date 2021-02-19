import { DashboardState } from './dashboard';

export { DashboardState };

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
  }
  export interface Route {
    routes?: Route[];
  }
  