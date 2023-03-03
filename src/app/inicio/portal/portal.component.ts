import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Title } from '@angular/platform-browser';


//T-WRITER JS
// @ts-ignore
import Typewriter from 't-writer.js';


@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  @ViewChild('menuAbout') menuAbout?: ElementRef;

  constructor(@Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private plataform_id: Object,
    private readonly title: Title) { }

  ngOnInit(): void {
    this.title.setTitle(
      'Recarga5g.com | Vende tiempo aire, pago de servicios y pines hasta un 7% de comisión'
    );

    if (isPlatformBrowser(this.plataform_id)) {
      //DINAMIC TEXT
      const textDinamic = this.document.querySelector(
        '.home-text__dinamic'
      );

      const writter = new Typewriter(textDinamic, {
        loop: true,
        typeSpeed: 150,
        deleteSpeed: 150,
        typeColor: '--c-primary',
        cursorColor: '--c-primary',
      });

      writter
        .strings(
          400,
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
        )
        .start();
    }



    this.counterAnimation();
  }

  /* =========== OPEN NAV =========== */
  aboutAnimate() {
    const menu = this.menuAbout?.nativeElement;

    menu.classList.toggle("menuActive");

  }

  btnMetodo(): void {

    if (isPlatformBrowser(this.plataform_id)) {
     
      const metodoModal = this.document.querySelectorAll(".metodos-modal");
      const learMoreBtns = this.document.querySelectorAll(".btn-more");
      const productsCloseBtn = this.document.querySelectorAll(".modal-close-btn");
  
      var productModal: any = function (modalclick: any) {
        metodoModal[modalclick].classList.add('activeModal');
      }
  
      learMoreBtns.forEach((learMoreBtn, i) => {
        learMoreBtn.addEventListener("click", () => {
          productModal(i);
        });
      });
  
      productsCloseBtn.forEach((modalCloseBtn) => {
        modalCloseBtn.addEventListener("click", () => {
          metodoModal.forEach((ModelView) => {
            ModelView.classList.remove("activeModal");
          });
        });
      });
    }

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
