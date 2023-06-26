import { Component, OnInit, ViewChildren, QueryList, ElementRef, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { ProductosService } from '@core/services/productos.service';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-filter-productos',
  templateUrl: './productos-filter.component.html',
  styleUrls: ['./productos-filter.component.scss'],
})
export class ProductosFilterComponent implements OnInit {

  productos: any[] = [];
  categorias: string[] = ['Todos', 'Recargas', 'Servicios', 'Pines']; // Reemplaza con tus categorías

  @ViewChildren('productItem') itemsProduct?: QueryList<ElementRef>
  selectedCategory: string = 'todo';
  btnCategoryActive: string = 'todo'

  constructor(private _productoService: ProductosService, private renderer2: Renderer2, @Inject(PLATFORM_ID) private plataform_id: Object ) { }

  ngOnInit(): void {
    this.productos = this._productoService.getProductos();
 
  }

 filterProduct(category: string) {

  this.btnCategoryActive = category;
  if (isPlatformBrowser(this.plataform_id)) {
    this.itemsProduct?.forEach(element => {
      const imageCategory = element.nativeElement.getAttribute('data-category');
      this.renderer2.removeClass(element.nativeElement, 'hiddenItem');
      this.renderer2.addClass(element.nativeElement, 'showItem');
      if(category === 'todo' || imageCategory === category) {
    
        this.renderer2.removeClass(element.nativeElement, 'hiddenItem');
        this.renderer2.addClass(element.nativeElement, 'showItem');
    
      } else {
    
        this.renderer2.removeClass(element.nativeElement, 'showItem');
        this.renderer2.addClass(element.nativeElement, 'hiddenItem');
      }
    });

  }

 
 }



}
