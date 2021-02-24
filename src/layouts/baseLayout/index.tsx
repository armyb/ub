import React from 'react';
import { Layout } from 'antd';
import styles from './index.less';
import HeaderContent from './header';

const { Header, Content, Sider,Footer } = Layout;

export default (props:any)=>{
    return (<Layout className={styles.container}>
                <Header className={styles.contentHeader}>
                    <HeaderContent></HeaderContent>
                </Header>
                <Content className={styles.content}>{props.children}</Content>
                <Footer className={styles.footerContent}>数据管理平台</Footer>
            </Layout>)
}