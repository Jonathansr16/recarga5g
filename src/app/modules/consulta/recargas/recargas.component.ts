import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { productoModel } from '@core/models/productos.model';
import { registerSteps } from '@core/models/register-steps-model';
import { ProductosService } from '@core/services/productos.service';
import { RegisterStepsService } from '@core/services/register-steps.service';

@Component({
  selector: 'app-recargas',
  templateUrl: './recargas.component.html',
  styleUrls: ['./recargas.component.scss', '../consulta.component.scss'],
  providers: [ProductosService]
})
export class RecargasComponent implements OnInit {

  @ViewChild('recargasSwiper')tae?: ElementRef;
  recargas: productoModel[] = [];
  stepRecargas: registerSteps[] = [];


  constructor(private readonly _recargasService: ProductosService,
              private readonly _stepRecargasService: RegisterStepsService) {}

    ngOnInit(): void {
        this.recargas= this._recargasService.getRecargas();
        this.stepRecargas = this._stepRecargasService.getStepsRecargas();
    }



 
}
