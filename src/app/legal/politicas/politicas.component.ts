import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-politicas',
  templateUrl: './politicas.component.html',
  styleUrls: ['./politicas.component.scss']
})
export class PoliticasComponent implements OnInit {

  constructor(private readonly title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Recarga5g.com | nuestras políticas para aplicacion de depósitos, recargas y pago de servicios')
  }

}
