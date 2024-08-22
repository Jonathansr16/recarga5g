import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, inject, signal } from '@angular/core';
import { MetodosVentaService } from '@core/services/metodos-venta.service';
import { MetodosVentaModel } from '@core/models/metodos-venta.model';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-metodo-ventas',
  standalone: true,
  templateUrl: './metodo-ventas.component.html',
  styleUrls: ['./metodo-ventas.component.scss'],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
 

})
export class MetodoVentasComponent implements OnInit{

  metodoVentas: MetodosVentaModel[] = [];
  isOpenModal = signal<boolean>(false);

  isActiveModal = signal<number>(-1);


  private readonly _metodosService = inject( MetodosVentaService);
  private readonly dialog = inject(MatDialog);


 
  ngOnInit(): void {
    this.metodoVentas = this._metodosService.getmetodosVenta();
  }

  toggleModal(index: number) {
    
    this.isActiveModal.set(index);
  
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

