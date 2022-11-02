import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "@material-tailwind/react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import UFs from "../constants/UFs";
import ImgStore from "../stores/ImgStore";
import MedicoStore from "../stores/MedicoStore";
import BackButton from "./BackButton";

const MedicoForm = () => {

  const { salvar } = useContext(MedicoStore);
  const { obterImgHomem } = useContext(ImgStore);
  const navigate = useNavigate();

  const { handleSubmit, register, formState: { errors } } = useForm({
    mode: "onChange",
    resolver: yupResolver(medicoFormValidationSchema)
  })

  const onSubmit = (data: any) => {
    salvar(data, () => navigate('/medico'))
  }

  return (
    <>
      <BackButton onClick={() => navigate('/medico')} />
      <div className="flex justify-center items-center h-full">
        <div id="medico-form" className="w-96 rounded-full flex justify-center items-center p-5">
          <div className="w-full bg-white p-5 rounded-3xl">

            <div className="flex justify-center items-center pb-5">
              <img src={obterImgHomem()} alt="" className="rounded-full" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} >
              <div className="grid grid-rows-1 gap-4">
                <div>
                  <Input
                    {...register("nome")}
                    type="text"
                    variant="outlined"
                    label="Nome"
                    error={Boolean(errors?.nome)}
                  />
                  {errors?.nome && <span className="text-xs text-red-600">Informe um nome</span>}
                </div>
                <div>
                  <Input
                    {...register("cpf")}
                    type="text"
                    variant="outlined"
                    label="CPF"
                    error={Boolean(errors?.cpf)}
                  />
                  {errors?.cpf && <span className="text-xs text-red-600">Informe um CPF</span>}
                </div>
                <div>
                  <Input
                    {...register("crm")}
                    type="text"
                    variant="outlined"
                    label="CRM"
                    error={Boolean(errors?.crm)}
                  />
                  {errors?.crm && <span className="text-xs text-red-600">Informe um CRM</span>}
                </div>
                <div>
                  <Input
                    {...register("estado_registro_crm")}
                    type="text"
                    variant="outlined"
                    label="Estado de Registro do CRM"
                    error={Boolean(errors?.estado_registro_crm)}
                  />
                  {errors?.estado_registro_crm && <span className="text-xs text-red-600">Informe um Estado de Registro do CRM</span>}
                </div>
                <div>
                  <Input
                    {...register("sexo")}
                    type="text"
                    variant="outlined"
                    label="Sexo"
                    error={Boolean(errors?.sexo)}
                  />
                  {errors?.sexo && <span className="text-xs text-red-600">Informe um Sexo</span>}
                </div>
                <div>
                  <Input
                    {...register("dt_nascimento")}
                    type="date"
                    variant="outlined"
                    label="Data de Nascimento"
                    error={Boolean(errors?.dt_nascimento)}
                  />
                  {errors?.dt_nascimento && <span className="text-xs text-red-600">Informe uma Data de Nascimento</span>}
                </div>
                <div>
                  <Input
                    {...register("email")}
                    type="email"
                    variant="outlined"
                    label="Email"
                    error={Boolean(errors?.email)}
                  />
                  {errors?.email && <span className="text-xs text-red-600">Informe um Email</span>}
                </div>
                <div>
                  <span>Estado</span>
                  <select {...register("estado")}>
                    {/* <Select label="Estado"> */}
                    <option>{null}</option>
                      {Object.values(UFs).map(uf => (
                        <option key={uf}>{uf.toString()}</option>
                      ))}
                    {/* </Select> */}
                  </select>
                  {errors?.estado && <span className="text-xs text-red-600">Informe um Estado</span>}
                </div>
                <div>
                  <Input
                    {...register("senha")}
                    type="password"
                    variant="outlined"
                    label="Senha"
                    error={Boolean(errors?.senha)}
                  />
                  {errors?.senha && <span className="text-xs text-red-600">Informe uma Senha</span>}
                </div>
                <Button type="submit">Enviar</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

const medicoFormValidationSchema = yup.object().shape({
  nome: yup.string().required(),
  cpf: yup.string().required(),
  crm: yup.string().required(),
  dt_nascimento: yup.string().required(),
  email: yup.string().required(),
  estado_registro_crm: yup.string().required(),
  sexo: yup.string().required(),
  senha: yup.string().required(),
  estado: yup.string().required(),
});

export default observer(MedicoForm);
