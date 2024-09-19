
export interface productoModel {
    item: productosModel[];
}

export interface productosModel {
    id?: number,
    company: string,
    url: string,
    label: string;
    category?: string;
    idCategory: 1 | 2 | 3;
}

export interface ImgProducto {
    url: string;
    label: string;
    categoria: string;
}