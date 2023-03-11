import { Component, OnInit } from '@angular/core';
import { PlataformasService, services } from '@services/plataformas.service';
import { Title } from '@angular/platform-browser';




@Component({
  selector: 'app-platplanetaemx',
  templateUrl: './platplanetaemx.component.html',
  styleUrls: ['./platplanetaemx.component.scss', '../plataformas.scss']
})
export class PlatplanetaemxComponent implements OnInit {

  services: services[] = [];

  constructor(private readonly plataformaService: PlataformasService, private readonly title: Title) { }

  ngOnInit(): void {
    this.services = this.plataformaService.getServices();

    this.title.setTitle('Recarga5g.com Recargaki/Planetaemx | Obten una comisión por cada deposito que reportes en la plataforma y genera ganacias extras a tu negocio');
  }



}
