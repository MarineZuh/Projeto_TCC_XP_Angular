import { Professor } from './professor';
import { Aluno } from './aluno';

export class ProjetoTcc {

  id:any;
  tema: string;
  orientador: Professor;
  orientando: Aluno;

  constructor(tcc: any) {
    Object.assign(this, tcc);
  }
}