import './App.css'
import Head from './components/head.jsx'
import Explorer from './components/explorer.jsx'
import './index.css'
import { useState } from 'react'

export default function App() {
  const [text, setText] = useState('')
  return (
    <>
      <h1 >File Management by MikeWorldYt</h1>
      <Head text={text}/>
      <Explorer setpathA={setText}/>
    </>
  )
}