export interface LinkedInProfileCertification {
    dateRange: DateRange;
    $anti_abuse_metadata: AntiAbuseMetadata;
    "*company": string;
    companyUrn: string;
    multiLocaleAuthority: MultiLocaleAuthority;
    entityUrn: string;
    licenseNumber: string;
    displaySource: string;
    multiLocaleLicenseNumber: MultiLocaleLicenseNumber;
    $recipeTypes: string[];
    url: string;
    $type: string;
    authority: string;
    name: string;
    multiLocaleName: MultiLocaleName;
}

interface MultiLocaleName {
  en_US: string;
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
  
interface SourceUrns {
    "com.linkedin.common.urn.MemberUrn": string;
}
  
interface AntiAbuseMetadata {
    "/name"?: {
      sourceUrns: SourceUrns;
    };
    "/licenseNumber"?: {
      sourceUrns: SourceUrns;
    };
    "/companyUrn"?: {
      sourceUrns: SourceUrns;
    };
    "/url"?: {
      sourceUrns: SourceUrns;
    };
    "/displaySource"?: {
      sourceUrns: SourceUrns;
    };
    "/entityUrn"?: {
      sourceUrns: SourceUrns;
    };
    "/authority"?: {
      sourceUrns: SourceUrns;
    };
}
  
interface MultiLocaleAuthority {
    en_US: string;
}
  
interface MultiLocaleLicenseNumber {
    en_US: string;
}
  