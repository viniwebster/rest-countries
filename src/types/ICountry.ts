export interface ICountry {
    flags: string
    name: string
    nativeName?: string
    population: number
    region: string
    subRegion?: string
    capital: string | undefined
    currencies?: string
    languages?: string
    topLevelDomain?: string
}