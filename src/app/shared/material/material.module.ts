import { NgModule } from '@angular/core';

//* Module components of Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

const MaterialComponents = [
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
]

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})


export class MaterialModule { }
