import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { metaTagModel } from '@core/models/meta-tag.model';
import { productoModel } from '@core/models/productos.model';
import { registerSteps } from '@core/models/register-steps-model';
import { MetaTagService } from '@core/services/meta-tag.service';
import { ProductosService } from '@core/services/productos.service';
import { RegisterStepsService } from '@core/services/register-steps.service';

@Component({
  selector: 'app-pines',
  templateUrl: './pines.component.html',
  styleUrls: ['./pines.component.scss', '../consulta.component.scss']
})
export class PinesComponent implements OnInit{

  pines: productoModel[] = [];
  stepPines: registerSteps[] = [];

    //? META TAG
    tag: metaTagModel = {

      title: "Recarga5g.com |Consulta como vender tarjetas electrónicas Google play, Spotify, Netflix con excelentes comisiones",
      description: "Nuestras tarjetas de regalo Google Play, Spotify son el regalo perfecto para personas de todas las edades y gustos. Desde música y películas hasta juegos y aplicaciones, tus clientes podrán disfrutar de una amplia variedad de contenido digital con estas tarjetas",
      keywords: "como vender tarjetas de regalo, tarjeta de regalo, tarjeta de regalo amazon, pines electrónicos, como vender pines electrónicos, vender pines, vender pines electrónicos, google play, google play tarjetas, vender tarjetas de regalo, spotify",
      url: "recarga5g.com/consulta/pines",
      type: "website",
      image: "/assets/img/Venta-recargas.png",
      card: "summary_large_image",
      creator: "@recargascelular"
    }

  constructor(private readonly _pinesService: ProductosService,
              private readonly _stepService: RegisterStepsService,
              private readonly _metaTagService: MetaTagService,
              private readonly title: Title
              ){ }

  ngOnInit(): void {
    
    this.title.setTitle('Recarga5g.com | Venta de tarjetas de regalo Google play, Amazon, Netflix')
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

    this.pines = this._pinesService.getPines();
      this.stepPines = this._stepService.getStepsPines();


  }


}



