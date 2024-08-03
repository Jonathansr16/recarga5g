import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";

@Component({
    selector:'app-register-steps',
    standalone: true,
    templateUrl: './register-steps.component.html',
    styleUrls: ['./register-steps.component.scss'],
    imports: [
        CommonModule
    ]
})
export class RegisterStepsComponent {
    
    step = input.required<any>();
}