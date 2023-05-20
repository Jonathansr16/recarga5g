import { Component, ElementRef,  OnInit,  QueryList, ViewChild, ViewChildren, AfterViewInit, OnDestroy, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ContentfulService } from '@ayuda/services/contentful.service';
import { FaqsService, faqHead } from '@ayuda/services/faqs.service';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
  providers: [ContentfulService, FaqsService]
})
export class FaqsComponent implements OnInit, AfterViewInit, OnDestroy {

  public activeMenu?: boolean;


  @ViewChild('autocompleteInput') _autocompleteInput?: ElementRef;
  @ViewChild('autocompleteUl') _autocompleteUl?: ElementRef;
  @ViewChildren('autocompleteLi') _autocompleteLi? : QueryList<ElementRef>
  panelOpenState = false;
  item: number =0;
  
  itemFaq: faqHead[] = [];

  // filteredOptions?: Observable<faqHead[]>
  // formControl = new FormControl('');

  constructor( private titleFaq: FaqsService,private readonly renderer2: Renderer2, private readonly title: Title) { }

  ngOnInit(): void {

    this.title.setTitle('Recarga5g.com | Consulta las preguntas mas frecuentes y resuelve todas tus dudas para vender recargas, pago de servicios y pines electrónicos');
   this.itemFaq= this.titleFaq.gettitleFaqs();


    // this.filteredOptions = this.formControl.valueChanges.pipe(
    //   startWith(''), map(value => this._FILTER(value || ''))
    // )
  }

  // private _FILTER(value: string): faqHead[] {
  //     const searchValue = value.toLocaleLowerCase();
    
  //     return this.itemFaq.filter(option =>  option.title.toLocaleLowerCase().includes(searchValue));
  // }

  ngAfterViewInit(): void {

       this.filterData();
  }

  ngOnDestroy(): void {

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
