import { 
  faArrowRightFromBracket, 
  faHospitalUser, 
  faUserDoctor, 
  faHeart, 
  faPenToSquare,
  faHome
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = () => {
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
          <div className="
            mt-2
            flex justify-left items-center w-full
            rounded-full  
            duration-300 
            cursor-pointer 
            text-gray-600
            hover:bg-gray-300
            hover:pl-3
          "
          onClick={() => {
            // implement
          }}>
            <div className="
              m-2.5 ml-5
              flex justify-left items-center 
              w-full 
              duration-500
            ">
              <FontAwesomeIcon icon={faHome} />
              <span className="text-[15px] ml-4 font-bold">Home</span>
            </div>
          </div>
          <div className="
            mt-2
            flex justify-left items-center w-full
            rounded-full  
            duration-300 
            cursor-pointer 
            text-gray-600
            hover:bg-gray-300
            hover:pl-3
          "
          onClick={() => {
            // implement
          }}>
            <div className="
              m-2.5 ml-5
              flex justify-left items-center 
              w-full 
              duration-500
            ">
              <FontAwesomeIcon icon={faUserDoctor} />
              <span className="text-[15px] ml-4 font-bold">Médicos</span>
            </div>
          </div>
          <div className="
            mt-2
            flex justify-left items-center w-full
            rounded-full  
            duration-300 
            cursor-pointer 
            text-gray-600
            hover:bg-gray-300
            hover:pl-3
          "
          onClick={() => {
            // implement
          }}>
            <div className="
              m-2.5 ml-5
              flex justify-left items-center 
              w-full 
              duration-500
            ">
              <FontAwesomeIcon icon={faHospitalUser} />
              <span className="text-[15px] ml-4 font-bold">Pacientes</span>
            </div>
          </div>
          <div className="
            mt-2
            flex justify-left items-center w-full
            rounded-full  
            duration-300 
            cursor-pointer 
            text-gray-600
            hover:bg-gray-300
            hover:pl-3
          ">
            <div className="
              m-2.5 ml-5
              flex justify-left items-center 
              w-full 
              duration-500
            ">
              <FontAwesomeIcon icon={faPenToSquare} />
              <span className="text-[15px] ml-4 font-bold">Prescrições</span>
            </div>
          </div>
        </div>

        <div className="basis-1/12">
          <div className="
            p-2.5 mt-3 px-4
            flex justify-center items-center rounded-full 
            duration-300 cursor-pointer 
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
