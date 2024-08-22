import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-register-steps',
  standalone: true,
  template: `
    <div class="register-left">
      @for (item of step().item; track $index) {
      <div class="register-item">
        <img
          class="register-item__img"
          [src]="item.img"
          width="40"
          height="40"
          loading="lazy"
          [alt]="item.alt"
        />
        <p class="register-item__p headline-6">{{ item.description }}</p>
      </div>
      }
    </div>
  `,
  styleUrls: ['./register-steps.component.scss'],
  imports: [CommonModule],
})
export class RegisterStepsComponent {
  step = input.required<any>();
}
