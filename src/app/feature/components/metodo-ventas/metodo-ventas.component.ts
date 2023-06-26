import { Component, OnInit, Inject, PLATFORM_ID,Renderer2 } from '@angular/core';
import { MetodosVentaService } from '@core/services/metodos-venta.service';
import { metodosVentaModel } from '@core/models/metodos-venta.model';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-metodo-ventas',
  templateUrl: './metodo-ventas.component.html',
  styleUrls: ['./metodo-ventas.component.scss'],

})
export class MetodoVentasComponent implements OnInit{


  metodoVentas: metodosVentaModel[] = [];
  isModalOpen: boolean = false;

  constructor(private _metodosService: MetodosVentaService, 
              @Inject(DOCUMENT) private document: Document, 
              private renderer2: Renderer2,
              @Inject(PLATFORM_ID) private plataform_id: Object) {}

  ngOnInit(): void {
    this.metodoVentas = this._metodosService.getmetodosVenta();
  }

  openDialog(item= {}): void{
    this.isModalOpen = true;
    this._metodosService.openModal(item);

this.blockScrollDocument();
  }

  closeDialog(item = {}): void {
    this.isModalOpen = false;
     this._metodosService.closeModal(item);
    
     this.unblockScrollDocument();
  }

  blockScrollDocument():void {
    if (isPlatformBrowser(this.plataform_id)) {
      this.renderer2.addClass(this.document.body, 'blockScrollModal')
       }
  }

  unblockScrollDocument():void {
    if (isPlatformBrowser(this.plataform_id)) {
      this.renderer2.removeClass(this.document.body, 'blockScrollModal')
    }
  }
}
