import { Injectable } from "@angular/core";
import { Meta } from "@angular/platform-browser";

@Injectable({
    providedIn: 'root'
  })
  export class MetaTagService {

    constructor(private meta: Meta) { }

    generateTags(tag: any): void {

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
    this.meta.updateTag( { name: 'title', content: tag.title});
    this.meta.updateTag( { name: 'description', content: tag.description});
    this.meta.updateTag( { name: 'keywords', content: tag.keywords});
    //* FAupdateTag
    this.meta.updateTag( { property: 'og:url', content: tag.url});
    this.meta.updateTag( { property: 'og:title', content: tag.title});
    this.meta.updateTag( { property: 'og:type', content: tag.type});
    this.meta.updateTag( { property: 'og:description', content: tag.description});
    this.meta.updateTag( { property: 'og:image', content: tag.image});
    //* TupdateTag
    this.meta.updateTag( { name: 'twitter:card', content: tag.card});
    this.meta.updateTag( { name: 'twitter:site', content: tag.url});
    this.meta.updateTag( { name: 'twitter:creator', content: tag.creator});
    this.meta.updateTag( { name: 'twitter:title', content: tag.title});
    this.meta.updateTag( { name: 'twitter:description', content: tag.description});
    this.meta.updateTag( { name: 'twitter:image', content: tag.image});
    
    }

    updateTags(tag: any): void {
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
      this.meta.updateTag( { property: 'title', content: tag.title});
      this.meta.updateTag( { property: 'description', content: tag.description});
      this.meta.updateTag( { property: 'keywords', content: tag.keywords});
      //* FAupdateTag
      this.meta.updateTag( { property: 'og:url', content: tag.url});
      this.meta.updateTag( { property: 'og:title', content: tag.title});
      this.meta.updateTag( { property: 'og:type', content: tag.type});
      this.meta.updateTag( { property: 'og:description', content: tag.description});
      this.meta.updateTag( { property: 'og:image', content: tag.image});
      //* TupdateTag
      this.meta.updateTag( { property: 'twitter:card', content: tag.card});
      this.meta.updateTag( { property: 'twitter:site', content: tag.url});
      this.meta.updateTag( { property: 'twitter:creator', content: tag.creator});
      this.meta.updateTag( { property: 'twitter:title', content: tag.title});
      this.meta.updateTag( { property: 'twitter:description', content: tag.description});
      this.meta.updateTag( { property: 'twitter:image', content: tag.image});
    }
  }