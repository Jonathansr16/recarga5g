
export interface ProductCarousel {
    id: number,
    typeService: 'Recargas' | 'Servicios' | 'Pines';
    company: string;
    img: ProductImg
}

export interface ProductImg {
    src: string;
    alt: string;
}