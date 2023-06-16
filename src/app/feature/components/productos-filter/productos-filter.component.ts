import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef, Renderer2 } from '@angular/core';
import { ProductosService } from '@core/services/productos.service';
import { MatButton } from '@angular/material/button';


@Component({
  selector: 'app-filter-productos',
  templateUrl: './productos-filter.component.html',
  styleUrls: ['./productos-filter.component.scss'],
  providers: [ProductosService]
})
export class ProductosFilterComponent implements OnInit {

  productos: any[] = [];
  categorias: string[] = ['Todos', 'Recargas', 'Servicios', 'Pines']; // Reemplaza con tus categorías

   @ViewChildren('btnFilter') btnsFilter?: QueryList<MatButton>;
  @ViewChildren('productItem') itemsProduct?: QueryList<ElementRef>
  @ViewChild('filters') option!: ElementRef;

  @ViewChild('productContainer') product?:ElementRef;

  selectedCategory: string = 'todo';
  btnCategoryActive: string = 'todo'
  constructor(private _productoService: ProductosService, private renderer2: Renderer2 ) { }

  ngOnInit(): void {
    this.productos = this._productoService.getProductos();
 
  }

 filterProduct(category: string) {

  this.btnCategoryActive = category;

this.itemsProduct?.forEach(element => {
  const imageCategory = element.nativeElement.getAttribute('data-category');
  this.renderer2.removeClass(element.nativeElement, 'hiddenItem');
  this.renderer2.addClass(element.nativeElement, 'showItem');
  if(category === 'todo' || imageCategory === category) {

    this.renderer2.removeClass(element.nativeElement, 'hiddenItem');
    this.renderer2.addClass(element.nativeElement, 'showItem');
      // element.nativeElement.hidden = false;

  } else {
    // element.nativeElement.hidden = true;
    this.renderer2.removeClass(element.nativeElement, 'showItem');
    this.renderer2.addClass(element.nativeElement, 'hiddenItem');
  }
});
 
 }

//  isImageVisible(category: string): boolean {
//     return category === 'todo' || category === this.selectedCategory;
//  }


}
