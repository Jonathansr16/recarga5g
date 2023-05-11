import { Injectable } from "@angular/core";
import { cuentasPagaqui, cuentasPlanetaemx } from "@core/models/cuentas-plataformas.model";


Injectable()
export class CuentasPlataformasService {


    private cuentasPagaqui: cuentasPagaqui[] = [

        {
            banco: "Bancomer",
            cuenta: "0192913968",
            clave: "012180001929139684",
          },
      
          {
            banco: "Banorte",
            cuenta: "0213093824",
            clave: "072180002130938244",
          },
      
          {
            banco: "Banco Azteca",
            cuenta: "01720106103960",
            clave: "127180001061039605",
          },
      
          {
            banco: "Santander",
            cuenta: "65505136201",
            clave: "014180655051362016",
          },
      
          {
            banco: "Bancoppel",
            cuenta: "16000000950",
            clave: "137180160000009501",
          },  
    ];

    private cuentasPlanetaemx: cuentasPlanetaemx[] = [

      {
        banco: "Bancomer (EFECTIVO/TRANS/PRACT)",
        cuenta: "0183899462",
        clave: "012180001838994622",
        nombre: "NEW VISION"
      },

      {
        banco: "Santander (REC EFEC)",
        cuenta: "65-50579269-2",
        clave: "014180655057926922",
        nombre: "NEW VISION TELECOMUNICACIONES SA DE CVÂ"
      },

      {
        banco: "OXXO-SCOTIABANK (EFECTIVO)",
        cuenta: "5579 2250 4100 8767",
        clave: "-",
        nombre: "SIST Y TEC KMX"
      },

      {
        banco: "SCOTIABANK (REC EFEC)",
        cuenta: "00105318518",
        clave: "-",
        nombre: "SIST Y DESAROLLOS TECN KMX"
      },

      {
        banco: "HSBC",
        cuenta: "4028255271",
        clave: "021180040282552714",
        nombre: "MASTERCEL"
      },

      {
        banco: "Banorte",
        cuenta: "0450151163",
        clave: "0072180004501511638",
        nombre: "MASARYKNEW VISION TELECOMUNICACIONES"
      },

      {
        banco: "Scotiabank (TRANSF)",
        cuenta: "001019053000",
        clave: "044180001019053004",
        nombre: "NEW VISION TELECOMUNICACIONES SA DE CV"
      },

      {
        banco: "Banco Azteca",
        cuenta: "01720125091385",
        clave: "127180001250913859",
        nombre: "WE SEND NUBE DIGITAL SA DE CV"
      },
    ]

    getCuentasPagaqui(): cuentasPagaqui[] {
        return this.cuentasPagaqui;
    }

    getCuentasPlanetaemx(): cuentasPlanetaemx[] {
      return this.cuentasPlanetaemx;
    }
} 
