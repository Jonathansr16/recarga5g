import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Title } from '@angular/platform-browser';

//* Modelos importados
import { metaTagModel } from '@core/models/meta-tag.model';
import { productoModel } from '@core/models/productos.model';
import { registerStepsModel } from '@core/models/register-steps-model';

//* Servicios importados
import { MetaTagService } from '@core/services/meta-tag.service';
import { ProductosService } from '@core/services/productos.service';
import { RegisterStepsService } from '@core/services/register-steps.service';
import { CarouselProductosComponent } from '@feature/components/carousel-productos/carousel-products.component';
import { MetodoVentasComponent } from '@feature/components/metodo-ventas/metodo-ventas.component';
import { RegisterStepsComponent } from '@feature/components/register/register-steps.component';

@Component({
  selector: 'app-pines',
  standalone: true,
  templateUrl: './pines.component.html',
  styleUrls: ['./pines.component.scss', '../consulta.component.scss'],
  imports: [
    CommonModule,
    CarouselProductosComponent,
    MatIconModule,
    MetodoVentasComponent,
    RegisterStepsComponent
  ]
})
export default class PinesComponent implements OnInit{

  pines = signal<productoModel[]>([]);
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

    private readonly _pinesService = inject( ProductosService);
    private readonly _stepService = inject( RegisterStepsService);
    private readonly _metaTagService = inject( MetaTagService);
    private readonly  title = inject( Title);

  ngOnInit(): void {
    
    this.title.setTitle('Recarga5g.com | Venta de tarjetas de regalo Google play, Amazon, Netflix')
    this._metaTagService.generateTags( {
      ...this.tag
    });

    this.pines.set(this._pinesService.getPines());
    this.stepPines.set(this._stepService.getStepsPines());
  


  }


}



