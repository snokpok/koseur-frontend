import * as React from 'react'
import styles from './ChatInput.module.css'

export interface IPropsChatInput {
  onSend: (e: React.MouseEvent<HTMLButtonElement>) => void
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function ChatInput(props: IPropsChatInput): JSX.Element {
  return (
    <div className={styles.ChatInput}>
      <button className={styles.sendButton} onClick={props.onSend}>
        Send
      </button>
      <input className={styles.inputText} onChange={props.onInput} />
    </div>
  )
}


