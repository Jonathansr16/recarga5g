import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, input, PLATFORM_ID, ViewChild } from '@angular/core';
import { ProductCarousel } from '@core/interfaces/product-carousel.interface';
// import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-cards-product',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `

<!-- <swiper-container #cardsProduct class="mySwiper" init="false">
  @for (product of products(); track $index) {
    <swiper-slide class="card-product__slide flex items-center justify-center bg-slate-100 dark:bg-slate-700 rounded-2xl border-2 border-slate-200 dark:border-slate-600">
      <img [src]="product.img.src" [alt]="product.img.alt">
    </swiper-slide>
  }
    
  </swiper-container> -->
  
  `,
 styles: [`
      swiper-container {
      width: 240px;
      height: 320px;
    }

  

  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class CardsProductComponent implements AfterViewInit { 
  @ViewChild('cardsProduct') swiperHero!: ElementRef;

  products = input.required<ProductCarousel[]>();

  // private swiperConfig: SwiperOptions = {
  //   effect: 'cards',
  //   loop: true,
  //   direction: 'horizontal',
  //   slidesPerView: 1,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false,
  //   },
  //   speed: 500
  // }

  private readonly platform_id = inject(PLATFORM_ID);


  // swiperCardsInit(): void {
  //   if(isPlatformBrowser(this.platform_id)) {
  //     const swiper = this.swiperHero.nativeElement;
  //     Object.assign(swiper, this.swiperConfig);
  //     swiper.initialize(); // Asegura que Swiper se inicialice con la configuración
  //   }
  // }
  ngAfterViewInit(): void {
    // this.swiperCardsInit()
  }

}
