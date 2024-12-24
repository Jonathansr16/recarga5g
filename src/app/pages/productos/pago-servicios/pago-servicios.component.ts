import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

//* Servicios importados
import { ProductCarousel } from 'src/app/interfaces/product-carousel.interface';
import { SalesMethodComponent } from '@feature/components/sales-method/sales-method.component';

//* COMPONENTS
import { ProductCarouselComponent } from '@feature/components/product-carousel/product-carousel.component';
import { ProductCarouselService } from '@feature/components/product-carousel/services/product-carousel.service';
import { RegisterStepsComponent } from '@feature/components/register-steps/register-steps.component';

@Component({
  selector: 'app-pago-servicios',
  standalone: true,
  templateUrl: './pago-servicios.component.html',
  styleUrls: ['./pago-servicios.component.scss','../productos.component.scss'],
  imports: [
    CommonModule,
    ProductCarouselComponent,
    SalesMethodComponent,
    RegisterStepsComponent,
]
})
export default class PagoServiciosComponent implements OnInit{

  carouselServices = signal<ProductCarousel[]>([]);
  
  //? META TAG
  // tag: metaTagModel = {

  //   title: "Recarga5g.com | Como vender pago de servicios",
  //   description: "Cobra cualquier tipo recibo Telmex, CFE, IZZI, No dejes pasar más tiempo valioso lidiando con complicaciones en tus cobros. Únete a Recarga5g.com y descubre una forma más fácil y eficiente de cobrar por tus servicios",
  //   keywords: "como vender pago de servicios, pago de servicio telmex, cobro por recibo telmex, pago de servicio izzi, cobro por recibo izzi, cobro de recibo, pago de servicios, Pago de recibo de luz, cobro de recibo de luz, recibo CFE",
  //   url: "recarga5g.com/consulta/servicios",
  //   type: "website",
  //   image: "https://recarga5g.com/Venta-recargas.png",
  //   card: "summary_large_image",
  //   creator: "@recargascelular"
  // }

  private readonly productCarouselService = inject(ProductCarouselService);
  private readonly title = inject( Title );
  
  ngOnInit(): void {

    this.title.setTitle('Recarga5g.com | Como cobrar recibo de servicios: Telmex, Izzi, CFE y mucho mas!')
   this.carouselServices.set( this.productCarouselService.getServicios());


    // this._metaTagService.generateTags( {
    //   ...this.tag
    // })
  }
}
