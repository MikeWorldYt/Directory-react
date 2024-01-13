import './App.css'
import './main.css'
import Head from './components/head.jsx'
import Explorer from './components/explorer.jsx'
import icon from './assets/icons/icons.js';

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
      <div className='window'>
        <div className='windowBar'>
          <img className='icon'
            src={ icon.app } />
          <h4 className='windowBarTitle'>File Explorer</h4>
        </div>
        <div className='windowToolbar'>
          <button>
            <img className='icon'
              src={ icon.add } />
            <h2 className='windowToolbarText'>New</h2>
          </button>
          <img className='iconDiv'
            src={ icon.div } />
          <button>
            <img className='icon'
              src={ icon.info } />
          </button>
          <button>
            <img className='icon'
              src={ icon.download } />
          </button>
          <img className='iconDiv'
            src={ icon.div } />
          <button>
            <img className='icon'
              src={ icon.sort } />
            <h2 className='windowToolbarText'>Sort</h2>
            <img className='iconSmall'
              src={ icon.chDown } />
          </button>
          <button>
            <img className='icon'
              src={ icon.cols } />
            <h2 className='windowToolbarText'>View</h2>
            <img className='iconSmall'
              src={ icon.chDown } />
          </button>
        </div>
        <div className='windowWorkspace'>
          <Head />
          <Explorer />
        </div>
      </div>
      {/* <Markdown>
        {testing}
      </Markdown> */}

    </>
  )
}