
export interface CarouselApp {
    id: number;
    img:ImgCarousel
}


export interface ImgCarousel {
    lightUrl: string,
    darkUrl?: string;
    alt: string;
}