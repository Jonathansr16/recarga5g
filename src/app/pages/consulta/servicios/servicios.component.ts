import { Component, inject, OnInit, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';

//* Modelos importados
import { registerStepsModel } from '@core/interfaces/register-steps-model';
import { metaTagModel } from '@core/interfaces/meta-tag.model';

//* Servicios importados
import { RegisterStepsService } from '@core/services/register-steps.service';
import { MetaTagService } from '@core/services/meta-tag.service';
import { MetodoVentasComponent } from '@feature/components/metodo-ventas/metodo-ventas.component';
import { RegisterStepsComponent } from '@feature/components/register/register-steps.component';
import { CommonModule } from '@angular/common';
import { ProductCarouselComponent } from '@feature/components/carousel-productos/product-carousel.component';


@Component({
  selector: 'app-servicios',
  standalone: true,
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss','../consulta.component.scss'],
  imports: [
    CommonModule,
    ProductCarouselComponent,
    MetodoVentasComponent,
    RegisterStepsComponent,
  ]
})
export default class ServiciosComponent implements OnInit{

  
  registerServices = signal<registerStepsModel[]>([]);
  
  //? META TAG
  tag: metaTagModel = {

    title: "Recarga5g.com | Como vender pago de servicios",
    description: "Cobra cualquier tipo recibo Telmex, CFE, IZZI, No dejes pasar más tiempo valioso lidiando con complicaciones en tus cobros. Únete a Recarga5g.com y descubre una forma más fácil y eficiente de cobrar por tus servicios",
    keywords: "como vender pago de servicios, pago de servicio telmex, cobro por recibo telmex, pago de servicio izzi, cobro por recibo izzi, cobro de recibo, pago de servicios, Pago de recibo de luz, cobro de recibo de luz, recibo CFE",
    url: "recarga5g.com/consulta/servicios",
    type: "website",
    image: "https://recarga5g.com/Venta-recargas.png",
    card: "summary_large_image",
    creator: "@recargascelular"
  }

  private readonly _register = inject( RegisterStepsService ); 
  private readonly _metaTagService = inject( MetaTagService );
  private readonly title = inject( Title );
  
  ngOnInit(): void {

    this.title.setTitle('Recarga5g.com | Como cobrar recibo de servicios: Telmex, Izzi, CFE y mucho mas!')

    this.registerServices.set( this._register.getStepsServicios() );

    this._metaTagService.generateTags( {
      ...this.tag
    })
  }
}
