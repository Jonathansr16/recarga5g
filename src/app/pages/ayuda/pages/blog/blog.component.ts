import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { ContentfulService } from '@ayuda/services/contentful.service';
import { metaTagModel } from '@core/interfaces/meta-tag.model';
import { MetaTagService } from '@core/services/meta-tag.service';
import {  Entry } from 'contentful';
import { NgxPaginationModule } from 'ngx-pagination';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-blog',
  standalone: true,
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  imports: [
    CommonModule,
    RouterLink,
    MatIconModule,
    NgxPaginationModule
  ]
})
export default class BlogComponent implements OnInit {

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
    image: 'https://recarga5g.com/Venta-recargas.png',
    card: 'summary_large_image',
    creator: '@recargascelular',
  }
 
  private readonly contenfulService = inject( ContentfulService ); 
  private readonly title = inject( Title );
  private readonly meta = inject( MetaTagService );
  
  ngOnInit(): void {
    this.title.setTitle('Recarga5g.com | Consulta nuestros artículos mas recientes');
    
    this.contenfulService.getPosts().then((posts: any) => {
      this.posts$= posts
    });

    this.meta.generateTags({
      ...this.tag
    })


   

  }



}
