import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
  ViewChildren,
  QueryList,
  PLATFORM_ID,
  signal,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import {
  CommonModule,
  isPlatformBrowser,
  NgOptimizedImage,
} from '@angular/common';
import { Title } from '@angular/platform-browser';
import { inject } from '@angular/core';
import { RouterLink } from '@angular/router';

//* Services
import { CanonicalLinkService } from '@core/services/canonical-link.service';
import { MetaTagService } from '@core/services/meta-tag.service';
import { RazonesService } from '@core/services/razones.service';
import { ProductCarouselService } from '@feature/components/carousel-productos/services/product-carousel.service';
import { MetodosVentaService } from '@core/services/metodos-venta.service';

//*interfaces
import { razonesModel } from '@core/interfaces/razones.model';
import { negocioModel } from '@core/interfaces/negocios.model';


//* Components
import { ProductosFilterComponent } from '@feature/components/productos-filter/productos-filter.component';
import AdvantageListComponent from '@feature/components/advantage-list/advantage-list.component';
import { SalesMethodComponent } from '@feature/components/sales-method/sales-method.component';
import { AppRecargasComponent } from '@feature/components/app-recargas/app-recargas.component';
import { CarouselApp } from '@feature/components/app-recargas/interface/app.interface';
import { ProductCarousel } from '@core/interfaces/product-carousel.interface';
import { ProductCarouselComponent } from '@feature/components/carousel-productos/product-carousel.component';

