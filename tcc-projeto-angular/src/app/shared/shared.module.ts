import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ButtonsModule } from 'ngx-bootstrap';
import FormValidacaoCss from './util/form-validacao-css';


@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
     // Angular:
     CommonModule,
     ReactiveFormsModule,
     HttpClientModule,
     RouterModule,

     // ngx-bootstrap:
     ButtonsModule.forRoot()
  ],
  exports: [
    // Angular:
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    // bgx-bootstrap:
    ButtonsModule,
    // Components:
    NavBarComponent,

  ],
})
export class SharedModule { }
