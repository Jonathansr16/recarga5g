import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-repopagaqui',
  templateUrl: './repopagaqui.component.html',
  styleUrls: ['./repopagaqui.component.scss']
})
export class RepopagaquiComponent implements OnInit {

  constructor(private readonly title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Recarga5g.com | Reporta todos tus depósitos de Pagaqui a través de nuestra pagina web');
  }

}
