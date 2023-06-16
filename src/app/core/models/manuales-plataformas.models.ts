
export interface manualesModel {
    title: string;
    subtitle: string;
    description: string;
    btns: actionsModel[];
}

export interface actionsModel {
    iconBtn: string;
    titleBtn: string;
    url: string;
}