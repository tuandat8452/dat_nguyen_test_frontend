export type LANGUAGES = "fr" | "en";

export interface IMain {
  title: string;
  subtitle?: string;
}

interface ICaseItem {
  category: string;
  description: string;
  cta?: string;
  tagline: string;
}

export interface IBloc1 extends IMain {
  cases: ICaseItem[];
}

export interface IBloc2 extends IMain {
  btn_1: string[];
  btn_2: string[];
  btn_3: string;
  btn_4: string[];
  btn_5: string;
  btn_6: string;
}

export interface IBloc3 extends IMain {
  more_info: string;
  cases: ICaseItem[];
}

export interface IBloc4 extends IMain {
  text_title: string;
  text: string;
  pictos: { title: string; description: string }[];
}

export interface IBloc5 extends IMain {
  text: string;
  footer: string;
  reviews: {
    author: string;
    review: string;
    date: string;
  }[];
}

export interface IBloc6 extends IMain {
  text: string;
  button: string;
}

export interface IFooter {
  address: {
    name: string;
    phone: string;
    location: string;
  };
  links: {
    name: string;
    url: string;
  }[];
}

export interface IContent {
  bloc_1: IBloc1;
  bloc_2: IMain;
  bloc_2_2: IBloc2;
  bloc_3: IBloc3;
  bloc_4: IBloc4;
  bloc_5: IBloc5;
  bloc_6: IBloc6;
  footer: IFooter;
  banner_menu: string[];
  head_menu: string[];
}
