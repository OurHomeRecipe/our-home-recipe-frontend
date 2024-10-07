import * as React from 'react';
import Alert from '@mui/material/Alert';
import style from '../../css/pages/page.common.module.css'

/**
 * 기본 알림 메시지
 * @param {string} serverity 알림 상태 - 성공(success), 정보(info), 경고(warning), 에러(error)
 * @param {string} message
 */
export default function BasicAlerts({serverity, message}) {
  return (
    <div className={style.alertBox}>
        <Alert severity={serverity}>{message}</Alert>
        {/* <Alert severity="success">This is a success Alert.</Alert>
        <Alert severity="info">This is an info Alert.</Alert>
        <Alert severity="warning">This is a warning Alert.</Alert>
        <Alert severity="error">This is an error Alert.</Alert> */}
    </div>
    

  );
}