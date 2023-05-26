import { Profile } from "linkedin-private-api"
import {
    LinkedInProfileCertification,
    LinkedInProfileCompany,
    LinkedInProfileEmploymentType,
    LinkedInProfileCourse,
    LinkedInProfileEducation,
    LinkedInProfileGeo,
    LinkedInProfileHonors,
    LinkedInProfileIndustry,
    LinkedInProfileLangauge,
    LinkedInProfileMemberRelationship,
    LinkedInProfileOrganization,
    LinkedInProfilePosition,
    LinkedInProfileProject,
    LinkedInProfileRegion,
    LinkedInProfileSchool,
    LinkedInProfileSkill,
    LinkedInProfilepositionGroup,
    LinkedInProfileConnections
} from "./subTypes";

export interface ProfileSearchFlags {
    connections?: boolean;
    geo?: boolean;
    contactInfo?: boolean;
    industry?: boolean;
    region?: boolean;
    certification?: boolean;
    course?: boolean;
    education?: boolean;
    employmentType?: boolean;
    honors?: boolean;
    language?: boolean;
    organization?: boolean;
    position?: boolean;
    positionGroup?: boolean;
    project?: boolean;
    skill?: boolean;
    company?: boolean;
    school?: boolean;
    connection?: boolean;
    memberRelationship?: boolean;
}


export interface ExtendedProfile extends Profile{
    geo?: LinkedInProfileGeo[];
    contactInfo?: LinkedInProfileIndustry[];
    companys?: LinkedInProfileCompany[];
    industrys?: LinkedInProfileIndustry[];
    regions?: LinkedInProfileRegion[];
    certifications?: LinkedInProfileCertification[];
    courses?: LinkedInProfileCourse[];
    educations?: LinkedInProfileEducation[];
    employmentTypes?: LinkedInProfileEmploymentType[];
    honors?: LinkedInProfileHonors[];
    languages?: LinkedInProfileLangauge[];
    organizations?: LinkedInProfileOrganization[];
    positions?: LinkedInProfilePosition[];
    positionGroups?: LinkedInProfilepositionGroup[];
    projects?: LinkedInProfileProject[];
    skills?: LinkedInProfileSkill[];
    schools?: LinkedInProfileSchool[];
    memberRelationships?: LinkedInProfileMemberRelationship[];
    connections?: LinkedInProfileConnection[];
    // connection?: LinkedInProfileConnection;
}

export const PROFILE_TYPE = "com.linkedin.voyager.dash.identity.profile.Profile";
export const GEO_TYPE = "com.linkedin.voyager.dash.common.Geo";
export const INDUSTRY_TYPE = 'com.linkedin.voyager.dash.common.Industry';
export const REGION_TYPE = 'com.linkedin.voyager.dash.common.Region';
export const CERTIFICATION_TYPE = 'com.linkedin.voyager.dash.identity.profile.Certification';
export const COURSE_TYPE = 'com.linkedin.voyager.dash.identity.profile.Course';
export const EDUCATION_TYPE = 'com.linkedin.voyager.dash.identity.profile.Education';
export const EMPLOYMENT_TYPE = 'com.linkedin.voyager.dash.identity.profile.EmploymentType';
export const HONOR_TYPE = 'com.linkedin.voyager.dash.identity.profile.Honor';
export const LANGUAGE_TYPE = 'com.linkedin.voyager.dash.identity.profile.Language';
export const ORGANIZATION_TYPE = 'com.linkedin.voyager.dash.identity.profile.Organization';
export const POSITION_TYPE = 'com.linkedin.voyager.dash.identity.profile.Position';
export const POSITION_GROUP_TYPE = 'com.linkedin.voyager.dash.identity.profile.PositionGroup';
export const PROJECT_TYPE = 'com.linkedin.voyager.dash.identity.profile.Project';
export const SKILL_TYPE = 'com.linkedin.voyager.dash.identity.profile.Skill';
export const COMPANY_TYPE = 'com.linkedin.voyager.dash.organization.Company';
export const SCHOOL_TYPE = 'com.linkedin.voyager.dash.organization.School';
export const CONNECTION_TYPE = 'com.linkedin.voyager.dash.relationships.Connection';
export const MEMBER_RELATIONSHIP_TYPE = 'com.linkedin.voyager.dash.relationships.MemberRelationship';
  

interface LinkedInProfileContactInfo {
    $type: 'com.linkedin.voyager.dash.identity.profile.ProfileGeoLocation';
    '*geo': string;
    $recipeTypes: string[];
    geoUrn: string;
}

interface LinkedInProfileConnections {
    
    
}
