export interface IICountry {
    name: string | undefined;
    topLevelDomain?: string[];
    alpha2Code?: string;
    alpha3Code?: string;
    callingCodes?: string[];
    capital: string | undefined;
    altSpellings?: string[];
    subregion?: string;
    region: string | undefined;
    population: number | undefined;
    latlng?: number[];
    demonym?: string;
    area?: number;
    timezones?: string[];
    borders?: string[];
    nativeName?: string;
    numericCode?: string;
    flags?: string | {
        svg: string | undefined;
        png: string | undefined;
    };
    currencies?: string |{
        code: string;
        name: string;
        symbol: string;
    }[];
    languages?: string | {
        iso639_1: string;
        iso639_2: string;
        name: string;
        nativeName: string;
    }[];
    translations?: {
        br: string;
        pt: string;
        nl: string;
        hr: string;
        fa: string;
        de: string;
        es: string;
        fr: string;
        ja: string;
        it: string;
        hu: string;
    };
    flag?: string;
    regionalBlocs?: {
        acronym: string;
        name: string;
    }[];
    cioc?: string;
    independent?: boolean;
}