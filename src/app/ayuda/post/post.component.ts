import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { ContentfulService } from '@services/contentful.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  template: '<div [innerHTML]="somehtmlCode"> </div>',
  encapsulation: ViewEncapsulation.None,
})
export class PostComponent implements OnInit {

  id: any = '';
  post$: Observable<any> | undefined;


  constructor(private router: Router, private activatedRouter: ActivatedRoute, private contentful: ContentfulService, private readonly title: Title) { }

  ngOnInit(): void {

    this.title.setTitle('Recarga5g.com | Consulta nuestros artículos mas destacados');

    this.id = this.activatedRouter.snapshot.paramMap.get('id');
    this.post$ = this.contentful.getPost(this.id)
  }

}
