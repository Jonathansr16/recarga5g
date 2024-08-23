import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-contact-btn',
  standalone: true,
  templateUrl: './contact-btn.component.html',
  styleUrls: ['./contact-btn.component.scss'],
  imports: [
    CommonModule,
    MatTooltipModule
  ]
})
export class ContactBtnComponent {

  isFloatBtnActive = signal<boolean>(false);

  toggleBtnContact(): void {
    this.isFloatBtnActive.update( value => !value);
  }

}
