import { DOCUMENT } from '@angular/common';
import { Component, HostListener,  Inject, PLATFORM_ID, } from '@angular/core';

@Component({
  selector: 'app-up-scroll',
  templateUrl: './up-scroll.component.html',
  styleUrls: ['./up-scroll.component.scss']
})
export class UpScrollComponent {

  activeScroll: boolean = false;
  topPosToStartShowing = 2000;
  constructor(@Inject(DOCUMENT) private document: Document,
              @Inject(PLATFORM_ID) private plataform_id: Object) {}

  @HostListener('window: scroll')
  scrollUp(): void {

    const scrollPosition = window.scrollY|| this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;

 
    if(scrollPosition >= this.topPosToStartShowing) {
      this.activeScroll = true;
    } else {
      this.activeScroll = false
    }
   }

   gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }


}
