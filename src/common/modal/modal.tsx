import React, { ReactNode } from 'react';
import page from '../../css/pages/page.common.module.css'

interface ModalProps {
  children: ReactNode; // children에 ReactNode 타입 명시
}

export default function Modal({ children }: ModalProps) {
  return (
    <div className={page.modalFrame}>
      {children}
    </div>
  );
}