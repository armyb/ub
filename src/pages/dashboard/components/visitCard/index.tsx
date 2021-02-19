import React, { FC, memo } from 'react';
import { Row, Col, Tooltip, Skeleton } from 'antd';
import styles from '../../index.less';

import userImg from '@/assets/visit_user.png';
import surveyImg from '@/assets/visit_survey.png';
import totalImg from '@/assets/visit_total.png';

type totalDataType = {
    headCount?: number;
    surveyCount?: number;
    totalCount?: number;
    deadLine?: string;
    rate?: string;
    lossRate?: string;
}

interface VisitCardProps {
    totalData:totalDataType,
    loading:boolean | undefined
}
const VisitCard: FC<VisitCardProps> = ({totalData,loading}) =>{
    console.log("🚀 ~ file: index.tsx ~ line 14 ~ totalData", totalData)
    const {
        headCount,
        surveyCount,
        totalCount,
        deadLine,
        rate,
        lossRate,
    } = totalData;
    
  const content2 = (
        <div style={{ padding: '0 4px' }}>
        <div className={styles.skywarp_tootip}>截至{deadLine}</div>
        <div className={styles.skywarp_tootip}>
            <span
            className={`${styles.tootip_point} ${styles.tootip_point_level1}`}
            ></span>
            <span style={{ marginRight: 4 }}>随访量:</span>
            {totalCount}
        </div>
        <div className={styles.skywarp_tootip}>
            <span
            className={`${styles.tootip_point} ${styles.tootip_point_level2}`}
            ></span>
            <span style={{ marginRight: 4 }}>随访率:</span>
            {rate}%
        </div>
        <div className={styles.skywarp_tootip}>
            <span
            className={`${styles.tootip_point} ${styles.tootip_point_level3}`}
            ></span>
            <span style={{ marginRight: 4 }}>失访率:</span>
            {lossRate}%
        </div>
        </div>
    );
    return (
        <Row gutter={32}>
             <Col span={8}>
                <div className={styles.statisLayout}>
                    <Skeleton loading={loading} active title={false}>
                        <div>
                        <img src={userImg} height="70" />
                        </div>
                        <div className={styles.statisTitle}>
                        <div>人员总数</div>
                        <div className={styles.statisCount}>{headCount || '0'}</div>
                        </div>
                    </Skeleton>
                </div>
            </Col>
            <Col span={8}>
                <div className={styles.statisLayout}>
                <Skeleton loading={loading} active title={false}>
                    <div>
                    <img src={surveyImg} height="70" />
                    </div>
                    <div className={styles.statisTitle}>
                    <div>阅读量</div>
                    <div className={styles.statisCount}>{surveyCount || '0'}</div>
                    </div>
                </Skeleton>
                </div>
            </Col>
            <Col span={8}>
                <div className={styles.statisLayout}>
                <Skeleton loading={loading} active title={false}>
                    <div>
                    <img src={totalImg} height="70" />
                    </div>
                    <div className={styles.statisTitle}>
                    <div>订阅量</div>
                    <Tooltip placement="bottomLeft" title={content2}>
                        <div className={styles.statisCount}>{totalCount || '0'}</div>
                    </Tooltip>
                    </div>
                </Skeleton>
                </div>
            </Col>
        </Row>
    )
}

export default memo(VisitCard);