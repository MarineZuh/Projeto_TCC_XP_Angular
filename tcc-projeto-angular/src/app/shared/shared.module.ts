import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { ButtonsModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    NavBarComponent,
    ModalComponent,
  ],
  imports: [
     // Angular:
     CommonModule,
     ReactiveFormsModule,
     HttpClientModule,
     RouterModule,
  
    
     // ngx-bootstrap:
     ButtonsModule.forRoot(),
     BsDropdownModule.forRoot(),
     ModalModule.forRoot(),
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
    ModalComponent,

  ],
})
export class SharedModule { }
