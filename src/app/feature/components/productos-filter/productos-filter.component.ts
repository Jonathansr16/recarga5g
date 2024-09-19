import { Component, OnInit, inject } from '@angular/core';
import { ProductosService } from '@core/services/productos.service';
import { CommonModule } from '@angular/common';
import { productoModel } from '@core/interfaces/productos.model';

@Component({
  selector: 'app-filter-productos',
  standalone: true,
  template: ` <div class="products">
    <div class="products__container">

    <div class="products-row mb-8 lg:mb-16 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
      <div class="products-title mb-4">
        <span class="text-2xl font-semibold text-red-700 dark:text-sky-500 mb-3">Tiempo aire, pago de servicios y pines</span>
        <h3
          class="productos-title__h3 text-slate-700 dark:text-white font-bold pb-2 text-3xl lg:text-5xl my-b text-center relative before:content-[''] before:absolute before:bg-red-400 before:dark:bg-blue-400 before:right-0 before:left-0 before:h-1 before:-z-[5] before:bottom-0">
      
        Nuestros Productos
        </h3>
      </div>

      <div
          #filters
          class="products-options flex flex-row flex-wrap items-center justify-center gap-6 mb-4"
        >
          @for (btnCategory of categorias; track $index) {
          <button
          matRipple 
        
            (click)="btnFilterActive(btnCategory.id)"
            [ngClass]="{
              'bg-red-500 text-white border-red-500': btnCategoryActive === btnCategory.id,
              'bg-white text-slate-700 border-slate-200': btnCategoryActive != btnCategory.id
            }"
            class="products-options__button border-[1px] py-2 px-3 lg:py-3 lg:px-8  rounded-lg transition-all font-medium text-base shadow"
            data-filter="recargas"
          >
            {{ btnCategory.nombre }}
          </button>
          }
      </div>
    </div>



      <div class="products-filter">
       
        <div
          class="products-list flex flex-row flex-wrap items-center justify-center gap-6"
        >
          @for (companie of productos[0].item; track $index) {
          @if(btnCategoryActive === companie.idCategory || btnCategoryActive ===
          0) {
          <div
            #productItem
            class="products-list-item"
            [attr.data-category]="companie.category"
            [ngClass]="{ showItem: btnCategoryActive === companie.idCategory }"
          >
            <img
              class="products-list-item__img max-w-48 max-h-48 w-full h-full"
              [src]="companie.url"
              loading="lazy"
              width="200"
              height="180"
              [alt]="companie.category"
            />
          </div>
          } }
        </div>
      </div>
    </div>
  </div>`,
  styleUrls: ['./productos-filter.component.scss'],
  imports: [CommonModule],
})
export class ProductosFilterComponent implements OnInit {
  productos: productoModel[] = [];
  categorias = [
    { id: 0, nombre: 'Todos' },
    { id: 1, nombre: 'Recargas' },
    { id: 2, nombre: 'Servicios' },
    { id: 3, nombre: 'Pines' },
  ];
  btnCategoryActive = 0;

  private readonly _productoService = inject(ProductosService);

  ngOnInit(): void {
    this.productos = this._productoService.getProductos();
  }

  btnFilterActive(index: number) {
    this.btnCategoryActive = index;
  }
}
