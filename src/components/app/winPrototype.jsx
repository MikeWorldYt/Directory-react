import WinBar from '../win__toolbar/windowBar.jsx';
import WinToolbar from '../win__toolbar/windowToolbar.jsx';
import WsPath from '../win__workspace/1__path/path.jsx'
import WsExplorer from '../win__workspace/2__explorer/explorer.jsx'
import ModalTest from '../app/modalTest.jsx';
import { useContext } from 'react';
import { DirContext } from '../../context/directory';

export default function WindowProtype( ) {
  const { isModalOpen, setIsModalOpen } = useContext( DirContext );

  return (
    <div className='window'>
      <WinBar />
      <WinToolbar />
      <div className='windowWorkspace'>
        <WsPath />
        <WsExplorer />
      </div>
      <ModalTest isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
    </div>
  )
}