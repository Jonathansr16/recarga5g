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
  viewChild,
  Renderer2,
} from '@angular/core';
import {
  CommonModule,
  isPlatformBrowser,
  NgOptimizedImage,
} from '@angular/common';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { inject } from '@angular/core';
import { RouterLink } from '@angular/router';

//* Services
import { MetaTagService } from 'src/app/services/meta-tag.service';
import { ProductCarouselService } from '@feature/components/product-carousel/services/product-carousel.service';

//* Components
import { ProductsFilterComponent } from '@feature/components/products-filter/products-filter.component';
import AdvantageListComponent from '@feature/components/advantage-list/advantage-list.component';
import { SalesMethodComponent } from '@feature/components/sales-method/sales-method.component';
import { AppRecargasComponent } from '@feature/components/app-recargas/app-recargas.component';
import { CarouselApp } from '@feature/components/app-recargas/interface/app.interface';
import { ProductCarouselComponent } from '@feature/components/product-carousel/product-carousel.component';
//* Interfaces
import { ProductCarousel } from 'src/app/interfaces/product-carousel.interface';

// import { SwiperOptions } from 'swiper/types';
import { RegisterStepsComponent } from '@feature/components/register-steps/register-steps.component';
import { AdvantageList } from 'src/app/interfaces/advantage-list.interface';


