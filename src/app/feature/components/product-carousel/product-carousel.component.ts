import {
  afterRender,
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  inject,
  input,
  PLATFORM_ID,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ProductCarousel } from '@core/interfaces/product-carousel.interface';
// import { SwiperOptions } from 'swiper/types';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SwiperOptions } from 'swiper/types';


@Component({
  selector: 'app-product-carousel',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <swiper-container
      init="false"
      #swiperProduct
      class="sw-product flex flex-row w-full h-full mx-auto overflow-hidden"
    >
      @for(product of products(); track $index ) {

      <swiper-slide class="sw-product-slide max-w-[180px] w-full h-auto m-auto" lazy="true">
        <img
          [src]="product.img.src"
          class="sw-product-img object-contain"
          loading="lazy"
          width="180"
          height="180"
          [alt]="product.img.alt"

        />
      </swiper-slide>
      }
    </swiper-container>

  `,
  styles: [`
  swiper-container::part(wrapper) {
    -webkit-transition-timing-function:linear!important;
-o-transition-timing-function:linear!important;
transition-timing-function:linear!important;
  }
    `]
})
export class ProductCarouselComponent {
  products = input.required<ProductCarousel[]>();
  swProductElement = viewChild.required<ElementRef>('swiperProduct');

  platform_id= inject(PLATFORM_ID);
  // @ViewChild('swiperProduct') swProduct: ElementRef | undefined;

  private swiperParams: SwiperOptions = {
    spaceBetween: 40,
   grabCursor: true,
   freeMode: true,
   centeredSlides: true,
   navigation: false,
   speed: 4500,
   loop: true,
   slidesPerView: 'auto',
   autoplay: {
     delay: 0.5,
     disableOnInteraction: false,
      },
    breakpoints: {
     0: { /* when window >=0px - webflow mobile landscape/portriat */
       spaceBetween: 30,
     },
         480: { /* when window >=0px - webflow mobile landscape/portriat */
       spaceBetween: 30,
     },
     767: { /* when window >= 767px - webflow tablet */
       spaceBetween: 40,
     },
     992: { /* when window >= 988px - webflow desktop */
       spaceBetween: 40,
     }
  }

}

  ngAfterViewInit(): void {
        if(isPlatformBrowser(this.platform_id)) {
          const swProduct = this.swProductElement().nativeElement;
          Object.assign(swProduct, this.swiperParams);
          swProduct.initialize(); // Inicializa Swiper

    }
  }
}
