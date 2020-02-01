export class Aluno {
  id: any;
  nome: string;
  curso: string;
  email: string;

  constructor(aluno: any) {
    Object.assign(this, aluno);
  }

}