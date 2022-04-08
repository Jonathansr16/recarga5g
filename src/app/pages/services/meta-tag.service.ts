import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaTagService {

  constructor(private meta: Meta) { }

  
  generarTag(config){

    config = {
      author: "Recargas Electrónicas",
      email: "tae.celular@gmail.com",
      robots: "index, follow",
      description: "",
      keywords: "",
      ogtitle: "",
      ogdescription: "",
      image: "https://recarga5g.com/logo_recargas-800x400.png",
      ogsite_name: "RECARGAS ELECTRÓNICAS MÉXICO",
      slug: "",
      ...config    
  }

    //Primary Meta Tag
    this.meta.updateTag({ name: 'author', content: config.author});
    this.meta.updateTag({ name: 'email', content: config.email});
    this.meta.updateTag({ name: 'robots', content: config.robots});
    this.meta.updateTag({ name: 'description', content: config.description, lang: "esp" });
    this.meta.updateTag({ name: 'keywords', content: config.keywords, lang: "esp" });
    this.meta.updateTag({ name: 'og:locale', content: "es_ES" });
  // Open Graph / Facebook 
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: `https://recarga5g.com/${config.slug}` });
    this.meta.updateTag({ property: 'og:site_name', content: config.ogsite_name});
    this.meta.updateTag({ property: 'og:title', content: config.ogtitle });
    this.meta.updateTag({ property: 'og:description', content: config.ogdescription });
    this.meta.updateTag({ property: 'og:image', content: config.image });
    this.meta.updateTag({ property: 'og:width', content: "800" });
    this.meta.updateTag({ property: 'og:height', content: "400" });
    // Twiiter
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:url',  content: `https://recarga5g.com/${config.slug}` });
    this.meta.updateTag({ name: 'twitter:title', content: config.ogtitle });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://recarga5g.com/logo_recargas-800x400.png' });
   
  }
}
