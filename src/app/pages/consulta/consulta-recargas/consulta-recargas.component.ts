import { Component, ViewChild, ElementRef, OnInit, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Title } from '@angular/platform-browser';

//* Modelos importados
import { metaTagModel } from '@core/models/meta-tag.model';
import { productoModel } from '@core/models/productos.model';
import { registerStepsModel } from '@core/models/register-steps-model';

//* Servicios importados
import { MetaTagService } from '@core/services/meta-tag.service';
import { ProductosService } from '@core/services/productos.service';
import { RegisterStepsService } from '@core/services/register-steps.service';
import { CarouselProductosComponent } from '@feature/components/carousel-productos/carousel-products.component';
import { MetodoVentasComponent } from '@feature/components/metodo-ventas/metodo-ventas.component';
import { RegisterStepsComponent } from '@feature/components/register/register-steps.component';

@Component({
  selector: 'app-consulta-recargas',
  standalone: true,
  templateUrl: './consulta-recargas.component.html',
  styleUrls: ['./consulta-recargas.component.scss', '../consulta.component.scss'],
  imports: [
    CarouselProductosComponent,
    MatIconModule,
    MetodoVentasComponent,
    RegisterStepsComponent
  ]
})
export default class ConsultaRecargasComponent implements OnInit {

  @ViewChild('recargasSwiper')tae?: ElementRef;
  recargas = signal<productoModel[]>([]);
  stepRecargas = signal<registerStepsModel[]>([]);


  //? META TAG
  tag: metaTagModel = {

    title: "Recarga5g.com | Como vender recargas electrónicas: Telcel, Bait, Movistar, Unefon",
    description: "Vende recargas telcel, bait, pillofon, con una pequeña inversión con grandes beneficios, para cualquier tipo de negocio,  registro totalmente gratuito",
    keywords: "como vender recargas, como vender recargas electrónicas, como vender recargas telefonicas, vende recargas telcel, venta de recargas, vender recargas, vender recarga telce, telcel, bait, recargas bait, como vender recargas bait, pillofon, como vender recargas pillofon",
    url: "recarga5g.com/consulta/recargas",
    type: "website",
    image: "https://recarga5g.com/Venta-recargas.png",
    card: "summary_large_image",
    creator: "@recargascelular"
  }

private readonly _recargasService = inject( ProductosService);
private readonly _stepRecargasService = inject( RegisterStepsService);
private readonly _metaTagService = inject( MetaTagService);
private readonly title = inject( Title);


    ngOnInit(): void {

      this.title.setTitle('Recarga5g.com | Como vender recargas en todas las compañias nacionales')

      this._metaTagService.generateTags( {
      ...this.tag
      });

        this.recargas.set( this._recargasService.getRecargas() );
        this.stepRecargas.set( this._stepRecargasService.getStepsRecargas() );


      }




}
