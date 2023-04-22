import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { productoModel } from '@core/models/productos.model';
import { ProductosService } from '@core/services/productos.service';
import Glide, { Controls, Breakpoints, Autoplay } from '@glidejs/glide/dist/glide.modular.esm'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [ProductosService]
})
export class CarouselComponent implements OnInit, AfterViewInit {

  productos: productoModel[] = [];
  @ViewChild('glide') glider!: ElementRef;
  

  config = {
    type: "carousel",
    startAt: 1,
    perView: 5,
    autoplay: true,
    animationDuration: 2000,
    
  }

  constructor(private _productoService: ProductosService) { }

  ngOnInit(): void {
    this.productos = this._productoService.getProductos();

  }

  ngAfterViewInit(): void {
    this.carousel();
    
  }


  carousel(): void {
   const glide = this.glider.nativeElement;
    new Glide(glide, this.config).mount({ Controls, Breakpoints, Autoplay })
 
   
  }


}
