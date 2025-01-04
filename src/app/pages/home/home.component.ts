import {
  Component,
  ElementRef,
  OnInit,
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
import { MetaTagService } from 'src/app/services/meta-tag.service';
import { RazonesService } from 'src/app/services/razones.service';
import { ProductCarouselService } from '@feature/components/product-carousel/services/product-carousel.service';

//* Components
import { ProductsFilterComponent } from '@feature/components/products-filter/products-filter.component';
import  AdvantageListComponent   from '@feature/components/advantage-list/advantage-list.component';
import { SalesMethodComponent } from '@feature/components/sales-method/sales-method.component';
import { AppRecargasComponent } from '@feature/components/app-recargas/app-recargas.component';
import { CarouselApp } from '@feature/components/app-recargas/interface/app.interface';
import { ProductCarouselComponent } from '@feature/components/product-carousel/product-carousel.component';
import { BentoItemComponent } from '@feature/components/bento-item/bento-item.component';
//* Interfaces
import {ProductCarousel} from 'src/app/interfaces/product-carousel.interface';


// import { SwiperOptions } from 'swiper/types';
import { RegisterStepsComponent } from '@feature/components/register-steps/register-steps.component';
import { AdvantageList } from 'src/app/interfaces/advantage-list.interface';

import { BenefitsListModel } from 'src/app/interfaces/benefits-list.interface';
import { HeroCarousel } from '@interfaces/hero-carousel.interface';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    imports: [
    CommonModule,
    NgOptimizedImage,
    RouterLink,
    ProductCarouselComponent,
    ProductsFilterComponent,
    SalesMethodComponent,
    AppRecargasComponent,
    AppRecargasComponent,
    AdvantageListComponent,
    RegisterStepsComponent,
    // BentoItemComponent
],

    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export default class HomeComponent implements OnInit, AfterViewInit {

 @ViewChildren('counter') countersElements!: QueryList<ElementRef>;
  // countersElements = viewChildren< QueryList<ElementRef> >('counter');


  private readonly title = inject(Title);
  private readonly _metaTagService = inject(MetaTagService);
  private readonly platform_id = inject(PLATFORM_ID);
  private readonly _productCarouselService = inject(ProductCarouselService);
  private readonly _razonesService = inject(RazonesService);

  public allProducts = signal<ProductCarousel[]>([]);

  showModal = signal<boolean>(false);
  whySellList = signal<BenefitsListModel[]>([]);

  slideHero = signal<HeroCarousel[]>([
      {
        id: 1,
        label: '',
        title: '',
        textOne: '',
        textlink: '',
        routerLink: '',
        imgHero: {
          src: '',
          alt: ''
        }
      }
  ])
 
  listBusiness = [
    {
      id: 1,
      iconClassName: 'store',
      iconClassColor: 'text-fuchsia-600',
      typeBusiness: 'Tienda de Abarrotes',
    },

    {
      id: 2,
      iconClassName: 'liquor',
      iconClassColor: 'text-rose-600',
      typeBusiness: 'Vinaterias',
    },

    {
      id: 3,
      iconClassName: 'handyman',
      iconClassColor: 'text-blue-600',
      typeBusiness: 'Ferreterias',
    },

    {
      id: 4,
      iconClassName: 'restaurant',
      iconClassColor: 'text-emerald-700',
      typeBusiness: 'Restaurantes',
    },

    {
      id: 5,
      iconClassName: 'local_cafe',
      iconClassColor: 'text-orange-700',
      typeBusiness: 'Cyber Cafes',
    },

    {
      id: 6,
      iconClassName: 'medication_liquid',
      iconClassColor: 'text-cyan-700',
      typeBusiness: 'Farmacias',
    },

    {
      id: 7,
      iconClassName: 'breakfast_dining',
      iconClassColor: 'text-amber-600',
      typeBusiness: 'Panaderias',
    },

    {
      id: 8,
      iconClassName: 'snowshoeing',
      iconClassColor: 'text-red-600',
      typeBusiness: 'Zapaterias',
    },

    {
      id: 9,
      iconClassName: 'description',
      iconClassColor: 'text-violet-600',
      typeBusiness: 'Papelerias',
    },

    {
      id: 10,
      iconClassName: 'car_repair',
      iconClassColor: 'text-rose-600',
      typeBusiness: 'Refaccionarias',
    },

    {
      id: 11,
      iconClassName: 'checkroom',
      iconClassColor: 'text-cyuan-600',
      typeBusiness: 'Tiendas de ropa',
    },

    {
      id: 12,
      iconClassName: 'storefront',
      iconClassColor: 'text-green-700',
      typeBusiness: 'Fruteria',
    },
  ];

  counterItems = signal([
    { label: 'Años en el mercado', value: 20 },
    { label: 'Clientes felices', value: 4000 },
    { label: 'Productos y compañías', value: 200 },
    { label: 'Puntos de venta', value: 300 },
  ]);

  initialValues = signal([0, 0, 0, 0]); // Valores iniciales de los contadores

  readonly listApp = [
    {
      id: 1,
      title: 'Registrate',
      label:
        'Llena un formulario con tus datos y espera nuestro correo con tus datos de acceso',
    },

    {
      id: 2,
      title: 'Deposita',
      label:
        'Deposita desde una inversión minima de $100, a una de las cuentas bancarias autorizadas',
    },

    {
      id: 3,
      title: 'Notifica',
      label:
        'Notifica tu comprobante de pago en el portal, y obten el monto correspondiente en saldo',
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
      label: 'Comisiones ajustadas a tu negocio',
    },

    {
      id: 3,
      label: 'Variedad de compañías de recargas y servicios',
    },

    {
      id: 4,
      label: 'Recupera tu inversión + comisión',
    },

    {
      id: 5,
      label: 'Soporte personalizado',
    },
    {
      id: 6,
      label: 'Diferenciador a tu negocio',
    },
    {
      id: 6,
      label: 'Adatado para cualquier tipo de negocio',
    },
    {
      id: 7,
      label: 'Aplicación de compras inmediatas',
    },
  ];

  public listInversion = [
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

  advantageList = signal<Ventajas[]>([
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
      iconClass: 'point_of_sale',
      title: 'retorno de inversión inmediata',
      description:
        'Con una inversión minima desde $100 podras vender recargas hasta tarjeta de regalo, obten tu inversión + un porcentaje de comisión extra',
    },

    {
      id: 4,
      iconClass: 'support_agent',
      title: 'soporte personalizado',
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
      title:
        'recarga5g.com | Vende recargas electrónicas, pago de servicios y pines hasta un 7.5% de comisión',
      description:
        'Descubre Recarga5G: gana hasta un 7.5% de comisión vendiendo recargas electrónicas, pago de servicios y pines. Fácil, rápido y rentable para tu negocio',
      keywords:
        'recarga5g, recarga5g.com, recargas electronicas 7.5% comision, recargas electronicas, comision 7.5 por la venta de recargas, sistema de recargas, pago de servicios, sistema de recargas, vender recargas multiregion, plataforma para vender recargas, venta de recargas, como vender recargas, app para recargas',
      url: 'https://recarga5g.com/',
      typeContent: 'website',
    });
  }

  ngAfterViewInit(): void {
    this.counterAnimation();
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
