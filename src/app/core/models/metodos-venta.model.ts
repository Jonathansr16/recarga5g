export interface metodosVenta {
    id: number;
    img: string;
    title1: string;
    description: string;
    modal: metodosModal[];
    list: indicacionesModal[]
    showModal?: boolean;
}


export interface metodosModal {
    imgModal: String;
    titleModal: string;
    descrptionModal: string;
}


export interface indicacionesModal {
    iconName: string;
    descriptionStep: string;
}

