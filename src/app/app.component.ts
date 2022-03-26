import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { NgwWowService } from 'ngx-wow';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recarga5g';

  showButtom = false;
  private scrollHeight = 500;

  constructor (private wowService: NgwWowService, @Inject(DOCUMENT) private document: Document,
                @Inject(PLATFORM_ID) private platformId,
                private gtmservice: GoogleTagManagerService,
                private router: Router) {

            this.wowService.init();
                  
          if(isPlatformBrowser (this.platformId))  {
            this.gtmservice.addGtmToDom();
           }

         this.router.events.forEach(item => {
          if (item instanceof NavigationEnd) {
              const gtmTag = {
                  event: 'page',
                  pageName: item.url
              };
    
              this.gtmservice.pushTag(gtmTag);
          }
      });

  }

  @HostListener('window:scroll')
  onWindoScroll():void {
   if(isPlatformBrowser (this.platformId)) {
     const yoffSet = window.scrollY;
     const scrollTop = this.document.documentElement.scrollTop || this.document.body.scrollTop;
     this.showButtom = (yoffSet || scrollTop) > this.scrollHeight;
 }
}


  onScrollTop():void {
 
    if(isPlatformBrowser (this.platformId)) {
      this.document.documentElement.scrollTop = 0;
    }
  }

}

