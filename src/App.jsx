import './App.css'
import Head from './components/head.jsx'
import Explorer from './components/explorer.jsx'
import './index.css'
import icon from './assets/icons/icons.js';

export default function App() {
  return (
    <>
      <h2>File Management by MikeWorldYt</h2>
      <div className='window'>
        <div className='windowBar'>
          <img className='icon'
            src={ icon.app } />
          <h4 className='windowBarTitle'>File Explorer</h4>
        </div>
        <div className='windowToolbar'>
          <img className='icon'
            src={ icon.add } />
          <h2 className='windowToolbarText'>New</h2>
          <img className='iconDiv'
            src={ icon.div } />
        </div>
        <div className='windowWorkspace'>
          <Head />
          <Explorer />
        </div>
      </div>

    </>
  )
}