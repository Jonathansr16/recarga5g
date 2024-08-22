import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit, PLATFORM_ID, inject } from '@angular/core';

//*Librerias externas importadas
import { Swiper, Autoplay, Pagination, Navigation, SwiperOptions, EffectFade } from 'swiper';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-recargas',
  standalone: true,
  template: `
  <div class="app-recargas">
  <div class="app-recargas__container max-w-[1328px] mx-auto">
    <h4
      class="app-recargas__h4 text-red-700 text-lg md:text-xl lg:text-2xl font-semibold text-center my-2">
      App para la venta de recargas
    </h4>

    <h3
      class="app-recargas__h3 text-slate-700 dark:text-white font-bold pb-2 text-3xl lg:text-5xl">
      App para recargas Bait, Pago de servicios y pines
    </h3>

    <div class="app-recargas-content flex flex-row flex-nowrap justify-center items-center gap-4">
     
    <div class="app-recargas__left w-5/12">
        <ul class="app-recargas-list__ul">
          @for (item of listApp; track $index) {
          <li class="app-recargas-list__li mb-8 text-base text-slate-700 pb-4 before:content-[counter(mynumbers)] before:text-4xl before:inline-block before:w-9 before:h-9 before:leading-9 before:rounded-[50%] before:text-center before:bg-red-100 before:text-red-700 before:mr-2">
            {{ item.label }}
          </li>

          
          }
        </ul>

        <div class="app-recargas-action flex gap-4 justify-center items-center">

          <a
           matRipple 
          [matRippleColor]="'rgba(255, 255, 255, .1)'"
            class="app-recargas-action__a text-white bg-red-600 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-sm cursor-pointer"
            routerLink="/registro"
            mat-raised-button
            color="primary"
            >Registrarme</a
          >
          <a
           matRipple 
          [matRippleColor]="'rgba(255, 255, 255, .1)'"
            class="app-recargas-action__a text-white bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-sm cursor-pointer"
            routerLink="/plataforma/pagaqui"
          >
            Explorar plataforma
          </a>
        </div>
      </div>

      <div class="app-recargas__right w-5/12">
        <div class="app-recargas-phone app-phone relative max-w-80 max-h-[600px] w-full h-full mt-8 mx-auto border-[6px] border-slate-800 dark:border-slate-700 rounded-[36px] overflow-hidden after:content-[''] after:absolute after:z-[1] after:bg-slate-700 dark:after:bg-slate-700 after:top-0 after:left-2/4 after:w-[150px] after:h-5 after:-ml-[75px]">
          <div #carouselApp class="app-phone-swiper swiper">
            <div class="app-phone-swiper-wrapper swiper-wrapper">
              @for (product of carouselImg; track $index) {
              <div class="app-phone-slide swiper-slide">
                <img
                  [src]="product.img.url"
                  class="app-phone-slide__img"
                  loading="lazy"
                  [alt]="product.img.alt"
                />
              </div>
              }
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

  `,
  styleUrls: ['./app-recargas.component.scss'],
  imports: [
    CommonModule,
    MatIconModule,
    MatRippleModule,
  ]
})
export class AppRecargasComponent implements AfterViewInit {

@ViewChild('carouselApp') _carouselApp?: ElementRef;
private readonly plataform_id = inject(PLATFORM_ID);

  readonly listApp = [

    {
      id: 1,
      label: 'Descarga e instala la App desde la tienda oficial.'
    },

    {
      id: 2,
      label: 'Si ya te encuentras registrado ingresa a la plataforma.'
    },

    {
      id: 3,
      label: 'Consulta las cuentas bancarias autorizadas'
    },

    {
      id: 4,
      label: 'Notifica tus depositos desde la App'
    },

    {
      id: 5,
      label: '¡Listo! Así de fácil podrás realizar recargas a cualquier compañía.'
    }
  ];

  readonly carouselImg = [

    {
      id: 1,
      typeService: 'recargas',
      img: {
        id: 10,
        url: 'assets/img/slide-recargas.jpg',
        alt: 'App para venta de recargas'
      }

    },

      {
        id: 2,
        typeService: 'servicios',
        img: {
          id: 11,
          url: 'assets/img/slide-servicios.jpg',
          alt: 'App para pago de servicios'
        }
      },

      {
        id: 3,
        typerService: 'pines',
        img: {
          id: 12,
          url: 'assets/img/slide-pines.jpg',
          alt: 'App pines electrónicos'
        }
      }
    
  ]


  constructor() {}

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
