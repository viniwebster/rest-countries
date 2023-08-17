import React, { ReactElement } from 'react';
import styles from './Button.module.scss';

interface PropsButton {
    children: string | ReactElement
    onClick?: () => void
}

export default function Button({ children, onClick }: PropsButton) {
  return (
    <button className={styles.button} onClick={onClick}>
        {children}
    </button>
  )
}
