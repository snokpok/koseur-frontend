import * as React from 'react'
import styles from './ChatInput.module.sass'

export interface IPropsChatInput {
  onSend: (e: React.MouseEvent<HTMLButtonElement>) => void
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  message: string
}

export default function ChatInput(props: IPropsChatInput): JSX.Element {
  return (
    <div className={styles.ChatInput}>
      <button 
        className={props.message ? styles.sendButton : styles.sendButton_disabled} 
        onClick={props.onSend} 
        disabled={props.message ? false : true}
        type="submit"
      >
        Send
      </button>
      <input type="text" className={styles.inputText} onChange={props.onInput} value={props.message}/>
    </div>
  )
}


