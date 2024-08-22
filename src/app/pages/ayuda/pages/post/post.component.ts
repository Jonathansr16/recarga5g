import { Component, Inject, OnInit, PLATFORM_ID, ViewEncapsulation, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { ContentfulService } from '@ayuda/services/contentful.service';
import { _countGroupLabelsBeforeOption } from '@angular/material/core';
import { MetaTagService } from '@core/services/meta-tag.service';
import { MatIconModule } from '@angular/material/icon';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { CommonModule } from '@angular/common';
import { MarkdownPipe } from '@core/pipes/markdown.pipe';


@Component({
  selector: 'app-post',
  standalone: true,
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  template: '<div [innerHTML]="somehtmlCode"> </div>',
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule,
    MatIconModule,
    ShareButtonsModule,
    MarkdownPipe,
  ]
 
})
export class PostComponent implements OnInit {

  id: any = '';
  post$: Observable<any> | undefined;

  private activatedRouter = inject( ActivatedRoute);
  private contentful = inject( ContentfulService );
  private readonly title = inject(Title);
  private readonly meta = inject(MetaTagService)

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
