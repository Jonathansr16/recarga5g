import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FaqsComponent } from './faqs/faqs.component';
import { PostComponent } from './post/post.component';

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
