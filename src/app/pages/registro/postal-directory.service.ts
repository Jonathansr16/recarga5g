import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Address } from '../../interfaces/address.interface';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class PostalDirectoryService {
  constructor() {}

  private readonly http = inject(HttpClient);
  private readonly urlEndPoint = environment.dipomex.urlEndPoint;
  private readonly publicKey = environment.dipomex.publicKey;

  getDatabyZip(zip: number): Observable<Address> {
    const header = new HttpHeaders({
      APIKEY: this.publicKey,
    });
    return this.http.get<Address>(`${this.urlEndPoint}?cp=${zip}`, {
      headers: header,
    }).pipe(
      catchError( (err: HttpErrorResponse) => {
      
        console.error('Error al obtener los datos del código postal:', err.error.message);
        return throwError(() => new Error('No se pudo obtener la información. Intente nuevamente.'));
      })
    )
  }

  stateofCountry = [
    {
      id: 1,
      state: 'Aguascalientes',
    },
    {
      id: 2,
      state: 'Baja California',
    },
    {
      id: 3,
      state: 'Baja California Sur',
    },
    {
      id: 4,
      state: 'Campeche',
    },
    {
      id: 5,
      state: 'Chiapas',
    },
    {
      id: 6,
      state: 'Chihuahua',
    },
    {
      id: 7,
      state: 'Coahuila de Zaragoza',
    },
    {
      id: 8,
      state: 'Colima',
    },
    {
      id: 9,
      state: 'Ciudad de México',
    },
    {
      id: 10,
      state: 'Durango',
    },
    {
      id: 11,
      state: 'Guanajuato',
    },
    {
      id: 12,
      state: 'Guerrero',
    },
    {
      id: 13,
      state: 'Hidalgo',
    },
    {
      id: 14,
      state: 'Jalisco',
    },
    {
      id: 15,
      state: 'Mexico',
    },
    {
      id: 16,
      state: 'Michoacan de Ocampo',
    },
    {
      id: 17,
      state: 'Morelos',
    },
    {
      id: 18,
      state: 'Nayarit',
    },
    {
      id: 19,
      state: 'Nuevo Leon',
    },
    {
      id: 20,
      state: 'Oaxaca',
    },
    {
      id: 21,
      state: 'Puebla',
    },
    {
      id: 22,
      state: 'Queretaro de Arteaga',
    },
    {
      id: 23,
      state: 'Quintana Roo',
    },
    {
      id: 24,
      state: 'San Luis Potosi',
    },
    {
      id: 2,
      state: 'Sinaloa',
    },
    {
      id: 25,
      state: 'Sonora',
    },
    {
      id: 26,
      state: 'Tabasco',
    },
    {
      id: 27,
      state: 'Tamaulipas',
    },
    {
      id: 28,
      state: 'Tlaxcala',
    },
    {
      id: 29,
      state: 'Veracruz-Llave',
    },
    {
      id: 30,
      state: 'Yucatan',
    },

    {
      id: 31,
      state: 'Zacatecas',
    },
  ];
}
