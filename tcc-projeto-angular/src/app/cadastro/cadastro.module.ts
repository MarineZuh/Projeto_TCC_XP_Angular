import { NgModule } from '@angular/core';

import { CadastroProfessorComponent } from './pages/cadastro-professor/cadastro-professor.component';
import { SharedModule } from '../shared/shared.module';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroAlunoComponent } from './pages/cadastro-aluno/cadastro-aluno.component';
import { CadastroTccComponent } from './pages/cadastro-tcc/cadastro-tcc.component';
import { ModalBuscaOrientadorComponent } from './components/modal-busca-orientador/modal-busca-orientador.component';
import { ModalBuscaOrientandoComponent } from './components/modal-busca-orientando/modal-busca-orientando.component';
import { ModalMsgFormsComponent } from './components/modal-msg-forms/modal-msg-forms.component';



@NgModule({
  declarations: [
    CadastroProfessorComponent,
    CadastroAlunoComponent,
    CadastroTccComponent,
    ModalBuscaOrientadorComponent,
    ModalBuscaOrientandoComponent,
    ModalMsgFormsComponent
  ],
  imports: [
    SharedModule,
    CadastroRoutingModule,
  ]
})
export class CadastroModule { }
