import { Client } from 'linkedin-private-api';
import { 
    ProfileSearchFlags, 
    ExtendedProfile
} from "./types";
import {
    PROFILE_TYPE,
    GEO_TYPE,
    INDUSTRY_TYPE,
    REGION_TYPE,
    CERTIFICATION_TYPE,
    COURSE_TYPE,
    EDUCATION_TYPE, 
    EMPLOYMENT_TYPE,
    HONOR_TYPE,
    LANGUAGE_TYPE,
    ORGANIZATION_TYPE,
    POSITION_TYPE,
    POSITION_GROUP_TYPE,
    PROJECT_TYPE,
    SKILL_TYPE,
    COMPANY_TYPE,
    SCHOOL_TYPE,
    CONNECTION_TYPE,
    MEMBER_RELATIONSHIP_TYPE 
} from "./types"
import { Profile, LinkedInProfile } from 'linkedin-private-api';
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
} from "./subTypes";
require('dotenv').config();

export class ExtendedProfileRepository{
    private client: Client;
    
    constructor({ client }: { client: Client }) {
        this.client = client;
    }

    async getProfile({ publicIdentifier, flags = {} }: { publicIdentifier: string, flags: ProfileSearchFlags }) : Promise<Record<string, any[]>>
    {
        const response = await this.client.request.profile.getProfile({ publicIdentifier });
        const results = response.included || [];
        
        const aggregateResults = results?.reduce(
            (acc: Record<string, any[]>, item: any) => {
                if (item.$type == PROFILE_TYPE) {
                    acc.profile.push(item as LinkedInProfile);
                } 
                else if (item.$type == GEO_TYPE && flags.geo) {
                    acc.geo.push(item as LinkedInProfileGeo);
                }
                else if (item.$type == INDUSTRY_TYPE && flags.industry) {
                    acc.industry.push(item as LinkedInProfileIndustry);
                }
                else if (item.$type == REGION_TYPE && flags.region) {
                    acc.region.push(item as LinkedInProfileRegion);
                }
                else if (item.$type == CERTIFICATION_TYPE && flags.certification) {
                    acc.certification.push(item as LinkedInProfileCertification);
                }
                else if (item.$type == COURSE_TYPE && flags.course) {
                    acc.course.push(item as LinkedInProfileCourse);
                }
                else if (item.$type == EDUCATION_TYPE && flags.education) {
                    acc.education.push(item as LinkedInProfileEducation);
                }
                else if (item.$type == EMPLOYMENT_TYPE && flags.employmentType) {
                    acc.employmentType.push(item as LinkedInProfileEmploymentType);
                }
                else if (item.$type == HONOR_TYPE && flags.honors) {
                    acc.honor.push(item as LinkedInProfileHonors);
                }
                else if (item.$type == LANGUAGE_TYPE && flags.language) {
                    acc.language.push(item as LinkedInProfileLangauge);
                }
                else if (item.$type == ORGANIZATION_TYPE && flags.organization) {
                    acc.organization.push(item as LinkedInProfileOrganization);
                }
                else if (item.$type == POSITION_TYPE && flags.position) {
                    acc.position.push(item as LinkedInProfilePosition);
                }
                else if (item.$type == POSITION_GROUP_TYPE && flags.positionGroup) {
                    acc.positionGroup.push(item as LinkedInProfilepositionGroup);
                }
                else if (item.$type == PROJECT_TYPE && flags.project) {
                    acc.project.push(item as LinkedInProfileProject);
                }
                else if (item.$type == SKILL_TYPE && flags.skill) {
                    acc.skill.push(item as LinkedInProfileSkill);
                }
                else if (item.$type == COMPANY_TYPE && flags.company) {
                    acc.company.push(item as LinkedInProfileCompany);
                }
                else if (item.$type == SCHOOL_TYPE && flags.school) {
                    acc.school.push(item as LinkedInProfileSchool);
                }
                // else if (item.$type == CONNECTION_TYPE && flags.connection) {
                //     acc.connection.push(item);
                // }
                else if (item.$type == MEMBER_RELATIONSHIP_TYPE && flags.memberRelationship) {
                    acc.memberRelationship.push(item as LinkedInProfileMemberRelationship);
                }
                return acc;
            },
            { 
                profile: [],
                geo: [], 
                industry: [], 
                region: [],
                certification: [],
                course: [],
                education: [],
                employmentType: [],
                honor: [],
                language: [],
                organization: [],
                position: [],
                positionGroup: [],
                project: [],
                skill: [],
                company: [],
                school: [],
                connection: [],
                memberRelationship: [],
            }
        );
        
        return aggregateResults;
    }
}

// const profileConnectionsScroller = await this.client.search.searchConnectionsOf({ profileId: entityUrn });
// const profileConnections = await profileConnectionsScroller.scrollNext();

// const result: any = await this.client.request.get(
//     `https://www.linkedin.com/voyager/api/identity/profiles/${publicIdentifier}/profileContactInfo`
// );

// const uniqueTypes: Set<string> = new Set(results.map((r : { $type: string; }) => r.$type));
// const result: any = await client.request.get(
//   `https://www.linkedin.com/voyager/api/identity/profiles/muhammad-zakria-jan-8339ab105/profileView`
// );