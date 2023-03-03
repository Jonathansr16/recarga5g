import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

//COMPONENTS
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule
  
  ],  exports: [
    NavbarComponent,
    FooterComponent 
  ]
})
export class SharedModule { }
