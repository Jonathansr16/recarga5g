import { Component, OnInit, inject } from '@angular/core';
import { ProductosService } from '@core/services/productos.service';
import { CommonModule } from '@angular/common';
import { productoModel } from '@core/models/productos.model';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-filter-productos',
  standalone: true,
  template: ` <div class="productos">
    <div class="productos__container">
      <div class="productos-title">
        <h3
          class="productos-title__h3 text-slate-700 dark:text-white font-bold pb-2 text-3xl lg:text-5xl my-4 text-center">
        <span class="relative before:content-[''] before:absolute before:bg-red-400 dark:before:bg-blue-400 before:right-0 before:left-0 before:h-1 before:-z-[5] before:bottom-3">
          Nuestros Productos
        </span>
        </h3>
      </div>

      <div class="productos-filter">
        <div
          #filters
          class="productos-options flex flex-row flex-wrap items-center justify-center gap-6 mb-4"
        >
          @for (btnCategory of categorias; track $index) {
          <button
          matRipple 
          [matRippleColor]="'rgba(255, 255, 255, .2)'"
            (click)="btnFilterActive(btnCategory.id)"
            [ngClass]="{
              'bg-red-500 text-white': btnCategoryActive === btnCategory.id,
              'bg-red-50 text-red-700': btnCategoryActive != btnCategory.id
            }"
            class="productos-options__button px-4 py-2 rounded-lg transition-all"
            data-filter="recargas"
          >
            {{ btnCategory.nombre }}
          </button>
          }
        </div>

        <div
          class="productos-list flex flex-row flex-wrap items-center justify-center gap-6"
        >
          @for (companie of productos[0].item; track $index) {
          @if(btnCategoryActive === companie.idCategory || btnCategoryActive ===
          0) {
          <div
            #productItem
            class="productos-list-item"
            [attr.data-category]="companie.category"
            [ngClass]="{ showItem: btnCategoryActive === companie.idCategory }"
          >
            <img
              class="productos-list-item__img max-w-48 max-h-48 w-full h-full"
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
  imports: [CommonModule, MatRippleModule],
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
