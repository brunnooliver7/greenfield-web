import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { useQuery, UseQueryResult } from 'react-query'
import { Link } from 'react-router-dom'
import { EstadosRegistroCRM } from '../enums/EstadoRegistroCRM'
import { FormMode } from '../enums/FormMode'
import Medico from '../models/Medico'
import ImgStore from '../stores/ImgStore'
import MedicoStore from '../stores/MedicoStore'

const TabelaListaMedicos = () => {
  const { obterImgHomem, obterImgMulher } = useContext(ImgStore)
  const { obterMedicos, setFormMode, setMedico } = useContext(MedicoStore)

  const { data: medicos }: UseQueryResult<Medico[], Error> = useQuery(
    'medicos',
    obterMedicos,
    {
      retry: false,
    }
  )

  const headTitles = ['', 'Nome', 'Email', 'CRM', 'Estado CRM', 'Ações']

  return (
    <table className="w-full">
      <thead>
        <tr className="text-sm font-semibold text-black">
          {headTitles.map((headTitle) => (
            <th
              key={headTitle}
              className={`py-4 border-b border-gray-400 
                ${headTitle === 'Ações' ? 'text-center' : 'text-left'}
                ${headTitle === 'Nome' ? 'pl-2' : ''}`}
            >
              {headTitle}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {medicos?.map((medico: Medico) => (
          <tr key={medico.id} className="text-sm text-black">
            {/* Img */}
            <td className="w-14">
              <div>
                <img
                  src={medico.sexo === 'M' ? obterImgHomem() : obterImgMulher()}
                  alt=""
                  className="rounded-full p-2"
                />
              </div>
            </td>

            {/* Nome */}
            <td className="pl-2">{medico.nome}</td>

            {/* Email */}
            <td width={`${100 / headTitles.length}%`}>{medico.email}</td>

            {/* CRM */}
            <td className="w-20">{medico.crm}</td>

            {/* Estado registro CRM */}
            <td className="w-32">
              <span
                className={`flex justify-center py-1 w-24 capitalize rounded-full font-bold 
                  ${
                    medico.estado_registro_crm.toLowerCase() ===
                    EstadosRegistroCRM.ATIVO.toLowerCase()
                      ? 'bg-green-700/80 text-green-100'
                      : ''
                  } 
                  ${
                    medico.estado_registro_crm.toLowerCase() ===
                    EstadosRegistroCRM.SUSPENSO.toLowerCase()
                      ? 'bg-orange-700/60 text-yellow-50'
                      : ''
                  }`}
              >
                {medico.estado_registro_crm}
              </span>
            </td>

            {/* Acoes */}
            <td className="w-20">
              <div className="flex flex-row justify-center gap-2">
                <Link
                  onClick={() => {
                    setMedico(medico)
                    setFormMode(FormMode.EDIT)
                  }}
                  to={'form'}
                >
                  <div className="flex justify-center bg-yellow-700 rounded-full p-2 w-9 hover:bg-yellow-800 hover:cursor-pointer group">
                    <button>
                      <FontAwesomeIcon
                        icon={faPen}
                        className="text-yellow-400 group-hover:text-white"
                      />
                    </button>
                  </div>
                </Link>
                <div className="flex justify-center bg-red-600 rounded-full p-2 w-9 hover:bg-red-800 hover:cursor-pointer group">
                  <button>
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="text-red-50 group-hover:text-white"
                    />
                  </button>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default observer(TabelaListaMedicos)
