export interface Summary {
    total: number;
    confirmedCasesIndian: number;
    confirmedCasesForeign: number;
    discharged: number;
    deaths: number;
    confirmedButLocationUnidentified: number;
}

export interface UnofficialSummary {
    source: string;
    total: number;
    recovered: number;
    deaths: number;
    active: number;
}

export interface RegionalData {
    loc: string; 
    confirmedCasesIndian: number;
    confirmedCasesForeign: number;
    discharged: number;
    deaths: number;
    totalConfirmed: number;
}

export interface CovidDataResponse {
    summary: Summary;
    'unofficial-summary': UnofficialSummary[];
    regional: RegionalData[];
}
