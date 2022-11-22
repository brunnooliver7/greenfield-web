import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input, Option, Select } from "@material-tailwind/react";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Controller, useForm } from 'react-hook-form';
import ReactInputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { EstadosRegistroCRM } from "../enums/EstadoRegistroCRM";
import { FormMode } from "../enums/FormMode";
import { Sexos } from "../enums/Sexos";
import UFs from "../enums/UFs";
import Medico from "../models/Medico";
import ImgStore from "../stores/ImgStore";
import MedicoStore from "../stores/MedicoStore";
import BackButton from "./BackButton";

const MedicoForm = () => {

  const { salvar, editar, formMode, setFormMode, medico } = useContext(MedicoStore);
  const { obterImgHomem } = useContext(ImgStore);
  const navigate = useNavigate();

  const { handleSubmit, register, control, setValue, formState: { errors } } = useForm({
    mode: "onChange",
    resolver: yupResolver(medicoFormValidationSchema)
  })

  useEffect(() => {
    if (formMode === FormMode.EDIT && medico) {
      Object.keys(medico).forEach(key => {
        setValue(key, medico[key as keyof Medico])
      });
    }
  }, [formMode, medico])

  const onSubmit = (data: any) => {
    if (formMode === FormMode.ADD) {
      salvar(data, () => navigate('/medico'))
    }

    if (formMode === FormMode.EDIT) {
      editar(data, () => navigate('/medico'))
    }
  }

  return (
    <>
      <BackButton onClick={() => {
        navigate('/medico')
        setFormMode(FormMode.ADD)
      }} />
      <div className='overflow-y-scroll scrollbar'>
        <div className="flex justify-center items-center h-full">
          <div id="medico-form" className="w-96 rounded-full flex justify-center items-center p-5">
            <div className="w-full bg-white p-5 rounded-3xl">

              <div className="flex justify-center items-center pb-5">
                <img src={obterImgHomem()} alt="" className="rounded-full" />
              </div>

              <form onSubmit={handleSubmit(onSubmit)} >
                <div className="grid grid-rows-1 gap-4">

                  {/* Nome */}
                  <div>
                    <Input
                      {...register("nome")}
                      type="text"
                      variant="outlined"
                      label="Nome"
                      error={Boolean(errors?.nome)}
                    />
                    {errors?.nome && <span className="text-xs text-red-600">{errors?.nome?.message?.toString()}</span>}
                  </div>

                  {/* CPF */}
                  <div>
                    <Controller
                      name="cpf"
                      control={control}
                      defaultValue=""
                      render={({
                        field: { onChange: controllerOnChange, ...rest }
                      }) => (
                        <ReactInputMask
                          {...rest}
                          mask="999.999.999-99"
                          maskChar=""
                          onChange={(e) => {
                            controllerOnChange(String(e.target.value));
                          }}
                        >
                          {/* @ts-ignore */}
                          {() =>
                            <Input
                              type="text"
                              variant="outlined"
                              label="CPF"
                              error={Boolean(errors?.cpf)}
                            />
                          }
                        </ReactInputMask>
                      )}
                    />
                    {errors?.cpf && <span className="text-xs text-red-600">{errors?.cpf?.message?.toString()}</span>}
                  </div>

                  {/* CRM */}
                  <div>
                    <Controller
                      name='crm'
                      control={control}
                      defaultValue=""
                      render={({
                        field: { onChange: controllerOnChange, ...rest }
                      }) => (
                        <ReactInputMask
                          {...rest}
                          mask="999999"
                          maskChar=""
                          onChange={(e) => {
                            controllerOnChange(String(e.target.value));
                          }}
                        >
                          {/* @ts-ignore */}
                          {() =>
                            <Input
                              type="text"
                              variant="outlined"
                              label="CRM"
                              error={Boolean(errors?.crm)}
                            />
                          }
                        </ReactInputMask>
                      )}
                    />
                    {errors?.crm && <span className="text-xs text-red-600">{errors?.crm?.message?.toString()}</span>}
                  </div>

                  {/* Estado de Registro do CRM */}
                  <div>
                    <Controller
                      name={"estado_registro_crm"}
                      control={control}
                      render={({ field: { onChange: controllerOnChange } }) =>
                        <Select
                          label="Estado de registro do CRM"
                          onChange={(estado_registro_crm) => controllerOnChange(estado_registro_crm)}
                          error={Boolean(errors?.estado_registro_crm)}
                        >
                          {Object.values(EstadosRegistroCRM).map(estado_registro_crm => (
                            <Option key={estado_registro_crm} value={estado_registro_crm}>
                              {estado_registro_crm.toString()}
                            </Option>
                          ))}
                        </Select>
                      }
                    />
                    {errors?.estado_registro_crm && <span className="text-xs text-red-600">{errors?.estado_registro_crm?.message?.toString()}</span>}
                  </div>

                  {/* Sexo */}
                  <div>
                    <Controller
                      name={"sexo"}
                      control={control}
                      render={({ field: { onChange: controllerOnChange } }) =>
                        <Select
                          label="Sexo"
                          onChange={(sexo) => controllerOnChange(sexo)}
                          error={Boolean(errors?.sexo)}
                        >
                          {Object.values(Sexos).map(sexo => (
                            <Option key={sexo} value={sexo}>
                              {sexo.toString()}
                            </Option>
                          ))}
                        </Select>
                      }
                    />
                    {errors?.sexo && <span className="text-xs text-red-600">{errors?.sexo?.message?.toString()}</span>}
                  </div>

                  {/* Data de Nascimento */}
                  <div>
                    <Input
                      {...register("dt_nascimento")}
                      type="date"
                      variant="outlined"
                      label="Data de Nascimento"
                      error={Boolean(errors?.dt_nascimento)}
                    />
                    {errors?.dt_nascimento && <span className="text-xs text-red-600">{errors?.dt_nascimento?.message?.toString()}</span>}
                  </div>

                  {/* Email */}
                  <div>
                    <Input
                      {...register("email")}
                      type="email"
                      variant="outlined"
                      label="Email"
                      error={Boolean(errors?.email)}
                    />
                    {errors?.email && <span className="text-xs text-red-600">{errors?.email?.message?.toString()}</span>}
                  </div>

                  {/* Estado */}
                  <div>
                    <Controller
                      name={"estado"}
                      control={control}
                      render={({ field: { onChange: SelectOnChange } }) =>
                        <Select
                          label="Estado"
                          onChange={(uf) => SelectOnChange(uf)}
                          error={Boolean(errors?.estado)}
                        >
                          {Object.values(UFs).map(uf => (
                            <Option key={uf} value={uf}>
                              {uf.toString()}
                            </Option>
                          ))}
                        </Select>
                      }
                    />
                    {errors?.estado && <span className="text-xs text-red-600">{errors?.estado?.message?.toString()}</span>}
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
      </div >
    </>
  )
}

const medicoFormValidationSchema = yup.object().shape({
  nome: yup.string()
    .required('Informe um nome'),
  cpf: yup.string()
    .required('Informe um CPF')
    .length(14, 'O CPF deve conter 11 dígitos'),
  crm: yup.string()
    .required('Informe um CRM')
    .length(6, 'O CRM deve conter 6 dígitos'),
  estado_registro_crm: yup.string()
    .required('Informe um estado de registro do CRM'),
  sexo: yup.string().required('Informe um sexo'),
  dt_nascimento: yup.string()
    .required('Informe uma Data de Nascimento'),
  email: yup.string()
    .email('Informe um email válido')
    .required('Informe um Email'),
  estado: yup.string()
    .required('Informe um Estado'),
  senha: yup.string().required(),
});

export default observer(MedicoForm);
