import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

//APP COMPONENT
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgOptimizedImage } from '@angular/common';
//SHARED MODULE
import { SharedModule } from '@shared/shared.module';
//INICIO MODULE 
import { InicioModule } from '@inicio/inicio.module';

import { GoogleTagManagerModule } from 'angular-google-tag-manager';
import { ComponentsModule } from '@components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    SharedModule,
    InicioModule,
    ComponentsModule,
   NgOptimizedImage,
    GoogleTagManagerModule.forRoot({
      id:  'GTM-MSRNXRP',
    }),
    BrowserAnimationsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
