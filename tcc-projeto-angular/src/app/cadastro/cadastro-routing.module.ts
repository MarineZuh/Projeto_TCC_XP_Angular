import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CadastroProfessorComponent } from './pages/cadastro-professor/cadastro-professor.component';
import { CadastroAlunoComponent } from './pages/cadastro-aluno/cadastro-aluno.component';

const routes: Routes = [
  {
    path: 'professor',
    component: CadastroProfessorComponent,
  },
  {
    path: 'aluno',
    component: CadastroAlunoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }