import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCarousel } from '../../../core/interfaces/product-carousel.interface';
import { ProductCarouselService } from '../carousel-productos/services/product-carousel.service';


@Component({
  selector: 'app-filter-productos',
  standalone: true,
  template: ` 

    <div class="products__wrapper">

    <div class="products__row mb-8 lg:mb-16 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
      <div class="products__col product-title mb-4">
        <p class="subtitle mb-3">Tiempo aire, pago de servicios y pines</p>
        <h3
          class="products__h3 title-1">
           <span class="text-strong">
           Nuestros Productos
          </span> 
            
        </h3>
      </div>

      <div class="products__col flex flex-row flex-wrap items-center justify-center gap-6 mb-4">
          @for (btnCategory of btnCategories(); track btnCategory.id) {
       
          <button
           (click)="handlerCategory(btnCategory.category)"
          [ngClass]="{
              'bg-red-600 text-white border-red-600': btnCategory.category === categoryActive(),
              'bg-white text-slate-700 border-slate-200': btnCategory.category != categoryActive()
            }"
          class="middle none center mr-4 rounded-lg py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          {{ btnCategory.category }}
    </button>
          }
      </div>
    </div>

   
       
        <div
          class="products"
        >
        <ul class="products__ul products-list flex flex-row flex-wrap items-center justify-center  gap-x-6 gap-y-12">
          @for (companie of allProducts(); track $index) {
          
            @if(categoryActive() === companie.typeService || categoryActive() === 'Todos') {

            <li class="products__li"  [ngClass]="{ showItem: companie.typeService === categoryActive() }">
              <img
                class="products-list-item__img max-w-48  w-full h-auto"
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
  styleUrls: ['./productos-filter.component.scss'],
  imports: [
    CommonModule, 
  ],
})
export class ProductosFilterComponent implements OnInit {

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