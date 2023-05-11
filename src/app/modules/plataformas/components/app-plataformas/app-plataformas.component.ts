import { Component, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';


//*Librerias externas importadas
import { Swiper, Autoplay, Pagination, Navigation, SwiperOptions, EffectFade } from 'swiper';

@Component({
    selector: 'app-plataformas',
    templateUrl: './app-plataformas.component.html',
    styleUrls: [ './app-plataformas.component.scss'],
})
export class AppPlataformasComponent implements AfterViewInit{

    @ViewChild('carouselplataformas') carousel?: ElementRef;
    @Input () plataforma: any = {};

    //*Config for app plataformas
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

    ngAfterViewInit(): void {
        this.carouselAppPlataformas();
    }

    carouselAppPlataformas(): void {
        const app = this.carousel?.nativeElement;
        new Swiper(app, this.config);
    }
}