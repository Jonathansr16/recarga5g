import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {

  public activeMenu?: boolean;
  activeUl: boolean = false;
  completeActive: boolean = false;

  @ViewChild('sidebarContainer') sidebarContainer?: ElementRef;


  constructor(@Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private readonly plataform_id: Object,
    private readonly title: Title) { }

  ngOnInit(): void {

    this.title.setTitle('Recarga5g.com | Consulta las preguntas mas frecuentes y resuelve todas tus dudas para vender recargas, pago de servicios y pines electrónicos');
    this.OpenScrollDropdown();
    this.filterData();
  }

  btnDropdown(): void {
    this.activeMenu = !this.activeMenu;

  }

  /* =========== REDIRECT TITLE TO TITLE CONTENT =========== */
  inView(e: HTMLElement): void {
    e.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  }


  /* =========== OPEN OR CLOSE DROPDOWN SCROLL SIDEBAR =========== */
  OpenScrollDropdown(): void {

    if (isPlatformBrowser(this.plataform_id)) {

      const titles = this.document.querySelectorAll('.faqs__h2');
      const sidebarSubtitle = this.document.querySelectorAll('.sidebar__title');

      const observer = new IntersectionObserver((entries, obj) => {

        entries.forEach((entry: any) => {
          if (entry.isIntersecting) {

            sidebarSubtitle.forEach(elemento => {

              const ul = elemento.nextElementSibling;
              ul?.classList.remove('activeDropdown');

              const att = elemento.getAttribute('data-title');

              if (att == entry.target.innerText) {

                ul?.classList.add('activeDropdown')
              }
            });

          }

        });
      }, {
        threshold: 1,
        rootMargin: '0px 0px -50% 0px'

      });

      titles.forEach(el => {

        observer.observe(el)
      });
    }



  }

  /* =========== AUTOCOMPLETE SEARCH  =========== */
  filterData() {

    if (isPlatformBrowser(this.plataform_id)) {

      const list = this.document.querySelector<HTMLElement>('.autocomplete-list');
      const input = this.document.querySelector<HTMLElement>("#input");
      input?.addEventListener("keyup", (e: any) => {

        if (e.target.matches("#input")) {

          if (e.key === "Espace") e.target.value = ""

          this.document.querySelectorAll(".autocomplete-list__li").forEach(title => {

            if (title.textContent?.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())) {
              title.classList.remove('dataFilter');
              list?.classList.add('autocomplete-filter');
            } else {
              title.classList.add('dataFilter');

            }

          })
        }

      });

    }

  }


}
