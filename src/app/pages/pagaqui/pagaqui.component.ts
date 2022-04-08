import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetaTagService } from 'src/app/pages/services/meta-tag.service';

@Component({
  selector: 'app-pagaqui',
  templateUrl: './pagaqui.component.html',
  styleUrls: ['./pagaqui.component.css']
})
export class PagaquiComponent {

  constructor(private title: Title, private metaTag: MetaTagService) { 

    let titlePagaqui: string= "recarga5g.com | Reporte de deposito Pagaqui vía Web";
    this.title.setTitle(titlePagaqui);

    this.metaTag.generarTag( {
      description: "Si eres usuario de Pagaqui. Reportar todos tus depósitos en nuestra pagina web. Llenando un formulario correspondiente a tu ticket de deposito/transferencia",
      keywords: "reportar deposito para recargar saldo, cuentas bancarias pagaqui, pagaqui",
      ogtitle: "recarga5g.com | Reporte de deposito Pagaqui vía Web",
      ogdescription: "Si eres usuario de Pagaqui. Reportar todos tus depósitos en nuestra pagina web. Llenando un formulario correspondiente a tu ticket de deposito/transferencia",
      slug: "pagaqui"
    })
  }



}
