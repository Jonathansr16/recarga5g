import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, Routes } from '@angular/router';

import { GoogleTagManagerService } from 'angular-google-tag-manager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'recarga5g.com';


  showBtnScroll: boolean = false;
  private scrollHeight = 700;

  constructor(@Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platform_id: Object,
    private gtmService: GoogleTagManagerService,
    private router: Router,
  ) {
    if(isPlatformBrowser (this.platform_id)) { 
      this.gtmService.addGtmToDom();
    }
   }

ngOnInit(): void {
  this.router.events.forEach(home => {
    if (home instanceof NavigationEnd) {
      const gtmTag = {
        event: 'Page',
        pageName: home.url
      };
      this.gtmService.pushTag(gtmTag);
    }


  })
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
