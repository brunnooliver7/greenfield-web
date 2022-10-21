import { observable, action, makeObservable } from "mobx";
import { createContext } from "react";
import Medico from "../models/Medico";
import axios from 'axios';
import { toast } from "react-toastify";

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
        onSuccess();
      })
      .catch(() => {});
  }

  obterMedicos = () => {
    axios.get('http://localhost:8080/medico')
      .then((res) => {
        this.medicos = res.data;
        console.log(res.data)
      })
      .catch(() => {});
  }

  setMostrarForm(value: boolean) {
    this.mostrarForm = value;
  }
}

export default createContext(new MedicoStore());