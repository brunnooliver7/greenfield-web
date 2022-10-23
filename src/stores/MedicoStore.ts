import axios from 'axios';
import { action, makeObservable, observable } from "mobx";
import { createContext } from "react";
import { toast } from "react-toastify";
import { medicoFalhaToastOptions, medicoSalvoToastOptions } from "../constants/toast";
import Medico from "../models/Medico";

class MedicoStore {

  medicos: Medico[] = [];
  mostrarForm: boolean = false;

  constructor() {
    makeObservable(this, {
      medicos: observable,
      mostrarForm: observable,
      salvar: action.bound,
      setMostrarForm: action.bound,
      obterMedicos: action.bound,
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

  obterMedicos = () => {
    axios.get('http://localhost:8080/medico')
      .then((res) => {
        this.medicos = res.data;
        console.log(res.data)
      })
      .catch(() => toast("Erro ao tentar obter lista de médicos", medicoFalhaToastOptions))
  }

  setMostrarForm(value: boolean) {
    this.mostrarForm = value;
  }
}

export default createContext(new MedicoStore());