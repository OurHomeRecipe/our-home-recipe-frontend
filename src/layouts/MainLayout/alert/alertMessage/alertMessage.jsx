import React from 'react'
import styled from 'styled-components'
import { IoMdCloseCircle } from "react-icons/io";

const MessageFrame = styled.div`
    width: 230px;
    background-color: white;
    margin: 5px 0px;
    padding: 10px 10px;
    border-radius: 10px;
    box-sizing: border-box;
`

const MessageText = styled.p`
    font-size: 12px;
    margin: 2px 0px;
`;

export default function AlertMessage({text}) {



  return (
    <MessageFrame>
        <IoMdCloseCircle />
        <MessageText>{text}</MessageText>
    </MessageFrame>
  )
}
