import * as React from 'react'
import styles from './ChatSidebar.module.sass'
import ChatInput from '../ChatInput/ChatInput'
import {ChatMessage, IPropsChatMessage} from '../ChatMessage/ChatMessage'

export default function ChatSidebar(): JSX.Element {
  const [messages, setMessages] = React.useState<IPropsChatMessage[]>([])
  const [currentMessageContent, setCurrentMessageContent] = React.useState("")
  const [currentAuthor, setCurrentAuthor] = React.useState("")

  function handleChangeInputMessage(e: React.ChangeEvent<HTMLInputElement>): void {
    setCurrentMessageContent(e.target.value)
  }
  
  function handleSendMessage(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault() 
    setMessages([...messages, {username: currentAuthor, content: currentMessageContent}])
    setCurrentMessageContent('')
    setCurrentAuthor('vincent');
  }

  return (
    <div className={styles.ChatSidebar}>
      <div className={styles.chatbox} id='chatbox'>
        {messages.map(
          (object: IPropsChatMessage) => (<ChatMessage {...object}/>)
        )}
      </div>
      <ChatInput 
        onSend={handleSendMessage}
        onInput={handleChangeInputMessage}
        message={currentMessageContent}
      />
    </div>
  )
} 
