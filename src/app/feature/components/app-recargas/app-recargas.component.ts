import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit, PLATFORM_ID, inject, signal, OnInit, input } from '@angular/core';

//*Librerias externas importadas
import { Swiper, Autoplay, Pagination, Navigation, SwiperOptions, EffectFade } from 'swiper';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { ThemesService } from '@core/services/themes.service';
import { CarouselApp } from './interface/app.interface';

@Component({
  selector: 'app-recargas',
  standalone: true,
  templateUrl: './app-recargas.component.html',
  styleUrls: ['./app-recargas.component.scss'],
  imports: [
    CommonModule,
    MatIconModule,
    MatRippleModule,
  ],
  
})
export class AppRecargasComponent implements AfterViewInit, OnInit {

  
@ViewChild('carouselApp') _carouselApp?: ElementRef;

  carouselImages = input.required<CarouselApp[]>()

  private readonly plataform_id = inject(PLATFORM_ID);
  private readonly themeService = inject(ThemesService);

 isDarkTheme = this.themeService.themeChange;

  //*Config of carousel App
  private config: SwiperOptions = {
    modules: [Navigation, Pagination, Autoplay, EffectFade],
    loop: true,
    effect: 'fade',
    grabCursor: true,
    slidesPerView: 1,
    autoplay: {
      delay: 1500,
    },

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.carouselApp();
  }


  //* INIT CAROUSEL APP
  carouselApp(): void {
    if (isPlatformBrowser(this.plataform_id)) {
      const carousel = this._carouselApp?.nativeElement;
      new Swiper(carousel, this.config)
    }

  }
}
