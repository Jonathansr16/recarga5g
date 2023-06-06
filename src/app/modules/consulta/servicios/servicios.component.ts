import { Component } from '@angular/core';
import { productoModel } from '@core/models/productos.model';
import { registerSteps } from '@core/models/register-steps-model';
import { ProductosService } from '@core/services/productos.service';
import { RegisterStepsService } from '@core/services/register-steps.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss','../consulta.component.scss']
})
export class ServiciosComponent {

  servicios: productoModel[] = [];
  registerServices: registerSteps[] = [];

  constructor(private readonly _servicios: ProductosService, private _register: RegisterStepsService) {
    this.servicios = this._servicios.getServicios();
    this.registerServices = this._register.getStepsServicios();
  }
}
