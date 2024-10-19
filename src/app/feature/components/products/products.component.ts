import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal, type OnInit } from '@angular/core';
import { CardsProductComponent } from '../cards-product/cards-product.component';
import { ProductCarousel, ProductImg } from '@core/interfaces/product-carousel.interface';
import { ProductCarouselService } from '../carousel-productos/services/product-carousel.service';
import { style } from '@angular/animations';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    CardsProductComponent
  ],
  templateUrl: './products.component.html',
 
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {

  cardsRecargas = signal<ProductCarousel[]>([]);
  cardsServicios = signal<ProductCarousel[]>([]);
  cardsPines = signal<ProductCarousel[]>([]);
  
  products = signal<Products[]>([

    {
      id: 1,
      title: 'Recargas electrónicas',
      typeService: 'Recargas',
      img: {
        src: 'assets/img/companies/producto_recargas.webp',
        alt: 'Venta de recargas para negocio'
      }
    
    },


    {
      id: 2,
      title: 'Pago de servicios',
      typeService: 'Servicios',
      img: {
        src: 'assets/img/companies/producto_servicios.webp',
        alt: 'Cobro de servicios para negocio'
      }
    
    },

    {
      id: 3,
      title: 'Pines electrónicos',
      typeService: 'Pines',
      img: {
        src: 'assets/img/companies/producto_pines.webp',
        alt: 'Venta de tarjetas de regalo'
      }
    
    }
  ])

  private readonly productsService = inject(ProductCarouselService);


  ngOnInit(): void {

    this.cardsRecargas.set(this.productsService.getRecargas());
    this.cardsServicios.set(this.productsService.getServicios());
    this.cardsPines.set(this.productsService.getPines());

   }

}

interface Products {
  id: number,
  title: string;
  typeService: 'Recargas' | 'Servicios' | 'Pines';
  img: ProducImg
}

interface ProducImg {
  src: string;
  alt: string;
}
