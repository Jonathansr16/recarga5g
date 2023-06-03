
export interface productoModel {
    item: productosModel[];
}

export interface productosModel {
    id?: number,
    company: string,
    url: string,
    src: string,
    label: string;
    category?: string;
}

