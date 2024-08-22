import { trigger } from '@angular/animations';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, HostListener,  inject, PLATFORM_ID, Renderer2, signal, } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-up-scroll',
  standalone: true,
  templateUrl: './up-scroll.component.html',
  styleUrls: ['./up-scroll.component.scss'],
  imports: [
    CommonModule,
    MatIconModule
  ],
  // animations: [
  //   trigger('animateArrow', [

  //   ])
  // ]
})
export class UpScrollComponent {

  // activeScroll: boolean = false;
  activeScroll = signal<boolean>(false);
  topPosToStartShowing = 2000;

private readonly document = inject(DOCUMENT);
private readonly plataform_id = inject(PLATFORM_ID);
private readonly renderer2 = inject(Renderer2);

  // constructor(@Inject(DOCUMENT) private document: Document,
  //             @Inject(PLATFORM_ID) private plataform_id: Object) {}

  @HostListener('window: scroll')
  scrollUp(): void {

    if (isPlatformBrowser(this.plataform_id)) { 

    const scrollPosition = window.scrollY|| this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;

    if(scrollPosition >= this.topPosToStartShowing) {
      this.activeScroll.set(true);
    } else {
      this.activeScroll.set(false);
    }
    }

   }

   gotoTop() {

    if (isPlatformBrowser(this.plataform_id)) { 

      window.scroll({ 
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });
    }
  }


}
