import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ContentfulService } from '@ayuda/services/contentful.service';
import { metaTagModel } from '@core/models/meta-tag.model';
import { MetaTagService } from '@core/services/meta-tag.service';
import {  Entry } from 'contentful';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts$: Entry<any>[] = [];
  p: number = 1;
  article: Observable<any> | undefined;
 
  //? META TAG
  tag: metaTagModel = {
    title: 'Recarga5g.com | Blog, Lee nuestros artículos mas recientes y destacados',
    description: 'A continuación podrás consultar nuestros artículos que publicamos periódicamente para que siempre te mantengas al tanto sobre promociones, avisos sobre tecnologías, compañía de telefonía y mucho mas!',
    keywords: 'Promociones Telcel, Promociones Bait, Avisos Recarga5g.com, Blog Recarga5g.com, Recarga5g, Recarga5g.com, articulos Recarga5g.com',
    url: 'recarga5g.com/ayuda/blog',
    type: 'website',
    image: '/assets/img/Venta-recargas.png',
    card: 'summary_large_image',
    creator: '@recargascelular',
  }
 
  constructor(private contenfulService: ContentfulService, private readonly title: Title, private readonly meta: MetaTagService) { }

  ngOnInit(): void {
    this.title.setTitle('Recarga5g.com | Consulta nuestros artículos mas recientes');
    
    this.contenfulService.getPosts().then((posts: any) => {
      this.posts$= posts
      console.log(posts)
    });

    this.meta.generateTags({
      ...this.tag
    })


   

  }



}
