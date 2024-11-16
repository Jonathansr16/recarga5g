import { Component, ViewChild, ElementRef, OnInit, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';

//* Modelos importados
import { metaTagModel } from '@core/interfaces/meta-tag.model';
import { registerStepsModel } from '@core/interfaces/register-steps-model';

//* Servicios importados
import { MetaTagService } from '@core/services/meta-tag.service';
import { ProductCarouselService } from '@feature/components/carousel-productos/services/product-carousel.service';
import { RegisterStepsService } from '@core/services/register-steps.service';

//*components
// import { ProductCarousel } from '@feature/components/carousel-productos/interfaces/product-carousel.interface';
import { ProductCarouselComponent } from '@feature/components/carousel-productos/product-carousel.component';
// import { MetodoVentasComponent } from '@feature/components/metodo-ventas/metodo-ventas.component';
// import { RegisterStepsComponent } from '@feature/components/register/register-steps.component';

@Component({
  selector: 'app-consulta-recargas',
  standalone: true,
  templateUrl: './consulta-recargas.component.html',
  styleUrls: ['./consulta-recargas.component.scss', '../consulta.component.scss'],
  imports: [
  //  ProductCarouselComponent,
  //   MetodoVentasComponent,
  //   RegisterStepsComponent
  ]
})
export default class ConsultaRecargasComponent implements OnInit {

  @ViewChild('recargasSwiper')tae?: ElementRef;
  
  // carouselRecargas = signal<ProductCarousel[]>([]);
  stepRecargas = signal<registerStepsModel[]>([]);

  //? META TAG
  tag: metaTagModel = {

    title: "Recarga5g.com | Como vender recargas electrónicas: Telcel, Bait, Movistar, Unefon",
    description: "Vende recargas telcel, bait, pillofon, con una pequeña inversión con grandes beneficios, para cualquier tipo de negocio,  registro totalmente gratuito",
    keywords: "como vender recargas, como vender recargas electrónicas, como vender recargas telefonicas, vende recargas telcel, venta de recargas, vender recargas, vender recarga telce, telcel, bait, recargas bait, como vender recargas bait, pillofon, como vender recargas pillofon",
    url: "recarga5g.com/consulta/recargas",
    type: "website",
    image: "https://recarga5g.com/Venta-recargas.png",
    card: "summary_large_image",
    creator: "@recargascelular"
  }

private readonly productCarouselService = inject(ProductCarouselService);
private readonly stepRecargasService = inject( RegisterStepsService);
private readonly metaTagService = inject( MetaTagService);
private readonly title = inject( Title);

    ngOnInit(): void {

      this.title.setTitle('Recarga5g.com | Como vender recargas en todas las compañias nacionales')

      // this.metaTagService.generateTags( {
      // ...this.tag
      // });

        // this.carouselRecargas.set( this.productCarouselService.getRecargas() );
        this.stepRecargas.set( this.stepRecargasService.getStepsRecargas() );
      }

}
