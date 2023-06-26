import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from '@ayuda/pages/contacto/contacto.component';
import { FaqsComponent } from '@ayuda/pages/faqs/faqs.component';
import { BlogComponent } from '@ayuda/pages/blog/blog.component';
import { PostComponent } from '@ayuda/pages/post/post.component';

const routes: Routes = [
     { path: 'faqs', component: FaqsComponent },
      { path: 'contacto', component: ContactoComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'blog/article/:id', component: PostComponent },
      { path: '**', redirectTo: '/Error/404'}
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AyudaRoutingModule { }
