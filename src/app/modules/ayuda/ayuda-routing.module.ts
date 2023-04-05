import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from '@ayuda/pages/contacto/contacto.component';
import { FaqsComponent } from '@ayuda/pages/faqs/faqs.component';
import { BlogComponent } from '@ayuda/pages/blog/blog.component';
import { PostComponent } from '@ayuda/pages/post/post.component';

const routes: Routes = [
      { path: 'contacto', component: ContactoComponent },
      { path: 'faqs', component: FaqsComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'blog/article/:id', component: PostComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AyudaRoutingModule { }
