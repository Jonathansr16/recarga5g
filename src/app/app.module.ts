import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '@shared/shared.module';
import { GoogleTagManagerModule } from 'angular-google-tag-manager';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioModule } from './modules/inicio/inicio.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule,
    SharedModule,
    InicioModule,
    AppRoutingModule,
    GoogleTagManagerModule.forRoot({
      id:  'GTM-MSRNXRP',
    }),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
