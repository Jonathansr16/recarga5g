export interface plataformaProductos {
    title: string;
    subtitle: string,
    options: listOptionsPlataforma[],
    images: productosImgPlataformas[],
  
}


export interface listOptionsPlataforma {
    iconName: string;
    description: string;
}

export interface productosImgPlataformas {
    img: string;
    label: string;
}

