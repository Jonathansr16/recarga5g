import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  AfterViewInit,
  Renderer2,
  PLATFORM_ID,
  Inject,
  inject,
} from '@angular/core';

import { Title } from '@angular/platform-browser';
import { metaTagModel } from '@core/models/meta-tag.model';
import { MetaTagService } from '../../../../core/services/meta-tag.service';
import { isPlatformBrowser } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-faqs',
  standalone: true,
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
  imports: [
    MatIconModule,
    MatExpansionModule,
  ]
})
export default  class FaqsComponent implements OnInit, AfterViewInit {
  @ViewChild('autocompleteInput') _autocompleteInput?: ElementRef;
  @ViewChildren('autocompleteLi') _autocompleteLi?: QueryList<ElementRef>;
  panelOpenState = false;
  item: number = 0;

  //? META TAG
  tag: metaTagModel = {
    title:
      'Recarga5g.com | Preguntas frecuentes para vender recargas electrónicas con excelentes comisiones',
    description:
      'Asesórate con nosotros sobre como puede vender recargas electrónicas: Telcel, Bait Movistar y mucho mas!. Con excelentes comisiones',
    keywords: 'Preguntas frecuentes, recarga5g.com, FAQS recargas',
    url: 'recarga5g.com/ayuda/faqs',
    type: 'website',
    image: 'https://recarga5g.com/Venta-recargas.png',
    card: 'summary_large_image',
    creator: '@recargascelular',
  };


  private readonly renderer2 = inject( Renderer2);
  private readonly title = inject( Title);
  private readonly metaTagService = inject( MetaTagService);
  private platform_id = inject(PLATFORM_ID);

  ngOnInit(): void {
    this.title.setTitle(
      'Recarga5g.com | Consulta las preguntas mas frecuentes y resuelve todas tus dudas para vender recargas, pago de servicios y pines electrónicos'
    );

    this.metaTagService.generateTags({
      ...this.tag,
    });
  }

  ngAfterViewInit(): void {
    this.filterData();
  }
  /* =========== REDIRECT TITLE TO TITLE CONTENT =========== */
  inView(e: HTMLElement, index: number): void {
    if (isPlatformBrowser(this.platform_id)) {
      e.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
      this.item = index;
    }
  }

  scrollTitle(e: HTMLElement): void {
    if (isPlatformBrowser(this.platform_id)) {
      e.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
    }
  }
  /* =========== AUTOCOMPLETE SEARCH  =========== */
  filterData() {
    if (isPlatformBrowser(this.platform_id)) {
      const input = this._autocompleteInput?.nativeElement;

      this.renderer2.listen(input, 'keyup', (e: any) => {
        if (e.target.matches('#search')) {
          if (e.key === 'Escape') e.target.value = '';

          this._autocompleteLi?.forEach((title) => {
            const item = title.nativeElement;

            if (
              item.textContent
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
            ) {
              this.renderer2.removeClass(item, 'dataFilter');
            } else {
              this.renderer2.addClass(item, 'dataFilter');
            }
          });
        }
      });
    }
  }
}
