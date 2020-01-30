import { NgModule } from '@angular/core';

import { CadastroProfessorComponent } from './pages/cadastro-professor/cadastro-professor.component';
import { SharedModule } from '../shared/shared.module';
import { CadastroRoutingModule } from './cadastro-routing.module';



@NgModule({
  declarations: [
    CadastroProfessorComponent
  ],
  imports: [
    SharedModule,
    CadastroRoutingModule,
  ]
})
export class CadastroModule { }
