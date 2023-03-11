import { Component, ElementRef, OnInit, AfterViewInit, Renderer2, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

//SERVICES
import { PlataformasService, services } from '@services/plataformas.service';

@Component({
  selector: 'app-platpagaqui',
  templateUrl: './platpagaqui.component.html',
  styleUrls: ['./platpagaqui.component.scss', '../plataformas.scss']
})
export class PlatpagaquiComponent implements OnInit {

  @ViewChild('videoPagaqui') video?: ElementRef;
  public btnVideo: boolean = false;
  services: services[] = [];

  constructor(private readonly renderer2: Renderer2,  
    private readonly plataformaService: PlataformasService,
    private readonly title: Title) { }


  ngOnInit(): void {
    this.services = this.plataformaService.getServices();
    this.title.setTitle('Recarga5g.com Pagaqui | Obten una comisión por el monto de cada recarga que realices & empieza generar ganancias a tu negocio');
  }


  /* =========== OPEN VIDEO PAGAQUI =========== */
  openVideo(): void {
    this.btnVideo = true;

    const repVideo = this.video?.nativeElement;

    this.renderer2.setAttribute(repVideo, "src", "/assets/img/comision-pagaqui.mp4")
  }


  /* =========== CLOSE VIDEO PAGAQUI =========== */
  closeVideo(): void {
    this.btnVideo = false;

    const stopVideo = this.video?.nativeElement;

    this.renderer2.removeAttribute(stopVideo, "src")

  }

}
