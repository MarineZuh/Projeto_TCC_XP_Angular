import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CadastroProfessorComponent } from './pages/cadastro-professor/cadastro-professor.component';
import { CadastroAlunoComponent } from './pages/cadastro-aluno/cadastro-aluno.component';
import { CadastroTccComponent } from './pages/cadastro-tcc/cadastro-tcc.component';

const routes: Routes = [
  {
    path: 'professor',
    component: CadastroProfessorComponent,
  },
  {
    path: 'aluno',
    component: CadastroAlunoComponent,
  },
  {
    path: 'projeto-tcc',
    component: CadastroTccComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }