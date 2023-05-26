export interface LinkedInProfileLangauge {
    entityUrn: string;
    $anti_abuse_metadata: AntiAbuseMetadata;
    name: string;
    multiLocaleName: MultiLocaleName;
    $recipeTypes: string[];
    proficiency: null;
    $type: string;
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
}
  
interface MultiLocaleName {
    en_US: string;
}