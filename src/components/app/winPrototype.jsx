import WinBar from '../win__toolbar/windowBar.jsx';
import WinToolbar from '../win__toolbar/windowToolbar.jsx';
import WsPath from '../win__workspace/1__path/head.jsx'
import WsExplorer from '../win__workspace/2__explorer/explorer.jsx'

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