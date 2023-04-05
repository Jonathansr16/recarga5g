import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@shared/material/material.module';
import { NofoundComponent } from '@components/nofound/nofound.component';

@NgModule({
  declarations: [
    NofoundComponent
  ],
  imports: [
    RouterModule, 
    MaterialModule,
  ], 
})
export class ComponentsModule { }
