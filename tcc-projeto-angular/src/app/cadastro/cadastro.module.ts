import { NgModule } from '@angular/core';

import { CadastroProfessorComponent } from './pages/cadastro-professor/cadastro-professor.component';
import { SharedModule } from '../shared/shared.module';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroAlunoComponent } from './pages/cadastro-aluno/cadastro-aluno.component';



@NgModule({
  declarations: [
    CadastroProfessorComponent,
    CadastroAlunoComponent
  ],
  imports: [
    SharedModule,
    CadastroRoutingModule,
  ]
})
export class CadastroModule { }
