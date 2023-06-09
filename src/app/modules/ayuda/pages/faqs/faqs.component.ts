import { Component, ElementRef,  OnInit,  QueryList, ViewChild, ViewChildren, AfterViewInit, Renderer2 } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { ContentfulService } from '@ayuda/services/contentful.service';
import { FaqsService, faqHead } from '@ayuda/services/faqs.service';
import { metaTagModel } from '@core/models/meta-tag.model';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
  providers: [ContentfulService, FaqsService]
})
export class FaqsComponent implements OnInit, AfterViewInit {

  @ViewChild('autocompleteInput') _autocompleteInput?: ElementRef;
  @ViewChild('autocompleteUl') _autocompleteUl?: ElementRef;
  @ViewChildren('autocompleteLi') _autocompleteLi? : QueryList<ElementRef>
  panelOpenState = false;
  item: number =0;
  itemFaq: faqHead[] = [];

    //? META TAG
    tag: metaTagModel = {

      title: "Recarga5g.com | Preguntas frecuentes para vender recargas electrónicas con excelentes comisiones",
      description: "Asesórate con nosotros sobre como puede vender recargas electrónicas: Telcel, Bait Movistar y mucho mas!. Con excelentes comisiones",
      keywords: "Preguntas frecuentes, recarga5g.com, FAQS recargas",
      url: "recarga5g.com/ayuda/faqs",
      type: "website",
      image: "/assets/img/Venta-recargas.png",
      card: "summary_large_image",
      creator: "@recargascelular"
    }
  

  constructor( private titleFaq: FaqsService,private readonly renderer2: Renderer2, private readonly title: Title) { }

  ngOnInit(): void {

    this.title.setTitle('Recarga5g.com | Consulta las preguntas mas frecuentes y resuelve todas tus dudas para vender recargas, pago de servicios y pines electrónicos');
   this.itemFaq= this.titleFaq.gettitleFaqs();


  }


  ngAfterViewInit(): void {

       this.filterData();
  }
  /* =========== REDIRECT TITLE TO TITLE CONTENT =========== */
  inView(e: HTMLElement, index: number): void {

    e.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
    this.item = index;
  }

  /* =========== AUTOCOMPLETE SEARCH  =========== */
   filterData() {

      const list = this._autocompleteUl?.nativeElement;
      const input = this._autocompleteInput?.nativeElement;

      input?.addEventListener("keyup", (e: any) => {

        if (e.target.matches("#search")) {
         
          if (e.key === "Escape")e.target.value = ""

          this._autocompleteLi?.forEach(title => {
            const item = title.nativeElement;
            
            if (item.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
                          
                          this.renderer2.removeClass(item, 'dataFilter')
                        
                        } else {
                         this.renderer2.addClass(item, 'dataFilter');
                        }
          })
        }
       

      });


  }


}
