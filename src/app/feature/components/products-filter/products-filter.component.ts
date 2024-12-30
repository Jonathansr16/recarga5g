import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCarousel } from 'src/app/interfaces/product-carousel.interface';
import { ProductCarouselService } from '../product-carousel/services/product-carousel.service';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-filter-products',
    template: ` 
    <div class="products-wrapper">

    <div class="products-row mb-8 lg:mb-16 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
      <div class="products-col product-title mb-4">
        <span class="subtitle mb-3">Tiempo aire, pago de servicios y pines</span>
        <h3
          class="products-title">
           <span class="products-label text-primary">
           Nuestros Productos
          </span> 
            
        </h3>
      </div>

      <div class="products-col flex flex-row flex-wrap items-center justify-center gap-6 mb-4">
          @for (btnCategory of btnCategories(); track btnCategory.id) {
       
          <button
           (click)="handlerCategory(btnCategory.category)"
          [ngClass]="{
              'text-white': btnCategory.category === categoryActive(),
              'bg-white text-slate-800 border-slate-200': btnCategory.category != categoryActive()
            }"
          class="products-btn-category btn-primary font-sans uppercase mr-4 text-xs font-bold shadow-slate-500/20 hover:shadow-slate-500/20">
          {{ btnCategory.category }}
    </button>
          }
      </div>
    </div>

        <div
          class="products"
        >
        <ul class="products-list flex flex-row flex-wrap items-center justify-center  gap-x-6 gap-y-12">
          @for (companie of allProducts(); track $index) {
          
            @if(categoryActive() === companie.typeService || categoryActive() === 'Todos') {

              <li class="products-list-item" [@showItem] [ngClass]="companie.typeService === categoryActive() ||  categoryActive() === 'Todos'  ? 'block' : 'hidden'">
              <img
                class="products-list-img max-w-48 w-full h-auto"
                [src]="companie.img.src"
                loading="lazy"
                width="200"
                height="180"
                [alt]="companie.img.alt"
              />
            </li>

          }
          
        }
      </ul>
        </div>
      </div>
 
`,
    styleUrls: ['./products-filter.component.scss'],
    imports: [
        CommonModule,
    ],
    animations: [
        trigger('showItem', [
            transition(':enter', [
                style({ opacity: 0, transform: 'scale(0.9)' }),
                animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
            ]),
            transition(':leave', [
                animate('300ms ease-in', style({ opacity: 0, transform: 'scale(0.6)' }))
            ])
            // transition('* => active', [
            //   animate('1s ease-in', keyframes([
            //     style({ transform: 'scale(0.6', opacity: 0, offset: 0}),
            //     style( { transform: 'scale(1)', opacity: 1, offset: 1})
            //   ]))
            // ])
        ])
    ]
})
export class ProductsFilterComponent implements OnInit {

  btnCategories = signal<BtnCategory[]>([
    { id: 0, category: 'Todos' },
    { id: 1, category: 'Recargas' },
    { id: 2, category: 'Servicios' },
    { id: 3, category: 'Pines' },
  ]);

  allProducts = signal<ProductCarousel[]>([]);

  categoryActive = signal<'Todos' | 'Recargas' | 'Servicios' | 'Pines'>('Todos');

  rippleColor = signal('rgba(255, 255, 255, 0.5)'); // Usamos Signals para definir el color


  private readonly productCarouselService = inject(ProductCarouselService);

  ngOnInit(): void {
    this.allProducts.set( this.productCarouselService.getAllProducts());
  }

  handlerCategory(category: 'Todos' | 'Recargas' | 'Servicios' | 'Pines') {
  
  this.categoryActive.set(category)
  }
}


interface BtnCategory {
  id: number,
  category: 'Todos' | 'Recargas' | 'Servicios' | 'Pines';
}