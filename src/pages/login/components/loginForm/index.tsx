import React, { FC } from 'react';
import { Form, Input, Button } from 'antd';
import {
    UserOutlined,
    LockOutlined,
    ExclamationCircleOutlined,
} from '@ant-design/icons';

import { connect, Dispatch } from 'umi';
import { LoginModelState, Loading } from '@/models/connect';

const formItemLayout = {
    wrapperCol: { span: 24 },
};

interface LoginFormProps {
    dispatch: Dispatch;
    login: LoginModelState;
    loading: boolean;
}
const LoginForm: FC<LoginFormProps> = ({
    login,
    dispatch,
    loading,
}) => {
    // const { isError } = login;
    console.log("🚀 ~ file: index.tsx ~ line 27 ~ isError", login)

    return (
        <Form name="validate_other" {...formItemLayout}>
            {/* <div style={{ color: '#f5222d', marginBottom: 8, height: 26 }}>
                {isError && (
                    <span>
                        <ExclamationCircleOutlined style={{ marginRight: 4 }} />
                    用户名或密码错误，请核对后重新输入
                    </span>
                )}
            </div> */}
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: '请输入用户名',
                    },
                ]}
            >
                <Input
                    prefix={<UserOutlined />}
                    size="large"
                    placeholder="请输入用户名: admin"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    { required: true, message: '请输入密码' },
                    { min: 6, message: '密码最少6位数' },
                    { max: 18, message: '密码最多18位数' },
                    {
                        pattern: new RegExp('^\\w+$', 'g'),
                        message: '账号必须字母或数字',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined />}
                    type="password"
                    autoComplete="off"
                    size="large"
                    placeholder="请输入密码: 123456"
                />
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    size="large"
                    style={{ width: '100%' }}
                >
                    {loading ? '登录中' : '登录'}
                </Button>
            </Form.Item>
        </Form>
    )
}

export default connect(
({ login, loading }: { login: LoginModelState; loading: Loading }) => ({
    login,
    loading: loading.models.login,
    }),
)(LoginForm)