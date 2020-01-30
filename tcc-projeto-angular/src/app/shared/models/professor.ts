export class Professor {
  id: any;
  nome: string;
  sobrenome: string;
  departamento: string;
  email: string;
  formacao: string;

  constructor(professor: any) {
    Object.assign(this, professor);
  }
}