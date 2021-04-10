import * as React from 'react'
import ChatInput from '../ChatInput/ChatInput'
import {ChatMessage, IPropsChatMessage} from '../ChatMessage/ChatMessage'

export default function ChatSidebar(): JSX.Element {
  const [messages, setMessages] = React.useState<IPropsChatMessage[]>([])
  const [currentMessageContent, setCurrentMessageContent] = React.useState("")
  const [currentAuthor, setCurrentAuthor] = React.useState("")

  function handleChangeInputMessage(e: React.ChangeEvent<HTMLInputElement>): void {
    e.preventDefault();
    setCurrentMessageContent(e.target.value)
  }
  
  function handleSendMessage(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault() 
    setMessages([...messages, {username: currentAuthor, content: currentMessageContent}])
  }

  return (
    <div>
      {messages.map(
        (object: IPropsChatMessage) => (<ChatMessage {...object}/>)
      )}
      <ChatInput 
        onSend={handleSendMessage}
        onInput={handleChangeInputMessage}
      />
    </div>
  )
} 
