import { Route, Routes } from 'react-router-dom'
import MedicoForm from '../components/MedicoForm'
import MedicoList from '../components/MedicoList'

const MedicoRoutes = () => {
  return (
    <Routes>
      <Route path="medico" element={<MedicoList />} />
      <Route path="medico/form" element={<MedicoForm />} />
    </Routes>
  )
}

export default MedicoRoutes
