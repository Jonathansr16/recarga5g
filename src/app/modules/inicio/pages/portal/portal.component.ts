import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

import { Title } from '@angular/platform-browser';

//* Servicios importados
import { RazonesService } from '@inicio/services/razones.service';
import { razonesModel } from '@core/models/razones.model';
import { NegocioService } from '@inicio/services/negocio.service';
import { negocioModel } from '@core/models/negocios.model';

import { Swiper, Autoplay, Pagination, Navigation, SwiperOptions, EffectFade } from 'swiper';
//* Librerias externas usadas
//T-WRITER JS
// @ts-ignore
import Typewriter from 't-writer.js';


@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
  providers: [RazonesService, NegocioService]
})
export class PortalComponent implements OnInit, AfterViewInit {

  @ViewChild('menuAbout') menuAbout?: ElementRef;
  @ViewChild('textDinamic') textDinamico?: ElementRef;
  @ViewChild('carouselApp') _carouselApp?: ElementRef;
  @ViewChildren('counter') counters?: QueryList<ElementRef>;

  item: razonesModel[] = [];
  negocios: negocioModel[] = [];
  showModal = false;

  //? CONFIG OF CAROUSEL APP
  private config: SwiperOptions = {
    modules: [Navigation, Pagination, Autoplay, EffectFade],
    loop: true,
    effect: 'fade',
    grabCursor: true,
    slidesPerView: 1,
    autoplay: {
      delay: 1500,
    },

  }

  constructor(private _razonesService: RazonesService, private _negocioService: NegocioService,
              private readonly title: Title) { }

  ngOnInit(): void {
    this.title.setTitle(
      'Recarga5g.com | Vende tiempo aire, pago de servicios y pines hasta un 7% de comisión'
    );
    this.item = this._razonesService.getRazones();
    this.negocios = this._negocioService.getNegocios();

  
  }

  ngAfterViewInit(): void {
    this.typewrite();
    this.mycarousel();
    this.counterAnimation();
  }

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

  //* INIT CAROUSEL APP
  mycarousel(): void {
    const carousel = this._carouselApp?.nativeElement;
    new Swiper(carousel, this.config)
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
