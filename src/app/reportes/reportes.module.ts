import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RepopagaquiComponent } from './repopagaqui/repopagaqui.component';
import { RepoplanetaemxComponent } from './repoplanetaemx/repoplanetaemx.component';
import { ReportesRoutingModule } from './reportes-routing.module';


@NgModule({
  declarations: [
    RepopagaquiComponent,
    RepoplanetaemxComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule
  ]
})
export class ReportesModule { }
