import ReactDOM from 'react-dom/client'
import { DirProvider } from './context/directory'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DirProvider>
    <App />
  </DirProvider>,
)
