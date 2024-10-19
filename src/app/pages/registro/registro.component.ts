import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { metaTagModel } from '@core/interfaces/meta-tag.model';
import { MetaTagService } from '@core/services/meta-tag.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export default class RegistroComponent implements OnInit {


    //? META TAG
 tag: metaTagModel = {
  title: 'Recarga5g.com | Registro, afíliate con nosotros, obtén y disfruta de los beneficios que tenemos para ti',
  description: 'Vende recargar a cualquier compañía telefónica hasta 7.5% de comisión fija, paga servicios de todos tus clientes y pines electrónicos. Telcel, Unefón, Izzi, CFE, Google Play, Spotify y muchos más!',
  keywords: "Venta de recargas, recargas electrónicas, recargas telefónicas, recargas telcel, venta de recargas telcel, recargas electronicas telcel, tiempo aire telcel, Telcel registro para vender tiempo aire, registro para venta de recargas para negocio, registro para vender recargas, recargas electronicas 7.5% comision, comision 7.5, comision 7.5 por la venta de recargas, vender recargas",
  url: 'recarga5g.com/registro',
  type: 'website',
  image: 'https://recarga5g.com/Venta-recargas.png',
  card: 'summary_large_image',
  creator: '@recargascelular'
 }

  constructor(private readonly title: Title,private readonly _metaTagService: MetaTagService) { }

  ngOnInit(): void {
    this.title.setTitle('Recarga5g.com | Registro, afíliate con nosotros, obtén y disfruta de los beneficios que tenemos para ti')
  
     this._metaTagService.generateTags({
      title: this.tag.title,
      description: this.tag.description,
      keywords: this.tag.keywords,
      url: this.tag.url,
      type: this.tag.type,
      image: this.tag.image,
      card: this.tag.card,
      creator: this.tag.creator
    })
  }

}
