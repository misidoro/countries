export interface Country {
  code: string;
  name: string;
  phone: string;
  continent: Continent;
  languages: Language[];
  emoji: string;
}

export interface Language {
  code: string;
  name: string;
}

export interface Continent {
  name: string;
}
