import { AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { productoModel } from '@core/models/productos.model';
import { ProductosService } from '@core/services/productos.service';

import { Swiper, Autoplay, Pagination, Navigation, SwiperOptions} from 'swiper';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [ProductosService]
})
export class CarouselComponent implements OnInit, AfterViewInit {

  @ViewChild('productosSwiper') prodSwiper?: ElementRef;
  productos: productoModel[] = [];
  
private config: SwiperOptions = {
  modules: [ Navigation,Pagination, Autoplay],
 
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

  constructor(private _productoService: ProductosService, ) { }
  ngOnInit(): void {
    this.productos = this._productoService.getProductos();
  }

  ngAfterViewInit(): void {
    this.carouselContinue();
  }


  carouselContinue(): void {
   const _prodSwiper= this.prodSwiper?.nativeElement;
   new Swiper(_prodSwiper,this.config);

  }


}
