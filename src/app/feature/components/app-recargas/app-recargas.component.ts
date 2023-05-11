import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

//*Librerias externas importadas
import { Swiper, Autoplay, Pagination, Navigation, SwiperOptions, EffectFade } from 'swiper';

@Component({
  selector: 'app-recargas',
  templateUrl: './app-recargas.component.html',
  styleUrls: ['./app-recargas.component.scss']
})
export class AppRecargasComponent implements AfterViewInit {

  @ViewChild('carouselApp') _carouselApp?: ElementRef;

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
    const carousel = this._carouselApp?.nativeElement;
    new Swiper(carousel, this.config)
  }
}
