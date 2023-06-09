import { Injectable } from "@angular/core";
import { Meta } from "@angular/platform-browser";

@Injectable({
    providedIn: 'root'
  })
  export class MetaTagService {

    constructor(private meta: Meta) { }

    generateTags(tag: any) {

     //? Limpiamos las meta tags existentes
    this.meta.removeTag('name= "title"');
    this.meta.removeTag('name= "description"');
    this.meta.removeTag('name= "keywords"');
    //* FACEBOOK
    this.meta.removeTag('property="og:url"');
    this.meta.removeTag('property="og:title"');
    this.meta.removeTag('property="og:type"');
    this.meta.removeTag('property="og:description"');
    this.meta.removeTag('property="og:image"');
    //* TWITTER
    this.meta.removeTag('name="twitter:card"');
    this.meta.removeTag('name="twitter:site"');
    this.meta.removeTag('name="twitter:creator"');
    this.meta.removeTag('name="twitter:title"');
    this.meta.removeTag('name="twitter:description"');
    this.meta.removeTag('name="twitter:image"');
 
    //? Generamos los nuevas meta tags
    this.meta.addTag( { property: 'title', content: tag.title});
    this.meta.addTag( { property: 'description', content: tag.description});
    this.meta.addTag( { property: 'keywords', content: tag.keywords});
    //* FACEBOOK
    this.meta.addTag( { property: 'og:url', content: tag.url});
    this.meta.addTag( { property: 'og:title', content: tag.title});
    this.meta.addTag( { property: 'og:type', content: tag.type});
    this.meta.addTag( { property: 'og:description', content: tag.description});
    this.meta.addTag( { property: 'og:image', content: tag.image});
    //* TWITTER
    this.meta.addTag( { property: 'twitter:card', content: tag.card});
    this.meta.addTag( { property: 'twitter:site', content: tag.url});
    this.meta.addTag( { property: 'twitter:creator', content: tag.creator});
    this.meta.addTag( { property: 'twitter:title', content: tag.title});
    this.meta.addTag( { property: 'twitter:description', content: tag.description});
    this.meta.addTag( { property: 'twitter:image', content: tag.image});
    }
  }