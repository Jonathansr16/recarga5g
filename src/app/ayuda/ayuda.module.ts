import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AyudaRoutingModule } from './ayuda-routing.module';
import { MarkdownPipe } from '@pipes/markdown.pipe';

//AYUDA
import { ContactoComponent } from './contacto/contacto.component';
import { FaqsComponent } from './faqs/faqs.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';

//PAGINATION
import {NgxPaginationModule} from 'ngx-pagination';


// import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
// import { ShareIconsModule } from 'ngx-sharebuttons/icons';

@NgModule({
  declarations: [
    ContactoComponent,
    FaqsComponent,
    BlogComponent,
    PostComponent,
    MarkdownPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AyudaRoutingModule,
    NgxPaginationModule,
    // ShareButtonsModule.withConfig({
    //   debug: true,
    // }),
    // ShareIconsModule,
  ]
})
export class AyudaModule { }
