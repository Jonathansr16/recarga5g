import { NgModule } from '@angular/core';

import { RepopagaquiComponent } from '@reportes/pages/repopagaqui/repopagaqui.component';
import { RepoplanetaemxComponent } from '@reportes/pages/repoplanetaemx/repoplanetaemx.component';
import { ReportesRoutingModule } from '@reportes/reportes-routing.module';


@NgModule({
  declarations: [
    RepopagaquiComponent,
    RepoplanetaemxComponent
  ],
  imports: [
    ReportesRoutingModule
  ]
})
export class ReportesModule { }
