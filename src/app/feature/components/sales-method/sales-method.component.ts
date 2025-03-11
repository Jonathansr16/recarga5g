import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, Renderer2, inject, input, signal, PLATFORM_ID, viewChild, ElementRef, AfterViewInit, QueryList, viewChildren, ViewChildren } from '@angular/core';
import { MetodosVentaService } from 'src/app/services/metodos-venta.service';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { SalesChannel } from 'src/app/interfaces/sales-channel';
import { RouterLink } from '@angular/router';
import { count } from 'node:console';

@Component({
    selector: 'app-sales-method',
    templateUrl: './sales-method.component.html',
    styles: [``],
    imports: [
        CommonModule, 
        RouterLink,
        
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SalesMethodComponent implements OnInit, OnDestroy, AfterViewInit{

  customClass = input<string>();
  customClassModal = input<string>();
  customClassBtn = input<string>();
  customClassIcon = input<string>();
  customClassShadow = input<string>();

  metodoVentas: SalesChannel[] = [];
  isOpenModal = signal<boolean>(false);
  isActiveModal = signal<number>(-1);

  conter = 0;
// modals = viewChildren<QueryList<ElementRef>>('modalItems');
// btnOpenModals = viewChildren<QueryList<ElementRef>>('btnModals');

  // Obtener una lista de todos los modales
  @ViewChildren('modalItems') modals!: QueryList<ElementRef>;

  // Obtener una lista de todos los botones que abren los modales
  @ViewChildren('btnModals') btnOpenModals!: QueryList<ElementRef>;
  private unlistener: (() => void) | undefined;

private readonly renderer2= inject(Renderer2);
private readonly _metodosService = inject( MetodosVentaService);
private readonly platform_Id = inject(PLATFORM_ID);
private readonly document = inject(DOCUMENT);


  ngOnInit(): void {
    this.metodoVentas = this._metodosService.getmetodosVenta();
  }

  openModal(index: number) {
    if(isPlatformBrowser(this.platform_Id)) {

      const body = this.document.body;
      const currentOverflow = window.getComputedStyle(body).overflow;

      if (currentOverflow !== 'hidden') {
        this.renderer2.setStyle(body, 'overflow', 'hidden');
      }
      this.isActiveModal.set(index);
    }
  }

  closeModal() {
    if(isPlatformBrowser(this.platform_Id)) {

      const body = this.document.body;
      const currentOverflow = window.getComputedStyle(body).overflow;

      this.isActiveModal.set(-1);
      if (currentOverflow === 'hidden') {
        this.renderer2.removeStyle(body, 'overflow');    
      }
    }
  }

  handlerDialog() {


     this.unlistener = this.renderer2.listen('document', 'click', (e: Event) => {
     
    // Verificar si el clic ocurrió fuera de todos los modales
    const clickedOutsideModal = this.modals.toArray().every(
      modal => !modal.nativeElement.contains(e.target)
    );

    // Verificar si el clic ocurrió fuera de todos los botones que abren los modales
    const clickedOutsideButton = this.btnOpenModals.toArray().every(
      button => !button.nativeElement.contains(e.target)
    );

    // Si el clic ocurrió fuera de todos los modales y botones, cerrar el modal
    if (clickedOutsideModal && clickedOutsideButton) {
      this.closeModal();
    }
  
    });

        // this.renderer2.listen('document', 'click', (e: Event) => {
     
    //   if (
    //     e.target !== this.btnModal()?.nativeElement &&
    //     e.target !== this.modal()?.nativeElement
    //   ) {
    //       this.closeModal()
    //   }
    // });


  }

  ngAfterViewInit(): void {
    this.handlerDialog()
  }

  ngOnDestroy(): void {
    // if(isPlatformBrowser(this.platform_Id)) {
    //   this.renderer2.removeClass(this.document.body, 'blockScroll');
    // }

    if (this.unlistener) {
      this.unlistener();
    }

  }

 

}

