import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { productoModel } from '@core/models/productos.model';
import { registerSteps } from '@core/models/register-steps-model';
import { ProductosService } from '@core/services/productos.service';
import { RegisterStepsService } from '@core/services/register-steps.service';

import { Swiper, Autoplay, Pagination, Navigation, SwiperOptions} from 'swiper';

@Component({
  selector: 'app-recargas',
  templateUrl: './recargas.component.html',
  styleUrls: ['./recargas.component.scss', '../consulta.component.scss'],
  providers: [ProductosService]
})
export class RecargasComponent implements OnInit, AfterViewInit {

  @ViewChild('recargasSwiper')tae?: ElementRef;
  recargas: productoModel[] = [];
  stepRecargas: registerSteps[] = [];

  // private config: SwiperOptions = {
  //   modules: [Navigation,Pagination, Autoplay],
  //   loop: true,
  //   slidesPerView: 4,
  //   spaceBetween: 25,
  //   grabCursor: true,
  //   mousewheel: true,
  //   keyboard: true,
  //   speed: 2500,
  //   autoplay: {
  //     delay: 0,
  //     disableOnInteraction: false,
  //     reverseDirection: true,
  //   },
  //   // Responsive breakpoints
  //   breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 2,
  //     spaceBetween: 20
  //   },
  
  //    // when window width is >= 480px
  //    550: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   },
  
  //     // when window width is >= 640px
  //  950: {
  //   slidesPerView: 4,
  //   spaceBetween: 35
  // }
  //   }
      
  //   }

  constructor(private readonly _recargasService: ProductosService,
              private readonly _stepRecargasService: RegisterStepsService) {}

    ngOnInit(): void {
        this.recargas= this._recargasService.getRecargas();
        this.stepRecargas = this._stepRecargasService.getStepsRecargas();
    }


    ngAfterViewInit(): void {
          // this.carouselRecarga();
    }

    // carouselRecarga(): void {
    //   const recargaCarousel = this.tae?.nativeElement;
    //   new Swiper(recargaCarousel, this.config);
    // }
}
