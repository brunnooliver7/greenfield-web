import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Frame from './components/Frame'
import Menu from './components/Menu'
import Rotas from './routes/Rotas'

function App() {
  return (
    <>
      <ToastContainer />
      <Frame>
        <div id="app" className="grid grid-cols-[200px_1fr] w-full h-full">
          <Menu />
          <div className="overflow-y-scroll scrollbar">
            <Rotas />
          </div>
        </div>
      </Frame>
    </>
  )
}

export default App
