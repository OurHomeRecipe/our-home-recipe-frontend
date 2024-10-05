import React from 'react'
import AlertUI from './alert.presenter'
import { useAppSelector } from '../../../RootStore';

export default function Alert() {

    const isAlertUI = useAppSelector((state) => state.alert.showUI);

    const messages = [
      {
          id: 1,
          content: '고슴도치님이 팔로우를 요청했습니다.'
      },
      {
        id: 2,
        content: '고양이님이 새로운 레시피를 만들었습니다.'
    }
  ]

  return (
    <AlertUI
    isAlertUI={isAlertUI}
    messages={messages}
    />
  )
}
