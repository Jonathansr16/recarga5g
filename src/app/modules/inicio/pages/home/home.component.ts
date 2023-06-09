import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

import { Title } from '@angular/platform-browser';

//* Servicios importados
import { RazonesService } from '@inicio/services/razones.service';
import { razonesModel } from '@core/models/razones.model';
import { NegocioService } from '@inicio/services/negocio.service';
import { negocioModel } from '@core/models/negocios.model';

//* Librerias externas usadas
//T-WRITER JS
// @ts-ignore
import Typewriter from 't-writer.js';

//*INTERFACES
import { metodosVenta } from '@core/models/metodos-venta.model';
import { MetodosVentaService } from '@core/services/metodos-venta.service';
import { registerSteps } from '@core/models/register-steps-model';
import { RegisterStepsService } from '@core/services/register-steps.service';
import { ProductosService } from '@core/services/productos.service';
import { productoModel } from '@core/models/productos.model';
import { MetaTagService } from '@core/services/meta-tag.service';
import { metaTagModel } from '@core/models/meta-tag.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [RazonesService, NegocioService]
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('productosSwiper') prodSwiper?: ElementRef;
  @ViewChild('menuAbout') menuAbout?: ElementRef;
  @ViewChild('textDinamic') textDinamico?: ElementRef;
  @ViewChildren('counter') counters?: QueryList<ElementRef>;

  showModal = false;
  item: razonesModel[] = [];
  negocios: negocioModel[] = [];
  metodosVenta: metodosVenta[] = [];
  stepsRegister: registerSteps[] = [];
  productos: productoModel[] = [];

  //? META TAG
 tag: metaTagModel = {
  title: 'Recarga5g.com | Vende tiempo aire, pago de servicios y pines hasta un 7.5% de comisión',
  description: 'Vende recargar a cualquier compañía telefónica hasta 7.5% de comisión fija, paga servicios de todos tus clientes y pines electrónicos. Telcel, Unefón, Izzi, CFE, Google Play, Spotify y muchos más!',
  keywords: "Venta de recargas, recargas electrónicas, recargas telefónicas, recargas telcel, recargas electronicas telcel, venta de recargas telcel, recargas electronicas 7.5% comision, comision 7.5, comision 7.5 por la venta de recargas, vender recargas, tiempo aire telcel, Telcel",
  url: 'recarga5g.com',
  type: 'website',
  image: '/assets/img/Venta-recargas.png',
  card: 'summary_large_image',
  creator: '@recargascelular'
 }

  constructor( 
    private readonly _productosService: ProductosService,  private readonly _razonesService: RazonesService, private readonly _negocioService: NegocioService,
    private readonly _metodosService: MetodosVentaService, private readonly _stepsService: RegisterStepsService,
    private readonly _metaTagService: MetaTagService,
    private readonly title: Title) { }

  ngOnInit(): void {
    this.title.setTitle(
      'Recarga5g.com | Vende tiempo aire, pago de servicios y pines hasta un 7.5% de comisión'
    );

    this.productos = this._productosService.getProductos();
    this.item = this._razonesService.getRazones();
    this.negocios = this._negocioService.getNegocios();
    this.metodosVenta = this._metodosService.getmetodosVenta();
    this.stepsRegister = this._stepsService.getStepsHome();

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

  ngAfterViewInit(): void {
   
    this.typewrite();
    this.counterAnimation();
  }


  //* INIT TYPE WRITTER
  typewrite(): void {

    const text = this.textDinamico?.nativeElement;
    const writter = new Typewriter(text,

      {
        loop: true,
        typeSpeed: 150,
        deleteSpeed: 150,
        typeColor: 'var(--c-primary)',
        cursorColor: 'var(--c-title)',
      });

    writter.strings(400,
      'Telcel',
      'Bait',
      'AT&T',
      'Movistar',
      'IZZI',
      'Telmex',
      'Google play',
      'Netflix',
      'Cinepolis VIP',
      'y muchos mas!!'
    ).start();

  }

  //* FUNCTION FOR OPEN MENU NAV
  aboutAnimate() {
    const menu = this.menuAbout?.nativeElement;
    menu.classList.toggle("menuActive");
  }

  //* FUNCTIONS FOR COUNTER RECORD SECTION
  counterAnimation(): void {

    const observer = new IntersectionObserver((entries, obj) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          let target = +entry.target.dataset.number;
          let number = entry.target;

          setTimeout(() => {
            this.updateCount(number, target);
          }, 400);
        }
      });

    },
      {
        threshold: .5,
        rootMargin: '0px 0px -50% 0px'
      });

    this.counters?.forEach(element => {
      const item = element.nativeElement;
      observer.observe(item)
    });


  }

  updateCount = (num: any, maxNum: number) => {
    let currentNum = +num.innerText;

    if (currentNum < maxNum) {
      num.innerText = currentNum + 10;

      setTimeout(() => {
        this.updateCount(num, maxNum);
      }, 4);
    }
  };


}
