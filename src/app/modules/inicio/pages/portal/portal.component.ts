import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild, AfterViewInit, Renderer2, ViewChildren, QueryList } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Title } from '@angular/platform-browser';

//* Servicios importados
import { RazonesService } from '@inicio/services/razones.service';
import { razonesModel } from '@core/models/razones.model';
import { NegocioService } from '@inicio/services/negocio.service';
import { negocioModel } from '@core/models/negocios.model';


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
  @ViewChild('glideApp') glide?: ElementRef;
  
  item: razonesModel[] = [];
  negocios: negocioModel[] = [];
  showModal = false;


  constructor(private _razonesService: RazonesService, private _negocioService: NegocioService,
    private renderer2: Renderer2, @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private plataform_id: Object,
    private readonly title: Title,
  ) { }

  ngOnInit(): void {
    this.title.setTitle(
      'Recarga5g.com | Vende tiempo aire, pago de servicios y pines hasta un 7% de comisión'
    );
    this.item = this._razonesService.getRazones();
    this.negocios = this._negocioService.getNegocios();
  
    this.counterAnimation();

  }

  ngAfterViewInit(): void {
    this.typewrite();
    this.carouselApp();
  
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

  /* =========== OPEN NAV =========== */
  aboutAnimate() {
    const menu = this.menuAbout?.nativeElement;
    menu.classList.toggle("menuActive");
  }

   /* =========== CAROUSEL APP =========== */
   carouselApp():void {
      const glideContainer = this.glide?.nativeElement;

     
   }

  counterAnimation(): void {

    if (isPlatformBrowser(this.plataform_id)) {
      const record = this.document.querySelectorAll<HTMLElement>('.records-item__span');
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

      record.forEach(item => {
        observer.observe(item)
      });
    }

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
