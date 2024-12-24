
export interface ProductCarousel {
    id: number,
    typeService: 'Recargas' | 'Servicios' | 'Pines';
    company: string;
    img: ImgCarousel
}

export interface ImgCarousel {
    id: number;
    src: string;
    alt: string;
}