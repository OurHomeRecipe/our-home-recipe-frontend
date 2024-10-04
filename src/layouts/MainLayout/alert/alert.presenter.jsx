import React from 'react' 
import style from '../../../css/mainlayout.module.css'
import styled, { keyframes } from 'styled-components'
import AlertMessage from './alertMessage/alertMessage'

const AlertFrame = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  width: 250px;
  height: 100%;
  background-color: #191919a8;
  display: ${(props) => (props.show ? 'block' : 'none')};
  animation: ${(props) => (props.show ? slideOut : slideIn)} 0.5s ease-in-out;
`
const slideIn = keyframes`
    from {
      display: block;
      width: 250px;
      opacity: 1;
    }
    to {
        width: 0;
        opacity: 0;
        overflow: hidden;
        visibility: hidden;
    }
`
const slideOut = keyframes`
    from {
      width: 0;
      opacity: 0;
    }
    to {
      width: 250px;
      opacity: 1;
    }
`


export default function AlertUI({isAlertUI, messages}) {
  return (
    <AlertFrame show={isAlertUI ? 'true' : undefined}>
      <div className={style.alertMessageBox}>
        {messages.map((message) => <AlertMessage key={message.id} text={message.content}/>)}    
      </div>
    </AlertFrame>
  )
}
