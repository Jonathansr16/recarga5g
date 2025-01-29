import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, Renderer2, inject, input, signal, PLATFORM_ID } from '@angular/core';
import { MetodosVentaService } from 'src/app/services/metodos-venta.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SalesChannel } from 'src/app/interfaces/sales-channel';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-sales-method',
    templateUrl: './sales-method.component.html',
    styles: [``],
    imports: [
        CommonModule, RouterLink
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SalesMethodComponent implements OnInit, OnDestroy{

  customClass = input<string>();
  customClassModal = input<string>();
  customClassBtn = input<string>();
  customClassIcon = input<string>();

  metodoVentas: SalesChannel[] = [];
  isOpenModal = signal<boolean>(false);
  isActiveModal = signal<number>(-1);

private readonly renderer2= inject(Renderer2);
private readonly _metodosService = inject( MetodosVentaService);
private readonly platform_Id = inject(PLATFORM_ID);


  ngOnInit(): void {
    this.metodoVentas = this._metodosService.getmetodosVenta();
  }

  openModal(index: number) {
    if(isPlatformBrowser(this.platform_Id)) {
      this.renderer2.setStyle(document.body, 'overflow', 'hidden')
      this.isActiveModal.set(index);
    }
  }

  closeModal() {
    if(isPlatformBrowser(this.platform_Id)) {

      this.isActiveModal.set(-1);
      this.renderer2.removeStyle(document.body, 'overflow');
    }
  }

  ngOnDestroy(): void {
    if(isPlatformBrowser(this.platform_Id)) {
      this.renderer2.removeStyle(document.body, 'overflow')
    }

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

