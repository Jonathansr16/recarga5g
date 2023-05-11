import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-manuales',
  templateUrl: './manuales.component.html',
  styleUrls: ['./manuales.component.scss']
})
export class ManualesComponent {

  @Input() manuales: any = {};
}
