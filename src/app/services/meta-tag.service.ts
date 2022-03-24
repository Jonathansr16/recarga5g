import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaTagService {

  constructor(private meta: Meta) { }

  
  generarTag(config){

    config = {
      description: "",
      ogtitle: "Vende recargas electrónicas, paga servicios y tarjetas de regalo 7% de comisión",
      ogdescription: "Vende desde tu celular, computadora o vía SMS gratuito. Empieza a generar guanacias y nuevos clientes a tu negocio!!",
      keywords: "recargas electrónicas, pago de servicios, telcel, tarjetas de regalo, pines electronicos",
      image: "https://recarga5g.com/logo_recargas-800x400.png",
      slug: "",
      ...config    
  }

    //Primary Meta Tag
    this.meta.updateTag({ property: "description", content: config.description, lang: "esp" });
    this.meta.updateTag({ property: "keywords", content: config.keywords, lang: "esp" });
    this.meta.updateTag({ property: "og:locale", content: "es_ES" });
  // Open Graph / Facebook 
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: `https://recarga5g.com/#/${config.slug}` });
    this.meta.updateTag({ property: 'og:title', content: config.ogtitle });
    this.meta.updateTag({ property: 'og:description', content: config.ogdescription });
    this.meta.updateTag({ property: 'og:image', content: config.image });
    this.meta.updateTag({ property: 'og:width', content: "800" });
    this.meta.updateTag({ property: 'og:height', content: "400" });
    // Twiiter
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:url', content: 'https://recarga5g.com/#/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Vende recargas electrónicas, paga servicios y tarjetas de regalo 7% de comisión' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://recarga5g.com/logo_recargas-800x400.png' });
   
  }
}
