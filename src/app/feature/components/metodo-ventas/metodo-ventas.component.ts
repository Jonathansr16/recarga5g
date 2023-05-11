import { Component, OnInit, Renderer2, ViewChildren, ViewChild, ElementRef, AfterViewInit, Inject, PLATFORM_ID, HostListener, QueryList, OnDestroy } from '@angular/core';

import { MetodosVentaService } from '@core/services/metodos-venta.service';
import { metodosVenta } from '@core/models/metodos-venta.model';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-metodo-ventas',
  templateUrl: './metodo-ventas.component.html',
  styleUrls: ['./metodo-ventas.component.scss'],
  providers: [MetodosVentaService]
})
export class MetodoVentasComponent implements OnInit, AfterViewInit, OnDestroy{

@ViewChildren('modal') modalItems?: QueryList<ElementRef> 

  metodoVentas: metodosVenta[] = [];
  iq: any[] = [];
  isModalOpen: boolean = false;
  private unListenMouse?: () => void;


  constructor(private _metodosService: MetodosVentaService, 
              private renderer2: Renderer2,
              @Inject(DOCUMENT) private document: Document, 
              @Inject(PLATFORM_ID) private plataform_id: Object) {}

  ngOnInit(): void {
    this.metodoVentas = this._metodosService.getmetodosVenta();
  }


  ngAfterViewInit(): void {
 
  }

  openDialog(item= {}){
    this.isModalOpen = true;
  this._metodosService.openModal(item);

  if (isPlatformBrowser(this.plataform_id)) {
     this.document.body.classList.add('blockScrollModal');
  }
  }

  ngOnDestroy(): void {
  this.closeDialog()
  }

  closeDialog(item = {}): void {
     this._metodosService.closeModal(item);
     this.document.body.classList.remove('blockScrollModal');
  }
}
