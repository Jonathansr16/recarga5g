import { AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';

import { Swiper, Autoplay, Pagination, Navigation, SwiperOptions} from 'swiper';

@Component({
  selector: 'app-carousel-productos',
  templateUrl: './carousel-productos.component.html',
  styleUrls: ['./carousel-productos.component.scss'],

})
export class CarouselProductosComponent implements AfterViewInit {

  @ViewChild('productosSwiper') prodSwiper?: ElementRef;
  
  @Input() productos: any;
  
  constructor() { }

private config: SwiperOptions = {
  modules: [Navigation,Pagination, Autoplay],
 
  loop: true,
  grabCursor: true,
  mousewheel: true,
  keyboard: true,
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
 speed: 2500,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
  // when window width is >= 320px
  320: {
    slidesPerView: 2,
    spaceBetween: 20
  },

   // when window width is >= 480px
   550: {
    slidesPerView: 3,
    spaceBetween: 30
  },

    // when window width is >= 640px
 950: {
  slidesPerView: 4,
  spaceBetween: 35
}
  }
    
  }


  ngAfterViewInit(): void {
    this.carouselContinue();
  }


  carouselContinue(): void {
   const _prodSwiper= this.prodSwiper?.nativeElement;
   new Swiper(_prodSwiper,this.config);

  }


}