import { metaTagModel } from '@core/interfaces/meta-tag.model';
import { SwiperOptions } from 'swiper/types';
import { RegisterComponent } from '@feature/components/register/register.component';
import { AdvantageList } from '@core/interfaces/advantage-list.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,

  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterLink,
    ProductCarouselComponent,
    ProductosFilterComponent,
    SalesMethodComponent,
    AppRecargasComponent,
    AppRecargasComponent,
    RegisterComponent,
    AdvantageListComponent,
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('swiperHero') swiperHero!: ElementRef;
  @ViewChild('menuAbout') menuAbout?: ElementRef;
  @ViewChildren('counter') countersElements!: QueryList<ElementRef>;

  //? META TAG
  // tag: metaTagModel = {
  //   title:
  //     'Recarga5g.com | Vende tiempo aire, pago de servicios y pines hasta un 7.5% de comisión',
  //   description:
  //     'Vende recargar a cualquier compañía telefónica hasta 7.5% de comisión fija, paga servicios de todos tus clientes y pines electrónicos. Telcel, Unefón, Izzi, CFE, Google Play, Spotify y muchos más!',
  //   keywords:
  //     'Venta de recargas, recargas electrónicas, recargas telefónicas, recargas telcel, recargas electronicas telcel, venta de recargas telcel, recargas electronicas 7.5% comision, comision 7.5, comision 7.5 por la venta de recargas, vender recargas, tiempo aire telcel, Telcel',
  //   url: 'recarga5g.com',
  //   type: 'website',
  //   card: 'summary_large_image',
  //   creator: '@recargascelular',
  //   image: 'https://recarga5g.com/Venta-recargas.png',
  // };

  public allProducts = signal<ProductCarousel[]>([]);

  swiperConfig: SwiperOptions = {
    direction: 'horizontal',
    effect: 'fade',
    slidesPerView: 1,
    navigation: true,
    spaceBetween: 30,
    loop: true,
    grabCursor: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 500,
  };

  showModal = signal<boolean>(false);
  whySellList = signal<razonesModel[]>([]);
  negocios = signal<negocioModel[]>([]);
  // metodosVenta = signal<MetodosVentaModel[]>([]);

  slideHero = signal<any[]>([
    {
      id: 1,
      img: {
        src: './assets/img/banner-home_web.webp',
        alt: 'venta de tarjetas electrónicas para negocios',
      },
    },

    {
      id: 2,
      img: {
        src: './assets/img/banner-home-pines_web.webp',
        alt: 'venta de tarjetas electrónicas para negocios',
      },
    },

    {
      id: 3,
      img: {
        src: './assets/img/banner-home__productos.webp',
        alt: 'Nuestro productos recargas, pago de servicios',
      },
    },
  ]);

  records = [
    {
      img: {
        src: '/assets',
        alt: '',
      },
      label: 'Clientes Felices',
      count: 4000,
    },

    {
      img: {
        src: '',
        alt: '',
      },
      label: 'Años en el mercado',
      count: 20,
    },

    {
      img: {
        src: '',
        alt: '',
      },
      label: 'Puntos de venta',
      count: 1800,
    },

    {
      img: {
        src: '',
        alt: '',
      },
      label: 'Compañias de Servicios',
      count: 200,
    },
  ];

  listBusiness = [

    {
      id: 1,
      iconClassName: 'store',
      iconClassColor: 'text-fuchsia-600',
      typeBusiness: 'Tienda de Abarrotes'
    },

    {
      id: 2,
      iconClassName: 'liquor',
      iconClassColor: 'text-rose-600',
      typeBusiness: 'Vinaterias'
    },

    {
      id: 3,
      iconClassName: 'handyman',
      iconClassColor: 'text-blue-600',
      typeBusiness: 'Ferreterias'
    },

    {
      id: 4,
      iconClassName: 'restaurant',
      iconClassColor: 'text-emerald-700',
      typeBusiness: 'Restaurantes'
    },

    {
      id: 5,
      iconClassName: 'local_cafe',
      iconClassColor: 'text-orange-700',
      typeBusiness: 'Cyber Cafes'
    },

    {
      id: 6,
      iconClassName: 'medication_liquid',
      iconClassColor: 'text-cyan-700',
      typeBusiness: 'Farmacias'
    },

    {
      id: 7,
      iconClassName: 'breakfast_dining',
      iconClassColor: 'text-amber-600',
      typeBusiness: 'Panaderias'
    },

    {
      id: 8,
      iconClassName: 'snowshoeing',
      iconClassColor: 'text-red-600',
      typeBusiness: 'Zapaterias'
    },

    {
      id: 9,
      iconClassName: 'description',
      iconClassColor: 'text-violet-600',
      typeBusiness: 'Papelerias'
    },

    {
      id: 10,
      iconClassName: 'car_repair',
      iconClassColor: 'text-rose-600',
      typeBusiness: 'Refaccionarias'
    },


    {
      id: 11,
      iconClassName: 'checkroom',
      iconClassColor: 'text-cyuan-600',
      typeBusiness: 'Tiendas de ropa'
    },


    {
      id: 12,
      iconClassName: 'storefront',
      iconClassColor: 'text-green-700',
      typeBusiness: 'Fruteria'
    }


   
  ]

  // counters = [
  //   { label: 'Años en el mercado', value: 20 },
  //   { label: 'Clientes felices', value: 40000 },
  //   { label: 'Productos y compañías', value: 200 },
  //   { label: 'Puntos de venta', value: 300 }
  // ];

  counterItems = signal([
    { label: 'Años en el mercado', value: 20 },
    { label: 'Clientes felices', value: 4000 },
    { label: 'Productos y compañías', value: 200 },
    { label: 'Puntos de venta', value: 300 },
  ]);

  // Signal para almacenar los valores de los contadores actuales
  initialValues = signal([0, 0, 0, 0]); // Valores iniciales de los contadores

  private readonly title = inject(Title);
  private readonly platform_id = inject(PLATFORM_ID);
  private readonly _productCarouselService = inject(ProductCarouselService);
  private readonly _razonesService = inject(RazonesService);
  private readonly _metodosService = inject(MetodosVentaService);
  private readonly _metaTagService = inject(MetaTagService);
  private readonly _linkService = inject(CanonicalLinkService);

  readonly listApp = [
    {
      id: 1,
      title: 'Registrate',
      label: 'Llena un formulario con tus datos y espera nuestro correo con tus datos de acceso',
    },

    {
      id: 2,
      title: 'Deposita',
      label: 'Deposita desde una inversión minima de $100, a una de las cuentas bancarias autorizadas',
    },

    {
      id: 3,
      title: 'Notifica',
      label: 'Notifica tu comprobante de pago en el portal, y obten el monto correspondiente en saldo',
    },

    {
      id: 4,
      title: 'Recibe',
      label: 'Obten un porcentaje de comisión por cada venta que realices',
    },

    {
      id: 5,
      title: 'Recupera',
      label:
        '¡Listo! Así de fácil podrás recuperar tu inversión + una comisión extra a tu negocio, mientras ofrecer venta de recargas',
    },
  ];

  carosuelAppImages = signal<CarouselApp[]>([
    {
      id: 1,
      img: {
        lightUrl: '/assets/img/companies/recargas-app_light.webp',
        darkUrl: '/assets/img/companies/recargas-app_dark.webp',
        alt: 'App para venta de recargas',
      },
    },

    {
      id: 2,
      img: {
        lightUrl: '/assets/img/companies/servicios-app_light.webp',
        darkUrl: '/assets/img/companies/servicios-app_dark.webp',
        alt: 'App para pago de servicios',
      },
    },

    {
      id: 3,
      img: {
        lightUrl: '/assets/img/companies/pines-app_light.webp',
        darkUrl: '/assets/img/companies/pines-app_dark.webp',
        alt: 'App para venta de pines electrónicos',
      },
    },
  ]);

  public listBenefit: AdvantageList[] = [

    {
      id: 1,
      label: 'Mayor flujo de clientes',
    },

    {
      id: 2,
      label: 'Comisiones ajustadas a tu negocio'
    },

    {
      id: 3,
      label: 'Variedad de compañías de recargas y servicios'
    },

    {
     id: 4,
      label: 'Recupera tu inversión + comisión'
    },

    {
      id: 5,
      label: 'Soporte personalizado'
    },
    {
      id: 6,
      label: 'Diferenciador a tu negocio'
    },
    {
      id: 6,
      label: 'Adatado para cualquier tipo de negocio'
    },
    {
      id: 7,
      label: 'Aplicación de compras inmediatas'
    }
  ];



 public  listInversion = [
    {
      id: 1,
      label: 'Sin pagos forzosos ni anualidades.',
    },

    {
      id: 2,
      label: 'Deposita como y cuando quieras.',
    },

    {
      id: 3,
      label: 'Aplicación de depósitos automático.',
    },

    {
      id: 4,
      label: 'Soporte continuo y personalizado.',
    },

    {
      id: 5,
      label: 'Excelentes comisiones.',
    },

    {
      id: 6,
      label: 'Diferente metodos de venta',
    },
  ];

  ventajas = signal<Ventajas[]>([
    {
      id: 1,
      iconClass: 'how_to_reg',
      title: 'Registro Simple y Sin Complicaciones',
      description: 'Crea tu cuenta en minutos a través de nuestra plataforma',
    },

    {
      id: 2,
      iconClass: 'devices',
      title: 'Variedad de Operadores y Servicios Disponibles',
      description:
        'Accede a múltiples opciones de recarga desde una sola plataforma, incluyendo servicios, tarjetas de regalo y más.',
    },

    {
      id: 3,
      iconClass: 'devices',
      title: 'Variedad de Operadores y Servicios Disponibles',
      description:
        'Accede a múltiples opciones de recarga desde una sola plataforma, incluyendo servicios, tarjetas de regalo y más.',
    },

    {
      id: 4,
      iconClass: 'devices',
      title: 'Variedad de Operadores y Servicios Disponibles',
      description:
        'Accede a múltiples opciones de recarga desde una sola plataforma, incluyendo servicios, tarjetas de regalo y más.',
    },
  ]);

  ngOnInit(): void {
    this.title.setTitle(
      'Recarga5g.com | Vende tiempo aire, pago de servicios y pines hasta un 7.5% de comisión'
    );

    this.allProducts.set(this._productCarouselService.getProductCarousel());
    this.whySellList.set(this._razonesService.getRazones());

    this._metaTagService.updateMetaTag({
      title: 'Inicio |  Vende tiempo aire, pago de servicios y pines hasta un 7.5% de comisión',
      description: 'Plataforma mas segura y confiable',
      keywords: 'recarga5g, recarga5g.com, recargas electronicas 7.5% comision, Recargas electrónicas, comision 7.5 por la venta de recargas, sistema de recargas, Pago de servicios, Pines electrónicos, Sistema de recargas, vender recargas multiregion, Plataforma para vender recargas, Venta de recargas, Como vender recargas, App para recargas',
      url: 'https://recarga5g.com/',
      typeContent: 'website'
    });
  }

  ngAfterViewInit(): void {
    this.swiperInit();
    this.counterAnimation();
  }

  swiperInit(): void {
    if (isPlatformBrowser(this.platform_id)) {
      const swiper = this.swiperHero.nativeElement;
      Object.assign(swiper, this.swiperConfig);
      swiper.initialize(); // Asegura que Swiper se inicialice con la configuración
    }
  }

  //* FUNCTION FOR OPEN MENU NAV
  aboutAnimate() {
    const menu = this.menuAbout?.nativeElement;
    menu.classList.toggle('menuActive');
  }

  //* FUNCTIONS FOR COUNTER RECORD SECTION
  counterAnimation(): void {
    if (isPlatformBrowser(this.platform_id)) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log('Elemento visible');

              let targetValue = +entry.target.getAttribute('data-number')!;
              let index = this.countersElements
                .toArray()
                .findIndex((el) => el.nativeElement === entry.target);

              // Buscamos el índice del elemento observado
              this.startCounting(index, targetValue);
              observer.unobserve(entry.target); // Deja de observar el elemento
            }
          });
        },
        {
          threshold: 0.5,
          rootMargin: '0px 0px -30% 0px',
        }
      );

      // Inicia la observación de cada contador
      this.countersElements?.forEach((element) => {
        observer.observe(element.nativeElement);
      });
    }
  }

  // Función que maneja el incremento gradual de los números
  startCounting(index: number, maxValue: number): void {
    let currentValue = this.initialValues()[index];
    if (currentValue < maxValue) {
      this.initialValues.update((vals) => {
        const newVals = [...vals]; // Copia los valores actuales
        newVals[index] += Math.ceil(maxValue / 100); // Incrementa el valor
        return newVals; // Retorna los nuevos valores
      });
      // this.initialValues.mutate((vals) => (vals[index] += Math.ceil(maxValue / 100)));
      setTimeout(() => {
        this.startCounting(index, maxValue);
      }, 20); // Controla el tiempo de actualización
    }
  }
}

interface Ventajas {
  id: number;
  iconClass: string;
  title: string;
  description: string;
}
