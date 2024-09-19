export interface MetodosVentaModel {
    id: number;
    img?: string;
    iconName?: string;
    title: string;
    description: string;
    modal: MetodosModalModel;
}


export interface MetodosModalModel {
    img: String;
    subTitle: string;
    descrption: string;
    list: IndicacionesModalModel[]
}


export interface IndicacionesModalModel {
    iconName: string;
    description: string;
}

