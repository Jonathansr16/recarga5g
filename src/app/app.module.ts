//MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { SharedPagesModule } from './sharedPages/shared-pages.module';
import { PagesModule } from './pages/pages.module';
import { GoogleTagManagerModule } from 'angular-google-tag-manager';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    RouterModule,
    SharedPagesModule,
    PagesModule,
    GoogleTagManagerModule.forRoot({
      id: 'GTM-T3D7SX5',
    })
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
