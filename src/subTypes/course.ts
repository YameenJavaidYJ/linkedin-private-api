export interface LinkedInProfileCourse {
    occupation: Occupation;
    $anti_abuse_metadata: AntiAbuseMetadata;
    occupationUnion: OccupationUnion;
    $recipeTypes: string[];
    $type: string;
    number: null;
    entityUrn: string;
    name: string;
    multiLocaleName: MultiLocaleName;
}

interface SourceUrns {
    "com.linkedin.common.urn.MemberUrn": string;
}
  
interface AntiAbuseMetadata {
    "/name"?: {
      sourceUrns: SourceUrns;
    };
    "/number"?: {
      sourceUrns: SourceUrns;
    };
    "/entityUrn"?: {
      sourceUrns: SourceUrns;
    };
}
  
interface Occupation {
    "*profileEducation": string;
}
  
interface OccupationUnion {
    profileEducation: string;
}
  
interface MultiLocaleName {
    en_US: string;
}