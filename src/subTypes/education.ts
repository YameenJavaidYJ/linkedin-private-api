export interface LinkedInProfileEducation {
    dateRange: DateRange;
    $anti_abuse_metadata: AntiAbuseMetadata;
    description: string;
    "*company": string;
    "*profileTreasuryMediaEducation": string;
    companyUrn: string;
    schoolUrn: string;
    entityUrn: string;
    standardizedFieldOfStudyUrn: null;
    schoolName: string;
    fieldOfStudy: string;
    degreeName: string;
    multiLocaleGrade: MultiLocaleGrade;
    $recipeTypes: string[];
    multiLocaleSchoolName: MultiLocaleSchoolName;
    $type: string;
    multiLocaleActivities: MultiLocaleActivities;
    activities: string;
    grade: string;
    "*school": string;
    multiLocaleFieldOfStudy: MultiLocaleFieldOfStudy;
    multiLocaleDescription: MultiLocaleDescription;
    multiLocaleDegreeName: MultiLocaleDegreeName;
    degreeUrn: null;
    
}

interface SourceUrns {
    "com.linkedin.common.urn.MemberUrn": string;
  }
  
interface AntiAbuseMetadata {
    "/schoolUrn"?: {
      sourceUrns: SourceUrns;
    };
    "/degreeUrn"?: {
      sourceUrns: SourceUrns;
    };
    "/fieldOfStudy"?: {
      sourceUrns: SourceUrns;
    };
    "/activities"?: {
      sourceUrns: SourceUrns;
    };
    "/companyUrn"?: {
      sourceUrns: SourceUrns;
    };
    "/entityUrn"?: {
      sourceUrns: SourceUrns;
    };
    "/standardizedFieldOfStudyUrn"?: {
      sourceUrns: SourceUrns;
    };
    "/grade"?: {
      sourceUrns: SourceUrns;
    };
    "/fieldOfStudyUrn"?: {
      sourceUrns: SourceUrns;
    };
    "/schoolName"?: {
      sourceUrns: SourceUrns;
    };
    "/degreeName"?: {
      sourceUrns: SourceUrns;
    };
    "/description"?: {
      sourceUrns: SourceUrns;
    };
}
  
interface Date {
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
  
interface MultiLocaleGrade {
    en_US: string;
}
  
interface MultiLocaleSchoolName {
    en_US: string;
}
  
interface MultiLocaleActivities {
    en_US: string;
}
  
interface MultiLocaleFieldOfStudy {
    en_US: string;
}
  
interface MultiLocaleDescription {
    en_US: string;
}
  
interface MultiLocaleDegreeName {
    en_US: string;
}