export interface metodosVentaModel {
    id: number;
    img: string;
    title1: string;
    description: string;
    modal: metodosModalModel[];
    list: indicacionesModalModel[]
    showModal?: boolean;
}


export interface metodosModalModel {
    imgModal: String;
    titleModal: string;
    descrptionModal: string;
}


export interface indicacionesModalModel {
    iconName: string;
    descriptionStep: string;
}

