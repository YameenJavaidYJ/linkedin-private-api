export interface LinkedInProfileProject {
    occupation?: ProfilePosition;
    multiLocaleTitle?: MultiLocaleTitle;
    dateRange?: DateRange;
    $anti_abuse_metadata?: AntiAbuseMetadata;
    description?: string;
    occupationUnion?: OccupationUnion;
    title?: string;
    $recipeTypes?: string[];
    url?: string;
    $type?: string;
    entityUrn?: string;
    contributors?: Contributors[];
    multiLocaleDescription?: MultiLocaleDescription;
}

interface ProfilePosition {
    "*profilePosition": string;
}
  
interface MultiLocaleTitle {
    en_US: string;
}
  
interface StartDate {
    month: number;
    year: number;
    $recipeTypes: string[];
    $type: string;
}
  
interface DateRange {
    start: StartDate;
    $recipeTypes: string[];
    $type: string;
}
  
interface SourceUrns {
    "com.linkedin.common.urn.MemberUrn": string;
}
  
interface AntiAbuseMetadata {
    "/url"?: {
      sourceUrns: SourceUrns;
    };
    "/entityUrn"?: {
      sourceUrns: SourceUrns;
    };
    "/title"?: {
      sourceUrns: SourceUrns;
    };
    "/description"?: {
      sourceUrns: SourceUrns;
    };
}
  
interface OccupationUnion {
    profilePosition: string;
}
  
interface StandardizedContributor {
    "*profile": string;
    $recipeTypes: string[];
    profileUrn: string;
    $type: string;
}
  
interface MultiLocaleName {
    en_US: string;
}
  
interface NonStandardizedContributor {
    name: string;
    multiLocaleName: MultiLocaleName;
    $recipeTypes: string[];
    $type: string;
}
  
interface Contributors {
    standardizedContributor?: StandardizedContributor;
    nonStandardizedContributor?: NonStandardizedContributor;
}
  
interface MultiLocaleDescription {
    en_US: string;
}