export class Aluno {
  id: any;
  nome: string;
  sobrenome: string;
  curso: string;
  email: string;

  constructor(aluno: any) {
    Object.assign(this, aluno);
  }

}