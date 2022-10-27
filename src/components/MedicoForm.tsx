import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input, Option, Select } from "@material-tailwind/react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import UFs from "../constants/UFs";
import MedicoStore from "../stores/MedicoStore";
import BackButton from "./BackButton";

const MedicoForm = () => {

  const { salvar } = useContext(MedicoStore);

  const { handleSubmit, register, formState: { errors }, reset } = useForm({
    mode: "onChange",
    resolver: yupResolver(medicoFormValidationSchema)
  })

  const onSubmit = (data: any) => {
    salvar(data, () => reset())
  }

  const clienteImg = () => {
    let link = "https://randomuser.me/api/portraits/men/"
    const min = 0;
    const max = 99;
    const random = Math.floor(Math.random() * (+max - +min)) + +min;
    link = link.concat(random.toString())
    link = link.concat(".jpg")
    return link
  }

  const navigate = useNavigate();

  return (
    <>
      <BackButton onClick={() => navigate('/medico')} />
      <div className="flex justify-center items-center h-full">
        <div id="medico-form" className="w-96 rounded-full flex justify-center items-center p-5">
          <div className="w-full bg-white p-5 rounded-3xl">

            <div className="flex justify-center items-center pb-5">
              <img src={clienteImg()} alt="" className="rounded-full" />
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
                    {...register("estadoRegistroCrm")}
                    type="text"
                    variant="outlined"
                    label="Estado de Registro do CRM"
                    error={Boolean(errors?.estadoRegistroCrm)}
                  />
                  {errors?.estadoRegistroCrm && <span className="text-xs text-red-600">Informe um Estado de Registro do CRM</span>}
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
                    {...register("dtNascimento")}
                    type="date"
                    variant="outlined"
                    label="Data de Nascimento"
                    error={Boolean(errors?.dtNascimento)}
                  />
                  {errors?.dtNascimento && <span className="text-xs text-red-600">Informe uma Data de Nascimento</span>}
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
                  <Select label="Estado">
                    {Object.values(UFs).map(uf => (
                      <Option key={uf}>{uf}</Option>
                    ))}
                  </Select>
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
  dtNascimento: yup.string().required(),
  email: yup.string().required(),
  estadoRegistroCrm: yup.string().required(),
  sexo: yup.string().required(),
  senha: yup.string().required(),
});

export default observer(MedicoForm);
