export interface plataformaProductosModel {
    title: string;
    subtitle: string,
    options: listOptionsPlataformaModel[],
    imgApps?: appPlataformaModel[],
    images: productosImgPlataformasModel[],
  
}


export interface listOptionsPlataformaModel {
    iconName: string;
    description: string;
}

export interface productosImgPlataformasModel {
    img: string;
    label: string;
}

export interface appPlataformaModel {
    img: string;
    label: string;
    url: string;
}

