import { Component, OnInit, ViewChild, ElementRef, Inject, Renderer2, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { ProductosService } from '@core/services/productos.service';
import { productoModel } from '@core/models/productos.model';
import { DOCUMENT } from '@angular/common';
import { MatButton } from '@angular/material/button';



@Component({
  selector: 'app-filter-productos',
  templateUrl: './productos-filter.component.html',
  styleUrls: ['./productos-filter.component.scss'],
  providers: [ProductosService]
})
export class ProductosFilterComponent implements OnInit, AfterViewInit {

  productos: any = [];
  activeItem?: boolean;
  @ViewChild('option') option!: MatButton;


  constructor(private _productoService: ProductosService, @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private plataform_id: Object, private renderer: Renderer2) { 

    }

  ngOnInit(): void {
    this.productos = this._productoService.getProductos();
    
    // this.activeFilter();

  }

  ngAfterViewInit(): void {
 
    this.activeFilter()



  }

  activeFilter() {

    const btnFilter = this.document.querySelectorAll('.productos-options__button');
    const item = this.document.querySelectorAll('.productos-list-item');
   
    for (let i = 0; i < btnFilter.length; i++) {

      btnFilter[i].addEventListener("click", () => {

        for (let j = 0; j < btnFilter.length; j++) {
          btnFilter[j].classList.remove('productos-options__button--isactive');
        }

        btnFilter[i].classList.add('productos-options__button--isactive');
        const dataFilter = btnFilter[i].getAttribute('data-filter');
  
        for (let k = 0; k < item.length; k++) {

          item[k].classList.remove('showItem');
          item[k].classList.add('hiddenItem');
          
          if ((item[k].getAttribute('aria-label') == dataFilter) || (dataFilter == "todo")) {
            item[k].classList.remove('hiddenItem');
            item[k].classList.add('showItem');
          } else {
           
          }

        }
   
        
      });

    }

  }



}
