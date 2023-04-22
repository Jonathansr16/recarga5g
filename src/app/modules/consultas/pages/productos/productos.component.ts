import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';





@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit{

  // recargas: productos[] = [];
  // servicios: productos[] = [];
  // pines: productos[] = [];

  constructor(private readonly title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Vende recargas: Telcel, Bait, Unefon, Pago de servicios: IZZI, Telmex, Televia & pines electrónicos: Google play, Spotify, Netflix y muchos mas')

 
  }



}
