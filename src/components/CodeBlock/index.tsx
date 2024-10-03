import './CodeBlock.css'
import Syntaxhighlighter from 'react-syntax-highlighter'
import { a11yLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

type ICodeBlock = {
  code: string
  language: string
}

const CodeBlock = ({ code, language }: ICodeBlock) => {
  return (
    <div className="code__block">
      <div className="flex__center dot__container">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <Syntaxhighlighter
        language={language}
        style={a11yLight}
        customStyle={{
          background: 'rgba(var(--bg-base-rgb),0.6)',
          color: 'var(--color-primary-light)',
          padding: '20px'
        }}
        wrapLines>
        {code}
      </Syntaxhighlighter>
    </div>
  )
}

export default CodeBlock
