import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'cadastros',
    loadChildren: () => import('./cadastro/cadastro.module').then(m=>m.CadastroModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
