import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-repoplanetaemx',
  templateUrl: './repoplanetaemx.component.html',
  styleUrls: ['./repoplanetaemx.component.css']
})
export class RepoplanetaemxComponent implements OnInit {

  constructor(private readonly title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Recarga5g.com | Reporta todos tus depósitos de Recargaki/Planetaemx a través de nuestra pagina web')

  }

}
