import { Component, Input } from '@angular/core';

@Component({
    selector: "app-montos",
    templateUrl: 'montos.component.html',
    styleUrls: ['montos.component.scss']
})
export class MontosComponent {
    
    @Input() monto: any = {};
}