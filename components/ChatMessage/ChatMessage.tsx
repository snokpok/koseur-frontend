import * as React from 'react'

export declare interface IPropsChatMessage {
  username: string;
  time?: Date;
  content: string;
}

export const ChatMessage : React.FC<IPropsChatMessage> = (props) => {
  return (
    <div>
      <div>{props.username}</div>
      <div>{props.time}</div>
      <div>{props.content}</div>
    </div>
  )
}
