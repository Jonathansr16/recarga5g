import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { NgwWowService } from 'ngx-wow';
import { Router, NavigationEnd } from '@angular/router';
import { MetaTagService } from './pages/services/meta-tag.service';
import { Meta, Title } from '@angular/platform-browser';
// import { GoogleTagManagerService } from 'angular-google-tag-manager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{


  showButtom = false;
  private scrollHeight = 500;

  constructor (private wowService: NgwWowService, @Inject(DOCUMENT) private document: Document,
                @Inject(PLATFORM_ID) private platformId,  private title: Title,
                // private gtmService: GoogleTagManagerService,
                private router: Router, private metaTag: MetaTagService) 
      {
            this.wowService.init();
                  
            
      }

  ngOnInit(): void {

 
    this.router.events.forEach(item => {
      if (item instanceof NavigationEnd) {
          const gtmTag = {
              event: 'page',
              pageName: item.url
          };
       
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

