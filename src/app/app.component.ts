import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component,HostBinding, HostListener, inject, OnInit, PLATFORM_ID } from '@angular/core';
import {  Router, RouterOutlet } from '@angular/router';
import { ContactBtnComponent } from '@shared/contact-btn/contact-btn.component';
import { FooterComponent } from '@shared/footer/footer.component';
import { HeaderComponent } from '@shared/header/header.component';
import { UpScrollComponent } from '@shared/up-scroll/up-scroll.component';
import { ThemesService } from '@core/services/themes.service';

//  import { GoogleTagManagerModule, GoogleTagManagerService } from 'angular-google-tag-manager';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, UpScrollComponent, HeaderComponent, ContactBtnComponent, FooterComponent]

})
export class AppComponent  implements OnInit{
  title = 'recarga5g.com';

  showBtnScroll: boolean = false;
  private scrollHeight = 700;

  @HostBinding('class') componetCssClass: any;

  private readonly document = inject(DOCUMENT);
  private readonly platform_id = inject(PLATFORM_ID);
  private readonly router = inject(Router);
 private readonly themeService = inject(ThemesService);
 

  // private gtmService: GoogleTagManagerService,
  
constructor() {
}

ngOnInit(): void {
  this.themeService.initTheme();  // Esto aplicará el tema basado en el sistema o configuración guardada.

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
