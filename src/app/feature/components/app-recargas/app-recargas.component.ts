import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';

//*Librerias externas importadas
import { Swiper, Autoplay, Pagination, Navigation, SwiperOptions, EffectFade } from 'swiper';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-recargas',
  standalone: true,
  templateUrl: './app-recargas.component.html',
  styleUrls: ['./app-recargas.component.scss'],
  imports: [
    MatIconModule
  ]
})
export class AppRecargasComponent implements AfterViewInit {

  @ViewChild('carouselApp') _carouselApp?: ElementRef;

  constructor( @Inject(PLATFORM_ID) private plataform_id: Object) {}

  //*Config of carousel App
  private config: SwiperOptions = {
    modules: [Navigation, Pagination, Autoplay, EffectFade],
    loop: true,
    effect: 'fade',
    grabCursor: true,
    slidesPerView: 1,
    autoplay: {
      delay: 1500,
    },

  }

  ngAfterViewInit(): void {
    this.carouselApp();
  }


  //* INIT CAROUSEL APP
    carouselApp(): void {
      if (isPlatformBrowser(this.plataform_id)) {
        const carousel = this._carouselApp?.nativeElement;
        new Swiper(carousel, this.config)
      }
   
  }
}
