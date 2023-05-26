export interface LinkedInProfileHonors {
    multiLocaleTitle: MultiLocaleTitle;
    $anti_abuse_metadata: AntiAbuseMetadata;
    description: string;
    occupationUnion: null;
    title: string;
    $recipeTypes: string[];
    issuer: string;
    issuedOn: Date;
    $type: string;
    entityUrn: string;
    multiLocaleIssuer: MultiLocaleIssuer;
    multiLocaleDescription: MultiLocaleDescription;
}

interface Date {
    month: number;
    year: number;
    $recipeTypes: string[];
    $type: string;
}
  
interface SourceUrns {
    "com.linkedin.common.urn.MemberUrn": string;
}
  
interface AntiAbuseMetadata {
    "/issuer"?: {
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
  
interface MultiLocaleTitle {
    en_US: string;
}
  
interface MultiLocaleIssuer {
    en_US: string;
}
  
interface MultiLocaleDescription {
    en_US: string;
}
  