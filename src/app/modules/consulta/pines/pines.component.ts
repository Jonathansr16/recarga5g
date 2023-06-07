import { Component, OnInit } from '@angular/core';
import { productoModel } from '@core/models/productos.model';
import { registerSteps } from '@core/models/register-steps-model';
import { ProductosService } from '@core/services/productos.service';
import { RegisterStepsService } from '@core/services/register-steps.service';

@Component({
  selector: 'app-pines',
  templateUrl: './pines.component.html',
  styleUrls: ['./pines.component.scss', '../consulta.component.scss']
})
export class PinesComponent implements OnInit{

  pines: productoModel[] = [];
  stepPines: registerSteps[] = [];
  constructor(private readonly _pinesService: ProductosService,
              private readonly _stepService: RegisterStepsService){ }

  ngOnInit(): void {
      this.pines = this._pinesService.getPines();
      this.stepPines = this._stepService.getStepsPines();
  }


}



