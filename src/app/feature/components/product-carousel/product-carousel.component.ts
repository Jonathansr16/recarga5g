import {
  afterRender,
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  inject,
  input,
  OnInit,
  PLATFORM_ID,
  signal,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ProductCarousel } from 'src/app/interfaces/product-carousel.interface';
// import { SwiperOptions } from 'swiper/types';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SwiperOptions } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-product-carousel',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <swiper-container
    #swiper
      init="false"
      class="sw-product [mask-image:linear-gradient(to_right,transparent_0,#ffffff_128px,#ffffff_calc(100%_-_128px),transparent_100%)] dark:[mask-image:linear-gradient(to_right,transparent_0,#000000_128px,#000000_calc(100%_-_128px),transparent_100%)]  flex flex-row w-full h-full mx-auto overflow-hidden"
    >
      @for(product of products(); track $index ) {

      <swiper-slide
        class="sw-product-slide max-w-[180px] w-full h-auto m-auto mask"
      >
        <img
          [src]="product.img.src"
          class="sw-product-img object-contain"
          loading="lazy"
          [alt]="product.img.alt"
        />
      </swiper-slide>
      }
    </swiper-container>
  `,
  styles: [
    `
      swiper-container::part(wrapper) {
        transition-timing-function: linear !important;
      }
    `,
  ],
})
export class ProductCarouselComponent implements OnInit {
  products = input.required<ProductCarousel[]>();
  swiper = viewChild<ElementRef<SwiperContainer>>('swiper');

  options = signal<SwiperOptions>({});
  platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
    
      const swiperElement = this.swiper()!.nativeElement;
      
      swiperElement.autoplay = {
        delay: 0,
        disableOnInteraction: false
      };
      swiperElement.slidesPerView= 'auto';
      swiperElement.direction= 'horizontal';      
      swiperElement.loop = true;
      swiperElement.speed= 4000;
      swiperElement.grabCursor = true;
      swiperElement.initialize();
    
    }
  }

}
