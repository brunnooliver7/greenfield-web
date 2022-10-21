interface Medico  {
  id: number;
  nome: string;
  cpf: string
  email: string
  dt_nascimento: Date;
  crm: string;
  estado_registro_crm: string;
  estado: string;
  sexo: string;
  senha: string;
  dt_cadastro: Date;
  dt_atualizacao: Date;
}

export default Medico;