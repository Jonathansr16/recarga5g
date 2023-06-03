import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AyudaRoutingModule } from '@ayuda/ayuda-routing.module';
import { MarkdownPipe } from '@core/pipes/markdown.pipe';

//AYUDA
import { ContactoComponent } from '@ayuda/pages/contacto/contacto.component';
import { FaqsComponent } from '@ayuda/pages/faqs/faqs.component';
import { BlogComponent } from '@ayuda/pages/blog/blog.component';
import { PostComponent } from '@ayuda/pages/post/post.component';

//PAGINATION
import {NgxPaginationModule} from 'ngx-pagination';
import { MaterialModule } from '@shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

@NgModule({
  declarations: [
    ContactoComponent,
    FaqsComponent,
    BlogComponent,
    PostComponent,
    MarkdownPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    AyudaRoutingModule,
    NgxPaginationModule,
    MaterialModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatInputModule,
    ShareButtonsModule.withConfig({
      debug: true
    }),
    ShareIconsModule
    

  ], 

})
export class AyudaModule { }
