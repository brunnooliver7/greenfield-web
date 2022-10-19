import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Frame from "./components/Frame"
import MedicoForm from "./components/MedicoForm"
import Menu from "./components/Menu"

function App() {
  return (
    <Router>
      <Frame>
        <div id="app" className="grid grid-cols-[200px_1fr] w-full h-full">
          <Menu />
          <div className='overflow-y-scroll scrollbar'>
            <Routes>
              <Route path="/" element={<>home page</>} />
              <Route path="/medico" element={<><MedicoForm /></>} />
              <Route path="/paciente" element={<>paciente page</>} />
              <Route path="/prescricao" element={<>prescricao page</>} />
            </Routes>
          </div>
        </div>
      </Frame>
    </Router>
  )
}

export default App
