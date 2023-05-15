import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, QueryList, ViewChild, ViewChildren, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ContentfulService } from '@ayuda/services/contentful.service';
import { FaqsService, faqsModel } from '@ayuda/services/faqs.service';


@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
  providers: [ContentfulService, FaqsService]
})
export class FaqsComponent implements OnInit, AfterViewInit, OnDestroy {

  public activeMenu?: boolean;
  faqsTitle: faqsModel[] = [];
  faqsTitleSection: faqsModel[] = [];
  tituloSeleccionado: string = "";
  @ViewChild('autocompleteInput') _autocompleteInput?: ElementRef;
  @ViewChild('autocompleteUl') _autocompleteUl?: ElementRef;
  @ViewChildren('autocompleteLi') _autocompleteLi? : QueryList<ElementRef>
  panelOpenState = false;

  constructor(
   private faqsService: FaqsService, private readonly renderer2: Renderer2, private readonly title: Title) { }

  ngOnInit(): void {

    this.title.setTitle('Recarga5g.com | Consulta las preguntas mas frecuentes y resuelve todas tus dudas para vender recargas, pago de servicios y pines electrónicos');
    // this.OpenScrollDropdown();
      this.faqsTitleSection = this.faqsService.getTitlesSection();
    // this.faqsTitle = this.faqsService.getFaqs();

    
 
  }
  ngAfterViewInit(): void {
      this.gotoTitle();
      this.filterData();
  }

  ngOnDestroy(): void {
      
  }

  // btnDropdown(): void {
  //   this.activeMenu = !this.activeMenu;

  // }

  /* =========== REDIRECT TITLE TO TITLE CONTENT =========== */
  inView(e: HTMLElement): void {

    e.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });

  }

  gotoTitle() : void {
 
    this._autocompleteLi?.forEach(element => {
        
      const title = element.nativeElement;
       
        this.renderer2.listen(title, "click", () => {
        console.log(title);
          title.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
        })


    });
  }

  /* =========== OPEN OR CLOSE DROPDOWN SCROLL SIDEBAR =========== */
  // OpenScrollDropdown(): void {

  //   if (isPlatformBrowser(this.plataform_id)) {

  //     const titles = this.document.querySelectorAll('.faqs__h2');
  //     const sidebarSubtitle = this.document.querySelectorAll('.sidebar__title');

  //     const observer = new IntersectionObserver((entries, obj) => {

  //       entries.forEach((entry: any) => {
  //         if (entry.isIntersecting) {

  //           sidebarSubtitle.forEach(elemento => {

  //             const ul = elemento.nextElementSibling;
  //             ul?.classList.remove('activeDropdown');

  //             const att = elemento.getAttribute('data-title');

  //             if (att == entry.target.innerText) {

  //               ul?.classList.add('activeDropdown')
  //             }
  //           });

  //         }

  //       });
  //     }, {
  //       threshold: 1,
  //       rootMargin: '0px 0px -50% 0px'

  //     });

  //     titles.forEach(el => {

  //       observer.observe(el)
  //     });
  //   }



  // }

  /* =========== AUTOCOMPLETE SEARCH  =========== */
  filterData() {

      const list = this._autocompleteUl?.nativeElement;
      const input = this._autocompleteInput?.nativeElement;
      input?.addEventListener("keyup", (e: any) => {

        if (e.target.matches("#input")) {

          if (e.key === "Espace") e.target.value = ""

          this._autocompleteLi?.forEach(title => {
            const item = title.nativeElement;

            if (item.textContent?.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())) {
                          item.classList.remove('dataFilter');
                          list?.classList.add('autocomplete-filter');
                        } else {
                          item.classList.add('dataFilter');
            
                        }
          })

  //         this.document.querySelectorAll(".autocomplete-list__li").forEach(title => {
  // console.log(title);
  //           if (title.textContent?.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())) {
  //             title.classList.remove('dataFilter');
  //             list?.classList.add('autocomplete-filter');
  //           } else {
  //             title.classList.add('dataFilter');

  //           }

  //         })
        }

      });



  }


}
