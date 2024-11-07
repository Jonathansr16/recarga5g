export interface SalesChannel {
  readonly id: number;
  img: { src: string; alt: string };
  title: string;
  description: string;
  modalInfo: SalesChannelModal;
 /* [other: string]: any; --> index signature*/
}

interface SalesChannelModal {
  subTitle: string;
  description: string;
  listSteps: SalesChannelSteps[]
}

interface SalesChannelSteps {
  id: number;
  iconClassName: string;
  info: string;
}

