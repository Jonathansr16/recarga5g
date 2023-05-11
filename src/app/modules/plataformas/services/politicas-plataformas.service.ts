import { Injectable } from "@angular/core";
import { condicionesPlataformas } from "@core/models/politicas-plataformas.model";

Injectable
export class PoliticasPlataformasService {

    politicas: condicionesPlataformas[] = [


        {
            condicion: 'Si el pago se reporta en la plataforma fuera del horario establecido, el pago se reflejará en el siguiente horario hábil de manera automática si los datos son correctos.'
        },

        {
            condicion: 'Depósitos realizados a las cuentas vigentes'
        },

        {
            condicion: 'Depósitos del mes anterior notificados a principios del mes actual serán aplicados en lapso de 24 a 48hrs.'
        },

        {
            condicion: 'epósitos del mes anterior notificados después de los primeros días del mes actual serán aplicados hasta final de mes.'
        },

        {
            condicion: 'Depósitos mínimos de $100'
        },

        {
            condicion: 'Las transferencias por cuestiones fiscales los montos deberán ser menores o igual a $1,900 por transferencia.'
        },

        {
            condicion: 'Transferencias mayores a $1,900 reportados en Pagaqui, estos deberán llenar y entregar cierta documentación, su aplicación será realizado en lapso de 1 o 2 semanas aproximadamente.'
        }
    ];


    getPoliticas(): condicionesPlataformas[] {
        return this.politicas;
    }


}






