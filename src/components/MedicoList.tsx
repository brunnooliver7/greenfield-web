import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import PlusButton from "./PlusButton";
import TabelaListaMedicos from "./TabelaListaMedicos";

function MedicoList() {

  const navigate = useNavigate();

  return (
    <>
      <PlusButton onClick={() => navigate('/medico/add')} />
      <div className="h-full w-full pt-20 pl-5 pr-5">
        <div id="medico-page" className="h-full w-full flex-row justify-center items-center">
          <TabelaListaMedicos />
        </div>
      </div>
    </>
  )
}

export default observer(MedicoList);