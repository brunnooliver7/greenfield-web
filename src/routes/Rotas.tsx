import { Route, Routes } from 'react-router-dom'
import MedicoRoutes from './MedicoRoutes'

const Rotas = () => {
  return (
    <>
      <MedicoRoutes />
      <Routes>
        <Route path="home" element={<>home page</>} />
        <Route path="paciente" element={<>paciente page</>} />
        <Route path="prescricao" element={<>prescricao page</>} />
      </Routes>
    </>
  )
}

export default Rotas
