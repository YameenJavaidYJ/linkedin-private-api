export interface LinkedInProfilepositionGroup {
    "*profilePositionInPositionGroup": string;
    dateRange: DateRange;
    multiLocaleCompanyName: MultiLocaleCompanyName;
    companyName: string;
    "*company": string;
    companyUrn: string;
    $recipeTypes: string[];
    $type: string;
    entityUrn: string;
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