import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';



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
  ],
  exports: [
    // Angular:
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    // Components:
    NavBarComponent
  ],
})
export class SharedModule { }
