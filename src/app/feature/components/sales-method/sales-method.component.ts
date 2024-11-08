import { ChangeDetectionStrategy, Component, OnInit, inject, input, signal } from '@angular/core';
import { MetodosVentaService } from '@core/services/metodos-venta.service';
import { CommonModule } from '@angular/common';
import { SalesChannel } from '@core/interfaces/sales-channel';

@Component({
  selector: 'app-sales-method',
  standalone: true,
  templateUrl: './sales-method.component.html',
  styleUrls: ['./sales-method.component.scss'],
  imports: [
    CommonModule,
 
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
 

})
export class SalesMethodComponent implements OnInit{

  titleChannel = input.required<string>();
  metodoVentas: SalesChannel[] = [];
  isOpenModal = signal<boolean>(false);

  isActiveModal = signal<number>(-1);


  private readonly _metodosService = inject( MetodosVentaService);


  ngOnInit(): void {
    this.metodoVentas = this._metodosService.getmetodosVenta();
  }

  openModal(index: number) {
    
    this.isActiveModal.set(index);
  }

  closeModal() {
    this.isActiveModal.set(-1);
  }

// toggleDialog(temlateRef: TemplateRef<any>): void {
  
//     this.dialog.open(temlateRef, {
//       width: '550px',
//       panelClass: 'panelModal',
//       enterAnimationDuration:  '0ms',
//       exitAnimationDuration: '0ms',

//     })
  
// }
}

