import { Component, Input } from "@angular/core";

@Component({
    selector:'app-register-steps',
    templateUrl: './register-steps.component.html',
    styleUrls: ['./register-steps.component.scss'],
})
export class RegisterStepsComponent {
    
    @Input() step: any;
}