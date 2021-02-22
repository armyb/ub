import React ,{ FC } from 'react'
import { connect, Dispatch } from 'umi'
import { Row, Col } from 'antd';
import { ConnectState } from '@/models/connect';
import LoginForm from './components/loginForm';
import styles from './index.less';

export interface LoginLayoutProps  {
    dispatch:Dispatch;
    login:ConnectState;
    loading: boolean;
}

const Login: FC<LoginLayoutProps> = ({dispatch})=>{
    return (
        <div className={styles.loginContainer}>
            <div className={styles.login}>
                <div className={styles.loginRight}>
                <div className={styles.loginContent}>
                    <Row>
                    <Col
                        span={24}
                        className={styles.logo}
                        style={{ textAlign: 'center' }}
                    >
                        <span
                        style={{ fontSize: 22, fontWeight: 600, color: '#1abc9c' }}
                        >
                        前端数据管理平台
                        </span>
                    </Col>
                    </Row>
                    <LoginForm />
                </div>
                </div>
            </div>
        </div>
    )
}

export default connect(
    ({ login }: { login: ConnectState })=>({login})
)(Login)