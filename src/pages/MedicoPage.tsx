import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import BackButton from "../components/BackButton";
import MedicoForm from "../components/MedicoForm";
import MedicoList from "../components/MedicoList";
import PlusButton from "../components/PlusButton";
import MedicoStore from "../stores/MedicoStore";

function MedicoPage() {

  const { mostrarForm, setMostrarForm } = useContext(MedicoStore);

  return (
    <div id="medico-page" className="h-full w-full flex-row justify-center items-center">
      <ToastContainer />
      {mostrarForm && (
        <>
          <BackButton onClick={() => setMostrarForm(false)} />
          <div className="flex justify-center items-center h-full">
            <MedicoForm />
          </div>
        </>
      )}
      {!mostrarForm && (
        <>
          <PlusButton onClick={() => setMostrarForm(true)} />
          <MedicoList />
        </>
      )}
    </div>
  )
}

export default observer(MedicoPage);