import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormMode } from "../enums/FormMode";
import MedicoStore from "../stores/MedicoStore";
import PlusButton from "./PlusButton";
import TabelaListaMedicos from "./TabelaListaMedicos";

function MedicoList() {

  const navigate = useNavigate();
  const { setFormMode } = useContext(MedicoStore);

  return (
    <>
      <PlusButton onClick={() => {
        navigate('/medico/form')
        setFormMode(FormMode.ADD)
      }} />
      <div className="h-full w-full pt-20 pl-5 pr-5">
        <div id="medico-page" className="h-full w-full flex-row justify-center items-center">
          <TabelaListaMedicos />
        </div>
      </div>
    </>
  )
}

export default observer(MedicoList);