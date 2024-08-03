import { Component, OnInit, inject } from '@angular/core';
import { MetodosVentaService } from '@core/services/metodos-venta.service';
import { MetodosVentaModel } from '@core/models/metodos-venta.model';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

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

})
export class MetodoVentasComponent implements OnInit{

  metodoVentas: MetodosVentaModel[] = [];
  isModalOpen: boolean = false;

  private readonly _metodosService = inject( MetodosVentaService);
  private readonly dialog = inject(MatDialog);



  ngOnInit(): void {
    this.metodoVentas = this._metodosService.getmetodosVenta();
  }


toggleDialog(temlateRef: any): void {
  
   
    this.dialog.open(temlateRef, {
      width: '450px',
      enterAnimationDuration:  '0ms',
      exitAnimationDuration: '0ms'
    })
  
}
}
