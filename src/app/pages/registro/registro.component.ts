import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetaTagService } from 'src/app/pages/services/meta-tag.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  constructor(private title: Title, private metaTag: MetaTagService) {

    let titleRegistro: string= "Registro - Regístrate totalmente gratis. Empieza a vender y generar ganancias a tu negocio ahora mismo!!";
    this.title.setTitle(titleRegistro);

    this.metaTag.generarTag( {
      description: "Regístrate y empieza a generar ganancias y mas clientes a tu negocio. Obtén una comisión hasta del 7.5% en la venta de recargas electrónicas, pago de servicios y pines electrónicos.",
      keywords: "venta de tiempo aire, vender recargas, recargas, recargas telefónicas, recargas electrónicas",
      ogtitle: "Registro - Regístrate totalmente gratis. Empieza a vender y generar ganancias a tu negocio ahora mismo!!",
      ogdescription: "Regístrate y empieza a generar ganancias y mas clientes a tu negocio. Obtén una comisión hasta del 7.5% en la venta de recargas electrónicas, pago de servicios y pines electrónicos.",
      slug: "registro"
    })
   }



}
