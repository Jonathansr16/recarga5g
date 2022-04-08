import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetaTagService } from 'src/app/pages/services/meta-tag.service';

@Component({
  selector: 'app-recargaki',
  templateUrl: './recargaki.component.html',
  styleUrls: ['./recargaki.component.css']
})
export class RecargakiComponent  {

  constructor(private title: Title, private metaTag: MetaTagService) { 

    let titlePagaqui: string= "recarga5g.com - Reporte de deposito y transferencias Recargaki/Planetaemxvía Web";
    this.title.setTitle(titlePagaqui);

    this.metaTag.generarTag({
      description: "Si eres usuario de Recargaki o Planetaemx. Reportar todos tus depósitos en nuestra pagina web. Llenando un formulario correspondiente a tu ticket de deposito/transferencia.",
      keywords: "reportar deposito para recargar saldo, cuentas bancarias planetaemx, cuentas bancarias recargaki, planetaemx, recargaki",
      ogtitle: "recarga5g.com - Reporte de deposito y transferencias Recargaki/Planetaemxvía Web",
      ogdescription: "Si eres usuario de Recargaki o Planetaemx. Reportar todos tus depósitos en nuestra pagina web. Llenando un formulario correspondiente a tu ticket de deposito/transferencia.",
      slug: "recargaki"
    })
  }


}
