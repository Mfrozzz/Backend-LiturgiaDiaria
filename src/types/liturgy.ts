export interface LiturgyResponse {
    data: string;
    liturgia: string;
    cor: LiturgicalColor;
    oracoes: Prayers;
    leituras: Readings;
    antifonas: Antiphons;
}

export interface Prayers {
    coleta: string;
    oferendas: string;
    comunhao: string;
}

export interface BiblicalReading {
    referencia: string;
    titulo: string;
    texto: string;
}

export interface Psalm {
    referencia: string;
    refrao: string;
    texto: string;
}

export interface Readings {
    primeiraLeitura: BiblicalReading[];
    segundaLeitura: BiblicalReading[];
    salmo: Psalm[];
    evangelho: BiblicalReading[];
    extras: any[];
}


export interface Antiphons {
    entrada: string;
    comunhao: string;
}

export type LiturgicalColor =
    | "Verde"
    | "Branco"
    | "Vermelho"
    | "Roxo"
    | "Rosa"
    | string;