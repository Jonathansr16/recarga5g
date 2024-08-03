import { Component, OnInit, inject } from '@angular/core';
import { ProductosService } from '@core/services/productos.service';
import { CommonModule } from '@angular/common';
import { productoModel } from '@core/models/productos.model';


@Component({
  selector: 'app-filter-productos',
  standalone: true,
  templateUrl: './productos-filter.component.html',
  styleUrls: ['./productos-filter.component.scss'],
  imports: [
    CommonModule
  ],
 
})
export class ProductosFilterComponent implements OnInit {

  productos: productoModel[] = [];
  categorias = [
    { id: 0, nombre: 'Todos' },
    { id: 1, nombre: 'Recargas' },
    { id: 2, nombre: 'Servicios' },
    { id: 3, nombre: 'Pines' }
  ]
  btnCategoryActive = 0;

  private readonly _productoService = inject( ProductosService);

  ngOnInit(): void {
    this.productos = this._productoService.getProductos();
 
  }

  btnFilterActive(index: number) {
    this.btnCategoryActive = index
  }


}
