import { Component, ViewChild, ElementRef, Input, AfterViewInit, PLATFORM_ID, inject } from '@angular/core';


//*Librerias externas importadas
import { Swiper, Autoplay, Pagination, Navigation, SwiperOptions, EffectFade } from 'swiper';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-mobile-app',
    standalone: true,
    templateUrl: './mobile-app.component.html',
    styleUrls: [ './mobile-app.component.scss'],
    imports: [
        CommonModule
    ]
})
export class MobileAppComponent implements AfterViewInit{

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

    private readonly platform_id = inject(PLATFORM_ID);
 
        ngAfterViewInit(): void {
        this.carouselAppPlataformas();
    }

    carouselAppPlataformas(): void {
        if (isPlatformBrowser(this.platform_id)) {
            const app = this.carousel?.nativeElement;
            new Swiper(app, this.config);
        }
    }
}