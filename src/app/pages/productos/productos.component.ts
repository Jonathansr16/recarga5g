import { Component, OnInit } from '@angular/core';
import { MetaTagService } from 'src/app/pages/services/meta-tag.service';

import { Autoplay, Swiper, EffectCards } from 'swiper'
// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Meta, Title } from '@angular/platform-browser';


SwiperCore.use([ Autoplay, EffectCoverflow, Pagination]);
SwiperCore.use([EffectCards]);


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private title: Title, private metaTag: MetaTagService) { 
    let t:string= "Nuestros Productos - Venta de recargas a cualquier compaña hasta 7.5% de comisión";
    this.title.setTitle(t);

    this.metaTag.generarTag({
      ogtitle: "Nuestros Productos - Venta de recargas a cualquier compaña hasta 7.5% de comisión ",
      description: "Recargas Electrónicas, Pago de Servicios, Tarjetas de regalo: Telcel, Virgin, CFE, Google Play, Netflix, Steam, etc .Todo lo que requieras para tu negocio!!",
      keywords: "recargas electronicas, recarga telcel, pagar servicio, pagar recibo telmex, tarjeta de regalo, Google Play",
      ogdescription: "Recargas Electrónicas, Pago de Servicios, Tarjetas de regalo: Telcel, Virgin, CFE, Google Play, Netflix, Steam, etc .Todo lo que requieras para tu negocio!!",
      slug: "productos"
    });

  }

  ngOnInit(): void {
      new Swiper('.swiper', {
     
      effect: 'cards',
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
      },
  });

}

}