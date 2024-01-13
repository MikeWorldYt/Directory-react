import WinBar from '../toolbar/windowBar.jsx';
import WinToolbar from '../toolbar/windowToolbar.jsx';
import WsPath from '../workspace/1__path/head.jsx'
import WsExplorer from '../workspace/2__explorer/explorer.jsx'

export default function windowProtype() {
  return (
    <div className='window'>
      <WinBar />
      <WinToolbar />
      <div className='windowWorkspace'>
        <WsPath />
        <WsExplorer />
      </div>
    </div>
  )
}