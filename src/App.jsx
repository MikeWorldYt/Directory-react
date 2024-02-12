import './styles/App.css'
import './styles/main.css'
import WinPrototype from './components/app/winPrototype.jsx';
import Nav from './components/app/nav.jsx'
// import Markdown from 'react-markdown'
// const testing = `
// # Header Test
// - text
// > text
// `

export default function App() {
  return (
    <>
      <Nav />
      <WinPrototype />
      {/* <Markdown>
        {testing}
      </Markdown> */}
    </>
  )
}