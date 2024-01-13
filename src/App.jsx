import './styles/App.css'
import './styles/main.css'
import WinPrototype from './components/app/windowPrototype.jsx';
// import Markdown from 'react-markdown'
// const testing = `
// # Header Test
// - text
// > text
// `

export default function App() {
  return (
    <>
      <h2>File Management by MikeWorldYt</h2>
      <WinPrototype />
      {/* <Markdown>
        {testing}
      </Markdown> */}
    </>
  )
}