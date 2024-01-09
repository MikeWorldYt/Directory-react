import './App.css'
import Head from './components/head.jsx'
import Explorer from './components/explorer.jsx'
import './index.css'
import icon from './assets/icons/icons.js';

export default function App() {
  return (
    <>
      <h1 >File Management by MikeWorldYt</h1>
      <div className='window'>
        <div className='window-bar'>
          <img className='window-icon'
            src={ icon.app } />
          <h2 className='window-title'>File Explorer</h2>
        </div>
        <div className='window-toolbar'>
          <img className='window-icon'
            src={ icon.add } />
          <h2 className='window-title'>New</h2>
          <img className='window-icon'
            src={ icon.div } />
        </div>
        <div className='window-content'>
          <Head />
          <Explorer />
        </div>
      </div>

    </>
  )
}