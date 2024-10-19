import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';

//* Modelos importados
import { metaTagModel } from '@core/interfaces/meta-tag.model';
import { registerStepsModel } from '@core/interfaces/register-steps-model';
import { ProductCarousel } from '@feature/components/carousel-productos/interfaces/product-carousel.interface';

//* Servicios importados
import { MetaTagService } from '@core/services/meta-tag.service';
import { ProductCarouselService } from '@feature/components/carousel-productos/services/product-carousel.service';
import { RegisterStepsService } from '@core/services/register-steps.service';

//*components
import { MetodoVentasComponent } from '@feature/components/metodo-ventas/metodo-ventas.component';
import { RegisterStepsComponent } from '@feature/components/register/register-steps.component';
import { ProductCarouselComponent } from '@feature/components/carousel-productos/product-carousel.component';

@Component({
  selector: 'app-pines',
  standalone: true,
  templateUrl: './pines.component.html',
  styleUrls: ['./pines.component.scss', '../consulta.component.scss'],
  imports: [
    CommonModule,
    ProductCarouselComponent,
    MetodoVentasComponent,
    RegisterStepsComponent
  ]
})
export default class PinesComponent implements OnInit{

  carouselPines = signal<ProductCarousel[]>([]);
  stepPines = signal<registerStepsModel[]>([]);

    //? META TAG
    tag: metaTagModel = {

      title: "Recarga5g.com | Consulta como vender tarjetas electrónicas Google play, Spotify, Netflix con excelentes comisiones",
      description: "Nuestras tarjetas de regalo Google Play, Spotify son el regalo perfecto para personas de todas las edades y gustos. Desde música y películas hasta juegos y aplicaciones, tus clientes podrán disfrutar de una amplia variedad de contenido digital con estas tarjetas",
      keywords: "como vender tarjetas de regalo, tarjeta de regalo, tarjeta de regalo amazon, pines electrónicos, como vender pines electrónicos, vender pines, vender pines electrónicos, google play, google play tarjetas, vender tarjetas de regalo, spotify",
      url: "recarga5g.com/consulta/pines",
      type: "website",
      image: "https://recarga5g.com/Venta-recargas.png",
      card: "summary_large_image",
      creator: "@recargascelular"
    }


    private readonly _productCarouselService = inject(ProductCarouselService);
    private readonly _stepService = inject( RegisterStepsService);
    private readonly _metaTagService = inject( MetaTagService);
    private readonly  title = inject( Title);

  ngOnInit(): void {
    
    this.title.setTitle('Recarga5g.com | Venta de tarjetas de regalo Google play, Amazon, Netflix')
    this._metaTagService.generateTags( {
      ...this.tag
    });

    this.carouselPines.set(this._productCarouselService.getPines());
    this.stepPines.set(this._stepService.getStepsPines());
  


  }


}



