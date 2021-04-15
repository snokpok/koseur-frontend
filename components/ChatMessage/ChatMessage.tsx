import * as React from 'react'
import styles from './ChatMessage.module.sass'

export declare interface IPropsChatMessage {
  username: string;
  time?: Date;
  content: string;
}

export const ChatMessage : React.FC<IPropsChatMessage> = (props) => {
  return (
    <div className={styles.ChatMessage}>
      <div>{props.username}</div>
      <div>{props.time}</div>
      <div>{props.content}</div>
    </div>
  )
}
