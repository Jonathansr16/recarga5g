import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-manuales',
  standalone: true,
  templateUrl: './manuales.component.html',
  styleUrls: ['./manuales.component.scss'],
  imports: [
    MatIconModule,
    
  ]
})
export class ManualesComponent {

  @Input() manuales: any = {};
}
