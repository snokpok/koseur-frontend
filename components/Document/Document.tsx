import React, { ReactElement, useState } from "react"
import styles from './Document.module.sass'
import {Editor, EditorState} from 'draft-js'
import 'draft-js/dist/Draft.css'

export interface DocumentProps {
  documentContent: string
}

export default function Doc(props: DocumentProps): ReactElement | null {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())

  return (
    <div className={styles.background}>
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  )
}
