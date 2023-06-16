import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { ContentfulService } from '@ayuda/services/contentful.service';
import { _countGroupLabelsBeforeOption } from '@angular/material/core';
import { MetaTagService } from '@core/services/meta-tag.service';
// import { metaTagModel } from '@core/models/meta-tag.model';

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

  constructor(private activatedRouter: ActivatedRoute, private contentful: ContentfulService, private readonly title: Title,
              private readonly meta: MetaTagService) { }

  ngOnInit(): void {

    this.title.setTitle('Recarga5g.com | Consulta nuestros artículos mas destacados');

    this.id = this.activatedRouter.snapshot.paramMap.get('id');
    this.post$ = this.contentful.getPost(this.id);
    this.post$?.subscribe(data => {
      
      this.meta.generateTags({
        title: data.fields.title,
        description: data.fields.summary,
        keywords: data.fields.category,
        url: `recarga5g.com/blog/article/${data.sys.id}`,
        type: 'article',
        image: data.fields.imgArticle.fields.file.url,
        card: 'summary_large_image',
        creator: '@recargascelular',
      })
    })
  }

}
