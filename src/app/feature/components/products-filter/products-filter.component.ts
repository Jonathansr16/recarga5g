import {
  Component,
  OnInit,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { ProductCarousel } from 'src/app/interfaces/product-carousel.interface';
import { ProductCarouselService } from '../product-carousel/services/product-carousel.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-btn-filter',
  template: `
    <button
      type="button"
      (click)="handlerCategory()"
      [class]="
        selectedCategory() === titleBtn()
          ? 'bg-gray-800 dark:bg-gray-800 text-gray-200'
          : 'text-slate-700 dark:text-slate-400'
      "
      class="transition-colors font-medium px-3 text-sm rounded-lg whitespace-nowrap flex flex-1 gap-[0.625rem] items-center h-8"
    >
      <span>{{ titleBtn() }}</span>
      <ng-content select="[btnIcon]"></ng-content>
    </button>
  `,
  imports: [CommonModule],
})
export class BtnFilterComponent {
  titleBtn = input.required<Category>();
  selectedCategory = input<Category>('Todos');
  classBtn = input<string>();
  filterCategory = output<string>();

  handlerCategory(): void {
    this.filterCategory.emit(this.titleBtn());
  }
}

@Component({
  selector: 'app-filter-products',
  template: `
    <div class="products-wrapper">
      <div
        class="products-row mb-8 lg:mb-16 flex flex-col lg:flex-row items-center justify-center lg:justify-between"
      >
        <div class="products-col mb-4">
          <div
            class="font-medium text-sm py-[0.375rem] px-4 rounded-md bg-slate-800 dark:bg-slate-700 text-slate-100 shadow-sm inline-flex items-center gap-2 mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z"
              />
            </svg>
            <span> Recargas, servicios y pines </span>
          </div>
          <h3 class="products-title text-4xl lg:text-5xl c-text font-semibold">
              Nuestros Productos
          </h3>
        </div>

        <div
          class="products-actions shadow-md p-2 inline-flex item-center flex-wrap rounded-xl justify-center gap-4 bg-slate-100 dark:bg-gray-900"
        >
          <app-btn-filter
            titleBtn="Todos"
            [selectedCategory]="selectedCategory()"
            (filterCategory)="setCategory('Todos')"/>
          <app-btn-filter
            titleBtn="Recargas"
            [selectedCategory]="selectedCategory()"
            (filterCategory)="setCategory('Recargas')">
            <svg
              btnIcon
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
          </app-btn-filter>
          <app-btn-filter
            titleBtn="Servicios"
            [selectedCategory]="selectedCategory()"
            (filterCategory)="setCategory('Servicios')">
            <svg
              btnIcon
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
              />
            </svg>
          </app-btn-filter>
          <app-btn-filter
            titleBtn="Pines"
            [selectedCategory]="selectedCategory()"
            (filterCategory)="setCategory('Pines')">
            <svg
              btnIcon
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
          </app-btn-filter>
        </div>
      </div>

      <div class="products">
        <div class="product-section flex flex-wrap lg:flex-nowrap flex-row gap-4 overflow-hidden">
          @switch (selectedCategory()) { 
          
            @case ('Todos') {
          <div
            class="w-full lg:w-1/2  product-section-col relative flex flex-col justify-center animate-slide-in-top"
          >
            <h3 class="text-4xl text-slate-700 dark:text-white font-semibold">
              Todos nuestros productos
            </h3>

            <p
              class="mt-8 text-slate-600 dark:text-slate-300 max-w-2xl text-balance"
            >
              En un mundo en constante evolución, los negocios que innovan son
              los que se mantienen relevantes. Si buscas ofrecer más valor a tus
              clientes y aumentar tus ingresos, nuestros servicios son la
              elección ideal. Te ofrecemos herramientas prácticas, rentables y
              fáciles de implementar para que transformes tu negocio en un punto
              de referencia.
            </p>

            <ul class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4 mt-8">
              <li class="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  class="size-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                  />
                </svg>
                <p>Cientos de compañia de telefonia y servicios</p>
              </li>

              <li class="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  class="size-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                  />
                </svg>
                <p>
                  Venta de recargas, pago de servicios y pines en una sola
                  plataforma
                </p>
              </li>

              <li class="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  class="size-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                  />
                </svg>
                <p>Seguro y confiable</p>
              </li>

              <li class="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  class="size-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                  />
                </svg>
                <p>Comisiones mejores del mercado</p>
              </li>
            </ul>
          </div>
          <div
            class="w-full lg:w-1/2 animate-slide-up-fade relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700">
            <div
              class="circle-shape-wrapper absolute bottom-0 left-2/4 -translate-x-2/4  pointer-events-none "
              aria-hidden="true"
            >
              <div
                class="circle-shape blur-[160px] opacity-80 bg-gradient-to-tr from-blue-500 to-blue-500/30 rounded-full size-80 -z-0"
              ></div>
            </div>

            <div class="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
              <img
                src="assets/img/companies/devices.webp"
                class="mx-auto rounded-t-3xl object-cover object-top  dark:border-transparent"
                alt=""
              />
            </div>
          </div>
          } 

           @case('Recargas') {
          <div
            class="relative w-full lg:w-1/2 flex flex-col justify-center animate-slide-in-top"
          >
            <h3 class="text-4xl text-slate-700 dark:text-white font-semibold">
             Vende Recargas electrónicas a todas las compañia de telefonía en México
            </h3>
            <p
              class="mt-8 text-slate-600 dark:text-slate-300 max-w-2xl text-balance"
            >
            te ofrecemos la oportunidad de vender recargas de las principales compañías de telefonía en México y ganar una comisión extra por cada transacción. ¡Convierte tu negocio en un centro de recargas y comienza a generar ganancias adicionales hoy mismo!
            </p>

            <p
              class="mt-8 text-slate-600 dark:text-slate-300 max-w-2xl text-balance"
            >
            Las recargas telefónicas son un servicio esencial que millones de personas necesitan todos los días, puedes convertirte en un aliado estratégico para tus clientes, ofreciéndoles un servicio práctico y confiable, mientras aumentas tus ingresos de manera constante.
          </p>
          </div>
          <div class="w-full lg:w-1/2 animate-slide-up-fade">
            <div
              class="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700"
            >
              <div
                class="circle-shape-wrapper absolute bottom-0 left-2/4 -translate-x-2/4  pointer-events-none "
                aria-hidden="true"
              >
                <div
                  class="circle-shape blur-[160px] opacity-80 bg-gradient-to-tr from-blue-500 to-blue-500/30 rounded-full size-80 -z-0"
                ></div>
              </div>
              <div
                class="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20"
              >
                <img
                  src="assets/img/companies/recargas.webp"
                  class="mx-auto rounded-t-3xl object-cover object-top  dark:border-transparent"
                  alt=""
                />
              </div>
            </div>
          </div>
          } 

          @case('Servicios') {
          <div
            class="relative w-full lg:w-1/2 flex flex-col justify-center animate-fade-in"
          >
            <h3 class="text-4xl text-slate-700 dark:text-white font-semibold">
              Pago de servicios
            </h3>
            <p
              class="mt-8 text-slate-600 dark:text-slate-300 max-w-2xl text-balance"
            >
            ofrecer a tus clientes la facilidad de pagar servicios como luz, agua, teléfono, internet y más, directamente en tu establecimiento. Además, por cada transacción que proceses, recibirás comisiones competitivas que incrementarán tus ganancias.
            </p>

            <p
              class="mt-8 text-slate-600 dark:text-slate-300 max-w-2xl text-balance"
            >
            conviértete en un aliado estratégico para tus clientes! Con nuestra plataforma segura y confiable, podrás ofrecer un servicio que todos necesitan, mientras aumentas tus ganancias de manera constante.
          </p>
          </div>
          <div class="col w-full lg:w-1/2 animate-slide-up-fade">
            <div
              class="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700"
            >
              <div
                class="circle-shape-wrapper absolute bottom-0 left-2/4 -translate-x-2/4  pointer-events-none "
                aria-hidden="true"
              >
                <div
                  class="circle-shape blur-[160px] opacity-80 bg-gradient-to-tr from-blue-500 to-blue-500/30 rounded-full size-80 -z-0"
                ></div>
              </div>

              <div
                class="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20"
              >
                <img
                  src="assets/img/companies/servicios.webp"
                  class="mx-auto rounded-t-3xl object-cover object-top  dark:border-transparent"
                  alt=""
                />
              </div>
            </div>
          </div>
          } 

          @case('Pines') {
          <div
            class="relative w-full lg:w-1/2 flex flex-col justify-center animate-fade-in"
          >
            <h3 class="text-4xl text-slate-700 dark:text-white font-semibold">
              Pines
            </h3>
            <p
              class="mt-8 text-slate-600 dark:text-slate-300 max-w-2xl text-balance"
            >
            ¿Buscas una forma práctica y rápida de disfrutar de tus servicios digitales favoritos? En [Nombre de tu empresa], te ofrecemos tarjetas electrónicas de los mejores servicios como Spotify, Netflix, Google Play, Apple Music, YouTube Premium y mucho más. ¡Recárgalas al instante y sin complicaciones!
            </p>

            <p
              class="mt-8 text-slate-600 dark:text-slate-300 max-w-2xl text-balance"
            >
            No importa si eres un amante de la música, un fanático de las series o un gamer apasionado, tenemos la tarjeta electrónica perfecta para ti. Compra ahora y disfruta de tus servicios favoritos sin complicaciones.
            </p>
          </div>
          <div class="col w-full lg:w-1/2 animate-slide-up-fade">
            <div
              class="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700"
            >
              <div
                class="circle-shape-wrapper absolute bottom-0 left-2/4 -translate-x-2/4  pointer-events-none "
                aria-hidden="true"
              >
                <div
                  class="circle-shape blur-[160px] opacity-80 bg-gradient-to-tr from-blue-500 to-blue-500/30 rounded-full size-80 -z-0"
                ></div>
              </div>

              <div
                class="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20"
              >
                <img
                  src="assets/img/companies/pines.webp"
                  class="mx-auto rounded-t-3xl object-cover object-top  dark:border-transparent"
                  alt="pines electrónicos"
                />
              </div>
            </div>
          </div>
          } 
        }
        </div>
        <!-- <ul
          class="products-list flex flex-row flex-wrap items-center justify-center  gap-x-6 gap-y-12"
        >
          @for (companie of allProducts(); track $index) {
          @if(companie.typeService === selectedCategory() || selectedCategory()
          === 'Todos') {
          <li
            class="products-list-item"
            [@showItem]
            [ngClass]="
              companie.typeService === categories() || categories() === 'Todos'
                ? 'block'
                : 'hidden'
            "
          >
            <img
              class="products-list-img max-w-48 w-full h-auto"
              [src]="companie.img.src"
              loading="lazy"
              width="200"
              height="180"
              [alt]="companie.img.alt"
            />
          </li>
          } }
        </ul> -->
      </div>
    </div>
  `,
  styles: [``],
  imports: [BtnFilterComponent],
  animations: [
    trigger('showItem', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-in',
          style({ opacity: 0, transform: 'scale(0.6)' })
        ),
      ]),
    ]),
  ],
})
export class ProductsFilterComponent implements OnInit {
  private readonly productCarouselService = inject(ProductCarouselService);

  allProducts = signal<ProductCarousel[]>([]);
  categories = signal<Category>('Todos');
  rippleColor = signal('rgba(255, 255, 255, 0.5)');
  selectedCategory = signal<Category>('Todos');

  setCategory(category: Category) {
    this.selectedCategory.set(category);
  }

  ngOnInit(): void {
    this.allProducts.set(this.productCarouselService.getAllProducts());
  }
}

type Category = 'Todos' | 'Recargas' | 'Servicios' | 'Pines';
