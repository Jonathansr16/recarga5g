import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { MetodosVentaService } from '@core/services/metodos-venta.service';
import { MetodosVentaModel } from '@core/interfaces/metodos-venta.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-metodo-ventas',
  standalone: true,
  templateUrl: './metodo-ventas.component.html',
  styleUrls: ['./metodo-ventas.component.scss'],
  imports: [
    CommonModule,
 
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
 

})
export class MetodoVentasComponent implements OnInit{

  metodoVentas: MetodosVentaModel[] = [];
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

