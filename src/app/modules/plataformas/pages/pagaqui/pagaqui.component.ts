import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PlataformasService, services } from '@core/services/plataformas.service';

@Component({
  selector: 'app-pagaqui',
  templateUrl: './pagaqui.component.html',
  styleUrls: ['./pagaqui.component.scss']
})
export class PagaquiComponent {

  @ViewChild('videoPagaqui') video?: ElementRef;
  public btnVideo: boolean = false;
  services: services[] = [];


  
  constructor(private readonly renderer2: Renderer2,  
    private readonly plataformaService: PlataformasService,
    private readonly title: Title) { }

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
