export interface LinkedInProfilePosition {
    dateRange: DateRange;
    multiLocaleCompanyName: MultiLocaleCompanyName;
    companyName: string;
    "*company": string;
    title: string;
    companyUrn: string;
    "*region": string;
    entityUrn: string;
    multiLocaleGeoLocationName: MultiLocaleGeoLocationName;
    shouldShowSourceOfHireBadge: boolean;
    locationName: string;
    "*profileTreasuryMediaPosition": string;
    multiLocaleTitle: MultiLocaleTitle;
    geoUrn: string;
    $recipeTypes: string[];
    $type: string;
    regionUrn: string;
    "*geo": string;
    geoLocationName: string;
    multiLocaleLocationName: MultiLocaleLocationName;
}

interface Date {
    month: number;
    year: number;
    $recipeTypes: string[];
    $type: string;
}
  
interface DateRange {
    start: Date;
    end: Date;
    $recipeTypes: string[];
    $type: string;
}
  
interface MultiLocaleCompanyName {
    en_US: string;
}
  
interface MultiLocaleGeoLocationName {
    en_US: string;
}
  
interface MultiLocaleTitle {
    en_US: string;
}
  
interface MultiLocaleLocationName {
    en_US: string;
}