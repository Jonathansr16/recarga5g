import { Component, ElementRef, HostListener, Inject, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @ViewChild('minav') navbar: ElementRef;
  @ViewChild('btnBar') btnNav: ElementRef;
  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId, private renderer2: Renderer2) {
    
   }


  @HostListener('window:scroll')
  ScrollNav(): void {
    const scrollnav = this.navbar.nativeElement;
   
     if(isPlatformBrowser (this.platformId)) {
      if (this.document.body.scrollTop > 20 || this.document.documentElement.scrollTop > 20) {
        this.renderer2.addClass(scrollnav, 'shadow');
        this.renderer2.addClass(scrollnav, 'bg-white'); 
  
        } else {
          this.renderer2.removeClass(scrollnav, 'shadow');
          this.renderer2.removeClass(scrollnav, 'bg-white');
          this.renderer2.removeClass(scrollnav, 'bg-white'); 
          this.renderer2.addClass(scrollnav, 'mt-3'); 
        }

      }

  
  }



}
