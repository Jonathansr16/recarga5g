import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

//* Modelos importados
import { productoModel } from '@core/models/productos.model';
import { registerStepsModel } from '@core/models/register-steps-model';
import { metaTagModel } from '@core/models/meta-tag.model';

//* Servicios importados
import { ProductosService } from '@core/services/productos.service';
import { RegisterStepsService } from '@core/services/register-steps.service';
import { MetaTagService } from '@core/services/meta-tag.service';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss','../consulta.component.scss']
})
export class ServiciosComponent implements OnInit{

  servicios: productoModel[] = [];
  registerServices: registerStepsModel[] = [];
  
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

  constructor(private readonly _servicios: ProductosService, private _register: RegisterStepsService, private readonly _metaTagService: MetaTagService,
              private readonly title: Title) { }

  ngOnInit(): void {

    this.title.setTitle('Recarga5g.com | Como cobrar recibo de servicios: Telmex, Izzi, CFE y mucho mas!')

    this.servicios = this._servicios.getServicios();
    this.registerServices = this._register.getStepsServicios();

    this._metaTagService.generateTags( {
      ...this.tag
    })
  }
}
