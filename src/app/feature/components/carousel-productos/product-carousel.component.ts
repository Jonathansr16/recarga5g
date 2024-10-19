import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  inject,
  input,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { ProductCarousel } from '@core/interfaces/product-carousel.interface';
import { SwiperOptions } from 'swiper/types';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-product-carousel',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <swiper-container
      init="false"
      #swiperProdut
      class="swiper-product__container w-full h-full mx-auto overflow-hidden"
    >
      @for(product of products(); track $index ) {

      <swiper-slide class="swiper-product__slide">
        <img
          [src]="product.img.src"
          class="carousel-products__img object-contain max-w-52 max-h-52 w-full h-full"
          loading="lazy"
          [alt]="product.img.alt"
        />
      </swiper-slide>
      }
    </swiper-container>
  `,
  styles: `
.swiper-product__slide {
      max-width: 200px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
     }
    `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductCarouselComponent implements AfterViewInit {
  @ViewChild('swiperProdut') swiperProduct!: ElementRef;
  products = input.required<ProductCarousel[]>();

  private swiperParams: SwiperOptions = {
    injectStyles: [
      `
      :host .swiper-wrapper {
        transition-timing-function: linear;
      }
      `,
    ],

    //default parameters
    loop: true,
    direction: 'horizontal',
    grabCursor: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 2000,

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 768px
      640: {
        spaceBetween: 30,
      },
      // when window width is >= 768px
      768: {
        spaceBetween: 30,
      },
      //when window width is >= 1536px
      1536: {
        spaceBetween: 50,
      },
    },
  };

  private readonly platform_id = inject(PLATFORM_ID);
  // Método que asigna los parámetros de Swiper al componente
  SwiperProducts(): void {
    if (isPlatformBrowser(this.platform_id)) {
      const swiper = this.swiperProduct.nativeElement;
      Object.assign(swiper, this.swiperParams);
      swiper.initialize(); // Asegura que Swiper se inicialice con la configuración
    }
  }

  // Implementación de AfterViewInit para asegurar que el carrusel se inicialice después de renderizar el DOM
  ngAfterViewInit(): void {
    this.SwiperProducts();
  }
}
