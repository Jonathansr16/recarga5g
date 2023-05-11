import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "@shared/material/material.module";
//* Components
import { CarouselProductosComponent } from "@feature/components/carousel-productos/carousel-productos.component";
import { MetodoVentasComponent } from "@feature/components/metodo-ventas/metodo-ventas.component";
import { ProductosFilterComponent } from "@feature/components/productos-filter/productos-filter.component";
import { AppRecargasComponent } from '@feature/components/app-recargas/app-recargas.component';
import { RegisterStepsComponent } from "./components/register/register-steps.component";

@NgModule({
    declarations: [
        CarouselProductosComponent,
        MetodoVentasComponent,
        ProductosFilterComponent,
        AppRecargasComponent,
        RegisterStepsComponent, 
    ],
    imports: [
        MaterialModule,
        CommonModule
    ],
    exports: [
        CarouselProductosComponent,
        MetodoVentasComponent,
        ProductosFilterComponent,
        AppRecargasComponent,
        RegisterStepsComponent,  
    ],
})

export class FeatureModule { }