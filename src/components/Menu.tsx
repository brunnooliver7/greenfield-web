import {
  faArrowRightFromBracket, faHeart, faHome, faHospitalUser, faPenToSquare, faUserDoctor
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {

  const location = useLocation();

  const homeMenuItemSelected = useMemo(() => {
    return location.pathname.includes("/home");
  }, [location.pathname]);

  const medicoMenuItemSelected = useMemo(() => {
    return location.pathname.includes("/medico");
  }, [location.pathname]);

  const pacienteMenuItemSelected = useMemo(() => {
    return location.pathname.includes("/paciente");
  }, [location.pathname]);

  const prescricaoMenuItemSelected = useMemo(() => {
    return location.pathname.includes("/prescricao");
  }, [location.pathname]);

  return (
    <div id="menu" className="
      p-2 text-center bg-white shadow rounded-3xl 
      flex flex-col justify-between w-full h-full text-xl"
    >
      <div className="basis-1/12">
        <div className="p-2.5 mt-1 flex justify-center items-center rounded-md ">
          <FontAwesomeIcon icon={faHeart} className="text-green-400" />
          <h1 className="text-[15px] ml-3 text-xl text-gray-00 font-bold">Greenfield</h1>
        </div>
        <hr className="my-2 text-gray-600" />
      </div>
      <div className="basis-10/12 flex flex-col">
        <Link
          className={`
            mt-2
            flex justify-left items-center w-full
            rounded-full  
            duration-100 
            cursor-pointer 
            ${homeMenuItemSelected
              ? 'bg-green-400 text-white'
              : 'text-gray-600'}
            hover:${homeMenuItemSelected
              ? ''
              : 'bg-gray-300'}
            hover:pl-3
          `}
          to={"home"}
        >
          <div className="
              m-2.5 ml-5
              flex justify-left items-center 
              w-full 
              duration-100
            ">
            <FontAwesomeIcon icon={faHome} />
            <span className="text-[15px] ml-4 font-bold">Home</span>
          </div>
        </Link>
        <Link
          className={`
            mt-2
            flex justify-left items-center w-full
            rounded-full  
            duration-100 
            cursor-pointer 
            ${medicoMenuItemSelected
              ? 'bg-green-400 text-white'
              : 'text-gray-600'}
            hover:${medicoMenuItemSelected
              ? ''
              : 'bg-gray-300'}
            hover:pl-3
          `}
          to="medico"
        >
          <div className="
              m-2.5 ml-5
              flex justify-left items-center 
              w-full 
              duration-100
            ">
            <FontAwesomeIcon icon={faUserDoctor} />
            <span className="text-[15px] ml-4 font-bold">Médicos</span>
          </div>
        </Link>
        <Link className={`
            mt-2
            flex justify-left items-center w-full
            rounded-full  
            duration-100 
            cursor-pointer 
            ${pacienteMenuItemSelected
            ? 'bg-green-400 text-white'
            : 'text-gray-600'}
            hover:${pacienteMenuItemSelected
            ? ''
            : 'bg-gray-300'}
            hover:pl-3
          `}
          to="paciente"
        >
          <div className="
              m-2.5 ml-5
              flex justify-left items-center 
              w-full 
              duration-100
            ">
            <FontAwesomeIcon icon={faHospitalUser} />
            <span className="text-[15px] ml-4 font-bold">Pacientes</span>
          </div>
        </Link>
        <Link className={`
            mt-2
            flex justify-left items-center w-full
            rounded-full  
            duration-100 
            cursor-pointer 
            ${prescricaoMenuItemSelected
            ? 'bg-green-400 text-white'
            : 'text-gray-600'}
            hover:${prescricaoMenuItemSelected
            ? ''
            : 'bg-gray-300'}
            hover:pl-3
          `}
          to="prescricao"
        >
          <div className="
              m-2.5 ml-5
              flex justify-left items-center 
              w-full 
              duration-100
            ">
            <FontAwesomeIcon icon={faPenToSquare} />
            <span className="text-[15px] ml-4 font-bold">Prescrições</span>
          </div>
        </Link>
      </div>

      <div className="basis-1/12">
        <div className="
            p-2.5 mt-3 px-4
            flex justify-center items-center rounded-full 
            duration-100 cursor-pointer 
            text-gray-500 hover:bg-red-600 hover:text-white
          ">
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          <span className="text-[15px] ml-4 font-bold">Sair</span>
        </div>
      </div>
    </div>
  )
}

export default Menu;
