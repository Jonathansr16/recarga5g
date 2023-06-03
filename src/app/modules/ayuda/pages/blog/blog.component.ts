import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ContentfulService } from '@ayuda/services/contentful.service';
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
 
 
  constructor(private contenfulService: ContentfulService, private readonly title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Recarga5g.com | Consulta nuestros artículos mas recientes');
    
    this.contenfulService.getPosts().then((posts: any) => {
      this.posts$= posts

    });
   

  }



}