import { BenefitsListModel } from 'src/app/interfaces/benefits-list.interface';
import { ReasonForSellingService } from '@services/razones.service';

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

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class HomeComponent implements OnInit, AfterViewInit {
  @ViewChildren('counter') countersElements!: QueryList<ElementRef>;
  typerWriterElement = viewChild<ElementRef>('typeWriter')
  // countersElements = viewChildren< QueryList<ElementRef> >('counter');

  private readonly title = inject(Title);
  private readonly _metaTagService = inject(MetaTagService);
  private readonly platform_id = inject(PLATFORM_ID);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly renderer2 = inject(Renderer2);
  private readonly _productCarouselService = inject(ProductCarouselService);
  private readonly reasonForSellingService = inject(ReasonForSellingService);

  svgRef = viewChild.required<ElementRef>('svgContainer');

  allProducts = signal<ProductCarousel[]>([]);
  recargas = signal<ProductCarousel[]>([]);
  servicios = signal<ProductCarousel[]>([]);
  pines = signal<ProductCarousel[]>([]);
  showModal = signal<boolean>(false);

  //* Array of object simple
  reasonForSelling: BenefitsListModel[] = [];

  businessList: BusinessType[] = [
    {
      id: 1,
      typeBusiness: 'Tienda de Abarrotes',
      svgCode: this.getSafeSvg(`
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="size-7 text-fuchsia-600" viewBox="0 0 512 512">
          <path 
          stroke="currentColor" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="32" 
          d="M448 448V240M64 240v208M382.47 48H129.53c-21.79 0-41.47 12-49.93 30.46L36.3 173c-14.58 31.81 9.63 67.85 47.19 69h2c31.4 0 56.85-25.18 56.85-52.23 0 27 25.46 52.23 56.86 52.23s56.8-23.38 56.8-52.23c0 27 25.45 52.23 56.85 52.23s56.86-23.38 56.86-52.23c0 28.85 25.45 52.23 56.85 52.23h1.95c37.56-1.17 61.77-37.21 47.19-69l-43.3-94.54C423.94 60 404.26 48 382.47 48zM32 464h448M136 288h80a24 24 0 0124 24v88h0-128 0v-88a24 24 0 0124-24zM288 464V312a24 24 0 0124-24h64a24 24 0 0124 24v152"/>
        </svg>`),
    },

    {
      id: 2,
      typeBusiness: 'Vinaterias',
      svgCode: this.getSafeSvg(`
        <svg xmlns="http://www.w3.org/2000/svg" class="size-7 text-red-700" viewBox="0 0 512 512">
        // <path d="M398.57 80H113.43v16S87.51 272 256 272 398.57 96 398.57 96zM256 272v160" 
        // fill="none" stroke="currentColor" 
        // stroke-linejoin="round" 
        // stroke-width="32"/>
        // <path fill="none" 
        // stroke="currentColor" 
        // stroke-linecap="round" 
        // stroke-linejoin="round" 
        // stroke-width="32" 
        // d="M352 432H160"/>
        // <path fill="none" 
        // stroke="currentColor" 
        // stroke-linejoin="round" 
        // stroke-width="32" 
        // d="M112 160h288"/>
        // </svg>
        `),
    },

    {
      id: 3,
      typeBusiness: 'Ferreterias',
      svgCode: this.getSafeSvg(`
          <svg xmlns="http://www.w3.org/2000/svg" class="size-7 text-blue-600" viewBox="0 0 512 512">
          // <path d="M277.42 247a24.68 24.68 0 0 0-4.08-5.47L255 223.44a21.63 21.63 0 0 0-6.56-4.57 20.93 20.93 0 0 0-23.28 4.27c-6.36 6.26-18 17.68-39 38.43C146 301.3 71.43 367.89 37.71 396.29a16 16 0 0 0-1.09 23.54l39 39.43a16.13 16.13 0 0 0 23.67-.89c29.24-34.37 96.3-109 136-148.23 20.39-20.06 31.82-31.58 38.29-37.94a21.76 21.76 0 0 0 3.84-25.2zm201.01-46-34.31-34a5.44 5.44 0 0 0-4-1.59 5.59 5.59 0 0 0-4 1.59h0a11.41 11.41 0 0 1-9.55 3.27c-4.48-.49-9.25-1.88-12.33-4.86-7-6.86 1.09-20.36-5.07-29a242.88 242.88 0 0 0-23.08-26.72c-7.06-7-34.81-33.47-81.55-52.53a123.79 123.79 0 0 0-47-9.24c-26.35 0-46.61 11.76-54 18.51-5.88 5.32-12 13.77-12 13.77a91.29 91.29 0 0 1 10.81-3.2 79.53 79.53 0 0 1 23.28-1.49C241.19 76.8 259.94 84.1 270 92c16.21 13 23.18 30.39 24.27 52.83.8 16.69-15.23 37.76-30.44 54.94a7.85 7.85 0 0 0 .4 10.83l21.24 21.23a8 8 0 0 0 11.14.1c13.93-13.51 31.09-28.47 40.82-34.46s17.58-7.68 21.35-8.09a35.71 35.71 0 0 1 21.3 4.62 13.65 13.65 0 0 1 3.08 2.38c6.46 6.56 6.07 17.28-.5 23.74l-2 1.89a5.5 5.5 0 0 0 0 7.84l34.31 34a5.5 5.5 0 0 0 4 1.58 5.65 5.65 0 0 0 4-1.58L478.43 209a5.82 5.82 0 0 0 0-8z" 
          // fill="none" 
          // stroke="currentColor" 
          // stroke-linecap="round" 
          // stroke-linejoin="round" 
          // stroke-width="32"/>
          // </svg>
          `),
    },

    {
      id: 4,
      typeBusiness: 'Restaurantes',
      svgCode: this.getSafeSvg(`
          <svg xmlns="http://www.w3.org/2000/svg" class="size-7 text-emerald-700" viewBox="0 0 512 512">
           <path d="M322 416c0 35.35-20.65 64-56 64H134c-35.35 0-56-28.65-56-64M336 336c17.67 0 32 17.91 32 40h0c0 22.09-14.33 40-32 40H64c-17.67 0-32-17.91-32-40h0c0-22.09 14.33-40 32-40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/>
           <path d="M344 336H179.31a8 8 0 00-5.65 2.34l-26.83 26.83a4 4 0 01-5.66 0l-26.83-26.83a8 8 0 00-5.65-2.34H56a24 24 0 01-24-24h0a24 24 0 0124-24h288a24 24 0 0124 24h0a24 24 0 01-24 24zM64 276v-.22c0-55 45-83.78 100-83.78h72c55 0 100 29 100 84v-.22M241 112l7.44 63.97" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/>
           <path d="M256 480h139.31a32 32 0 0031.91-29.61L463 112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/>
           <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 112l16-64 47-16"/>
           <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M224 112h256"/>
          </svg>
          `),
    },

    {
      id: 5,
      typeBusiness: 'Cyber Cafes',
      svgCode: this.getSafeSvg(`
          <svg xmlns="http://www.w3.org/2000/svg" class="size-7 text-orange-700" viewBox="0 0 512 512">
           <path d="M368 80h64a16 16 0 0116 16v34a46 46 0 01-46 46h-34M96 80h272v192a80 80 0 01-80 80H176a80 80 0 01-80-80V80h0zM64 416h336" 
             fill="none" 
             stroke="currentColor" 
             stroke-linecap="round" 
             stroke-linejoin="round" 
             stroke-width="32"/>
           </svg>`),
    },

    {
      id: 6,
      typeBusiness: 'Farmacias',
      svgCode: this.getSafeSvg(`
          <svg xmlns="http://www.w3.org/2000/svg" class="size-7 text-cyan-700" viewBox="0 0 512 512">
           <path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0 0 18 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
           <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 256h112l48-96 48 160 48-96 32 64h128"/>
          </svg>
          `),
    },

    {
      id: 7,
      typeBusiness: 'Panaderias',
      svgCode: this.getSafeSvg(`
        <svg class="size-7 text-amber-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        // <path fill="currentColor" d="M240 80a40 40 0 0 0-40-40H48a40 40 0 0 0-16 76.65V200a16 16 0 0 0 16 16h152a16 16 0 0 0 16-16v-83.35A40.06 40.06 0 0 0 240 80M48 120a8 8 0 0 0 0-16a24 24 0 0 1 0-48h96a24 24 0 0 1 0 48a8 8 0 0 0 0 16v80H48Zm152-16a8 8 0 0 0 0 16v80h-40v-83.35A40 40 0 0 0 176 56h24a24 24 0 0 1 0 48"/>
        // </svg>
        `),
    },

    {
      id: 8,
      typeBusiness: 'Zapaterias',
      svgCode: this.getSafeSvg(`
        <svg class="size-7 text-red-600" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor">
          <path d="M20.94 20c-.24-.44-.394-1.227-.165-2.017.297-1.028.442-1.321-.492-1.868l-1.389-.814c-.878-.515-1.062-.363-1.704.414-.783.949-2.18 2.04-4.19 2.513M2 7V5.2C2 4.207 2.173 4 3 4h5c.908 0 1 .555 1 1.5S8.908 7 8 7zm0 0v5"/>
          <path d="M2 12h1c2.454 0 3.68 0 4.736.528S9.528 14.038 11 16c2.975 3.967 6.473 4 11 4"/>
          <path d="m2 12 1.47 7.837a.2.2 0 0 0 .196.163H4.3c.11 0 .2-.086.203-.196C4.53 18.757 4.77 13.838 7 12.5"/>
          </g>
        </svg>
        `),
    },

    {
      id: 9,
      typeBusiness: 'Heladerías',
      svgCode: this.getSafeSvg(`
        <svg xmlns="http://www.w3.org/2000/svg" class="size-7 text-fuchsia-700" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m352 256-96 224-62-145"/><path d="M299.42 223.48C291.74 239.75 275.18 252 256 252c-13.1 0-27-5-33.63-9.76C216.27 237.87 208 240 208 250v62a24.07 24.07 0 0 1-24 24h0a24.07 24.07 0 0 1-24-24v-56h-2c-35.35 0-62-28.65-62-64a64 64 0 0 1 64-64h8v-8a88 88 0 0 1 176 0v8h8a64 64 0 0 1 0 128c-21.78 0-42-13-52.59-32.51z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
        // </svg>
        `),
    },

    {
      id: 10,
      typeBusiness: 'Refaccionarias',
      svgCode: this.getSafeSvg(`
        <svg xmlns="http://www.w3.org/2000/svg" class="size-7 text-sky-700" viewBox="0 0 512 512"><path d="m80 224 37.78-88.15C123.93 121.5 139.6 112 157.11 112h197.78c17.51 0 33.18 9.5 39.33 23.85L432 224m-352 0h352v144H80zm32 144v32H80v-32m352 0v32h-32v-32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="144" cy="288" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="368" cy="288" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
        `),
    },

    {
      id: 11,
      typeBusiness: 'Tiendas de ropa',
      svgCode: this.getSafeSvg(`
        <svg xmlns="http://www.w3.org/2000/svg" class="size-7 text-indigo-700" viewBox="0 0 512 512"><path d="M314.56 48s-22.78 8-58.56 8-58.56-8-58.56-8a31.94 31.94 0 0 0-10.57 1.8L32 104l16.63 88 48.88 5.52a24 24 0 0 1 21.29 24.58L112 464h288l-6.8-241.9a24 24 0 0 1 21.29-24.58l48.88-5.52L480 104 325.13 49.8a31.94 31.94 0 0 0-10.57-1.8zm18.75 4.66a80 80 0 0 1-154.62 0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
        `),
    },

    {
      id: 12,
      typeBusiness: 'Fruteria',
      svgCode: this.getSafeSvg(`
<svg xmlns="http://www.w3.org/2000/svg" width="1.75rem" height="1.75rem" class="text-purple-700"><path fill="currentColor" d="M14 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-7-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-2.5-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-5 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m5 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-5 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m2.5 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m2.4-15.8L13.6 1c-2.2 1-2.4 4.6-2.4 5h1.5c.1-.8.4-3.3 1.7-3.8"/></svg>
        `),
    },
  ];

  testimonialListOne: Testimonial[] = [
    {
      fullName: 'Juan Martínez',
      comment: '¡Excelente plataforma! Las comisiones son muy buenas, y el proceso de venta de recargas es súper fácil. ¡Totalmente recomendado',
      acronym: 'Juan M'
    },

    {
      fullName: 'Farmacia margaritas',
      comment: 'Llevo mas de 2 años, con mi propia red de clientes, la atención al cliente muy amable',
      acronym: 'FM'
    },

    {
      fullName: 'Papelería la gomita',
      comment: 'Muy contento con el servicio. La plataforma es intuitiva, y el soporte al cliente siempre está disponible para ayudar.',
      acronym: 'PG'
    },

    {
      fullName: 'Ferreteria Joselin',
      comment: 'Las mejores comisiones del mercado. Además, la variedad de compañías que manejan es impresionante. ¡Mis clientes están felices!',
      acronym: 'FJ'
    },

    
  ];

  testimonialListTwo: Testimonial[] = [
    {
      fullName: 'Anahi Ortega',
      comment: 'Tuve un problema para ubicar a mi distribuidor, gracias a Recargas Electrónicas puede ubicarlo, la atención siempre fue amable, 100% recomendado',
      acronym: 'Anahi O'
    },

    {
      fullName: 'Valeria Pineda',
      comment: 'Me gusta llevo algunos año y todo bien',
      acronym: 'Valeria P'
    },

    {
      fullName: 'Cyber Flamingo',
      comment: 'Tienen una gran variedad para el pago de servicios',
      acronym: 'Cyber F'
    },

    {
      fullName: 'Octavio Ocapo',
      comment: 'La gestión de mis sucursales ha sido facil con esta plataforma',
      acronym: 'Octavio O'
    },
  ];

  testimonialListThree: Testimonial[] = [
    {
      fullName: 'Novedades el por venir',
      comment: 'La aplicación es facil de usar, llevo 1 año y todo ha marchado muy bien, lo conoci porque un amigo me lo recomendo',
      acronym: 'Novedades E'
    },

    {
      fullName: 'Abarrotes Super Diego',
      comment: 'Estuve unos años sin poder usar la plataforma por razones personales, gracias a atención a clientes pude recuperar mi cuenta',
      acronym: 'Abarrotes SD'
    },

    {
      fullName: 'Papelería Los Patitos',
      comment: 'Me ha gustado mucho la plataforma y la atención a clientes',
      acronym: 'Papelería L'
    },

    {
      fullName: 'Marcos Herrera',
      comment: 'Ahora soy el punto de referencia en mi colonia para recargas y pagos de servicios. La plataforma es estable, las transacciones son seguras',
      acronym: 'Marcos H'
    },
  ]

  counterItems = signal([
    { label: 'Años en el mercado', value: 20 },
    { label: 'Clientes felices', value: 4000 },
    { label: 'Productos y compañías', value: 200 },
    { label: 'Puntos de venta', value: 300 },
  ]);

  initialValues = signal([0, 0, 0, 0]); // Valores iniciales de los contadores

  listApp = [
    {
      id: 1,
      title: 'Regístrate',
      label:
        'Llena un formulario con tus datos y espera nuestro correo con tus datos de acceso.',
    },

    {
      id: 2,
      title: 'Deposita',
      label:
        'Deposita desde una inversión mínima de $100, a una de las cuentas bancarias autorizadas.',
    },

    {
      id: 3,
      title: 'Notifica',
      label:
        'Notifica tu comprobante de pago en el portal, y obtén el monto correspondiente en saldo.',
    },

    {
      id: 4,
      title: 'Recibe',
      label: 'Obtén un porcentaje de comisión por cada venta que realices.',
    },

    // {
    //   id: 5,
    //   title: 'Recupera',
    //   label:
    //     '¡Listo! Así de fácil podrás recuperar tu inversión + una comisión extra a tu negocio, mientras ofrecer venta de recargas',
    // },
  ];

  carosuelAppImages : CarouselApp[] =[
    {
      id: 1,
      img: {
        src: '/assets/img/companies/recargas-app_light.webp',
        alt: 'App para venta de recargas',
      },
    },

    {
      id: 2,
      img: {
        src: '/assets/img/companies/servicios-app_light.webp',
        alt: 'App para pago de servicios',
      },
    },

    {
      id: 3,
      img: {
        src: '/assets/img/companies/pines-app_light.webp',
        alt: 'App para venta de pines electrónicos',
      },
    },
  ];

  public listBenefit: AdvantageList[] = [
    {
      id: 1,
      label: '✔ Comisiones ajustadas a tu negocio',
    },

    {
      id: 2,
      label: '✔ Variedad de compañías de recargas y servicios',
    },

    {
      id: 3,
      label: '✔ Recupera tu inversión + comisión',
    },

    {
      id: 4,
      label: '✔ Soporte personalizado',
    },

    {
      id: 5,
      label: '✔ Adaptado para cualquier tipo de negocio',
    },
    {
      id: 6,
      label: '✔ Aplicación de compras inmediatas',
    },
  ];

  listInversion = [
    {
      id: 1,
      label: '✔ Sin pagos forzosos ni anualidades.',
    },

    {
      id: 2,
      label: '✔ Deposita como y cuando quieras.',
    },

    {
      id: 3,
      label: '✔ Aplicación de depósitos automático.',
    },

    {
      id: 4,
      label: '✔ Soporte continuo y personalizado.',
    },

    {
      id: 5,
      label: '✔ Excelentes comisiones.',
    },

    {
      id: 6,
      label: '✔ Diferente métodos de venta',
    },
  ];

  advantageList : Ventajas[] =[
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
  ];

  ngOnInit(): void {
    this.title.setTitle(
      'Recarga5g.com | Vende tiempo aire, pago de servicios y pines hasta un 7.5% de comisión'
    );

    this.allProducts.set(this._productCarouselService.getProductCarousel());
    this.recargas.set(this._productCarouselService.getRecargas());
    this.servicios.set(this._productCarouselService.getServicios());
    this.pines.set(this._productCarouselService.getPines());

    this.reasonForSelling = this.reasonForSellingService.getReasonForSelling();
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

  getSafeSvg(svgCode: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgCode);
  }
}

type Ventajas = {
  id: number;
  iconClass: string;
  title: string;
  description: string;
};

type BusinessType = {
  id: number;
  typeBusiness: string;
  svgCode: SafeHtml;
};


type Testimonial = {
  fullName: string;
  comment: string;
  acronym: string;
}