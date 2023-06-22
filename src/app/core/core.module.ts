import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//*COMPONENT
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NofoundComponent } from './components/nofound/nofound.component';

//* Components of Angular Material
import { MaterialModule } from '@shared/material/material.module';
import { UpScrollComponent } from './components/up-scroll/up-scroll.component';
import { ContactBtnComponent } from './components/contact-btn/contact-btn.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NofoundComponent,
    UpScrollComponent,
    ContactBtnComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    MatToolbarModule,
    MatMenuModule
  
  ], exports: [
    HeaderComponent,
    FooterComponent,
    NofoundComponent,
    UpScrollComponent,
    ContactBtnComponent,
  ],
  providers:[
    
  ]
})
export class CoreModule { }
