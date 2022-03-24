//MODULES
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { SharedPagesModule } from './sharedPages/shared-pages.module';
import { GoogleTagManagerModule } from 'angular-google-tag-manager';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedPagesModule,
    PagesModule,
    RouterModule,
    GoogleTagManagerModule.forRoot({
      id: 'GTM-T3D7SX5',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
