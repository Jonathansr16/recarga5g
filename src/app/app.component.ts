import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component,HostBinding, HostListener, inject, OnInit, PLATFORM_ID } from '@angular/core';
import {  Router, RouterOutlet } from '@angular/router';
import { ContactBtnComponent } from '@core/components/contact-btn/contact-btn.component';
import { FooterComponent } from '@core/components/footer/footer.component';
import { HeaderComponent } from '@core/components/header/header.component';
import { UpScrollComponent } from '@core/components/up-scroll/up-scroll.component';

//  import { GoogleTagManagerModule, GoogleTagManagerService } from 'angular-google-tag-manager';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UpScrollComponent,
    HeaderComponent,
    ContactBtnComponent,
    FooterComponent,
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent  implements OnInit{
  title = 'recarga5g.com';

  showBtnScroll: boolean = false;
  private scrollHeight = 700;

  @HostBinding('class') componetCssClass: any;

  private readonly document = inject(DOCUMENT);
  private readonly platform_id = inject(PLATFORM_ID);
  private readonly router = inject(Router);
 
  // private gtmService: GoogleTagManagerService,
  

  constructor() {
    // if(isPlatformBrowser (this.platform_id)) { 
    //   this.gtmService.addGtmToDom();
    // }
   }

ngOnInit(): void {
  // this.router.events.forEach(home => {
  //   if (home instanceof NavigationEnd) {
  //     const gtmTag = {
  //       event: 'Page',
  //       pageName: home.url
  //     };
  //     this.gtmService.pushTag(gtmTag);
  //   }


  // })
}

  @HostListener('window:scroll')
  ScrollTop():void {
   if(isPlatformBrowser (this.platform_id)) {
     const yoffSet = window.scrollY;
     const scrollTop = this.document.documentElement.scrollTop || this.document.body.scrollTop;
     this.showBtnScroll = (yoffSet || scrollTop) > this.scrollHeight;
 }
}


  onScrollTop():void {
    if(isPlatformBrowser (this.platform_id)) {
      this.document.documentElement.scrollTop = 0;
    }
  }


}
