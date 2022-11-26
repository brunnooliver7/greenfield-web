import axios from 'axios';
import { action, makeObservable, observable } from "mobx";
import { createContext } from "react";
import { toast } from "react-toastify";
import { medicoFalhaToastOptions, medicoSalvoToastOptions } from "../constants/toast";
import { FormMode } from '../enums/FormMode';
import Medico from "../models/Medico";

class MedicoStore {

  medicos: Medico[] = [];
  medico: Medico | undefined;
  formMode: FormMode = FormMode.ADD;

  constructor() {
    makeObservable(this, {
      medicos: observable,
      medico: observable,
      formMode: observable,

      obterMedicos: action.bound,
      salvar: action.bound,
      editar: action.bound,

      setMedico: action.bound,
      setFormMode: action.bound,
    });
  }

  salvar = (medico: Medico, onSuccess: Function) => {
    axios.post('http://localhost:8080/medico', medico)
      .then(() => {
        toast("Médico salvo!", medicoSalvoToastOptions)
        onSuccess();
      })
      .catch(() => toast("Erro ao tentar salvar dados do médico", medicoFalhaToastOptions))
  }

  editar = (medico: Medico, onSuccess: Function) => {
    axios.put('http://localhost:8080/medico', medico)
      .then(() => {
        toast("Médico atualizado!", medicoSalvoToastOptions)
        onSuccess();
      })
      .catch(() => toast("Erro ao tentar atualizar dados do médico", medicoFalhaToastOptions))
      .finally(() => {
        this.setFormMode(FormMode.ADD)
      })
  }

  obterMedicos = async () => {
    let medicos;

    await fetch('http://localhost:8080/medico')
      .then(res => { medicos = res.json() })
      .catch(() => toast("Erro ao tentar obter lista de médicos", medicoFalhaToastOptions))

    return medicos ?? undefined;
  }

  setMedico(medico: Medico) {
    this.medico = medico;
  }

  setFormMode(formMode: FormMode) {
    this.formMode = formMode;
  }

}

export default createContext(new MedicoStore());