import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { metaTagModel } from '@core/models/meta-tag.model';
import { productoModel } from '@core/models/productos.model';
import { registerSteps } from '@core/models/register-steps-model';
import { MetaTagService } from '@core/services/meta-tag.service';
import { ProductosService } from '@core/services/productos.service';
import { RegisterStepsService } from '@core/services/register-steps.service';

@Component({
  selector: 'app-recargas',
  templateUrl: './recargas.component.html',
  styleUrls: ['./recargas.component.scss', '../consulta.component.scss'],
  providers: [ProductosService]
})
export class RecargasComponent implements OnInit {

  @ViewChild('recargasSwiper')tae?: ElementRef;
  recargas: productoModel[] = [];
  stepRecargas: registerSteps[] = [];

  
  //? META TAG
  tag: metaTagModel = {

    title: "Recarga5g.com | Como vender recargas electrónicas: Telcel, Bait, Movistar, Unefon",
    description: "Vende recargas telcel, bait, pillofon, con una pequeña inversión con grandes beneficios, para cualquier tipo de negocio,  registro totalmente gratuito",
    keywords: "como vender recargas, como vender recargas electrónicas, como vender recargas telefonicas, vende recargas telcel, venta de recargas, vender recargas, vender recarga telce, telcel, bait, recargas bait, como vender recargas bait, pillofon, como vender recargas pillofon",
    url: "recarga5g.com/consulta/recargas",
    type: "website",
    image: "/assets/img/Venta-recargas.png",
    card: "summary_large_image",
    creator: "@recargascelular"
  }


  constructor(private readonly _recargasService: ProductosService,
              private readonly _stepRecargasService: RegisterStepsService,
              private readonly _metaTagService: MetaTagService,
              private readonly title: Title) {}

    ngOnInit(): void {

      this.title.setTitle('Recarga5g.com | Como vender recargas en todas las compañias nacionales')
   
      this._metaTagService.generateTags( {
        title: this.tag.title,
        description: this.tag.description,
        keywords: this.tag.keywords,
        url: this.tag.url,
        type: this.tag.type,
        image: this.tag.image,
        card: this.tag.card,
        creator: this.tag.creator
      });

        this.recargas= this._recargasService.getRecargas();
        this.stepRecargas = this._stepRecargasService.getStepsRecargas();
   

      }



 
}
