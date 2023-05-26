export interface LinkedInProfileOrganization {
    occupation: Occupation;
    dateRange: DateRange;
    $anti_abuse_metadata: AntiAbuseMetadata;
    description: null;
    occupationUnion: OccupationUnion;
    $recipeTypes: string[];
    $type: string;
    entityUrn: string;
    name: string;
    multiLocaleName: MultiLocaleName;
    positionHeld: string;
    multiLocalePositionHeld: MultiLocalePositionHeld;
    multiLocaleDescription: null;
}

interface MultiLocaleName {
    en_US: string;
}
  
interface MultiLocalePositionHeld {
    en_US: string;
}

interface SourceUrns {
    "com.linkedin.common.urn.MemberUrn": string;
}
  
interface AntiAbuseMetadata {
    "/name"?: {
      sourceUrns: SourceUrns;
    };
    "/entityUrn"?: {
      sourceUrns: SourceUrns;
    };
    "/positionHeld"?: {
      sourceUrns: SourceUrns;
    };
    "/description"?: {
      sourceUrns: SourceUrns;
    };
}
  
interface Date {
    month: number;
    year: number;
    $recipeTypes: string[];
    $type: string;
}
  
interface DateRange {
    start: Date;
    $recipeTypes: string[];
    $type: string;
}
  
interface Occupation {
    "*profilePosition": string;
}
  
interface OccupationUnion {
    profilePosition: string;
}