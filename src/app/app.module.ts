import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleTagManagerModule } from 'angular-google-tag-manager';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioModule } from '@inicio/inicio.module';
import { CoreModule } from '@core/core.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule,
    InicioModule,
    CoreModule,
    AppRoutingModule,
    GoogleTagManagerModule.forRoot({
      id:  'GTM-MSRNXRP',
    }),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
