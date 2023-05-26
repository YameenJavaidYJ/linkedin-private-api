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
    LinkedInProfileConnections
} from "./subTypes";
require('dotenv').config();

export class ExtendedProfileRepository{
    private client: Client;
    
    constructor({ client }: { client: Client }) {
        this.client = client;
    }

    async getProfile({ publicIdentifier, flags = {} }: { publicIdentifier: string, flags: ProfileSearchFlags }) : Promise <ExtendedProfile>
    {
        // the purpose of this is to fetch profile only
        const profile = await this.client.profile.getProfile({ publicIdentifier });
        const profileResults : ExtendedProfile = profile;
        
        // the purpose of this is to get the other attributes (data) education / skills etc that 
        // getProfile omitted
        const completeProfile = await this.client.request.profile.getProfile({ publicIdentifier });
        const results = completeProfile.included || [];
        
        // need to cast all data filtered to unknown first because previous type of results is
        // (LinkedInProfile | LinkedInCompany)[] which is (type GetProfileResponse)
        // export type GetProfileResponse = LinkedInCollectionResponse<ProfileUrn, LinkedInProfile | LinkedInCompany>; 
        
        if (flags.geo){
            const geo = results.filter(r => r.$type as string === GEO_TYPE) as unknown as LinkedInProfileGeo[];
            profileResults.geo = geo;
        }
        if (flags.industry){
            const industrys = results.filter(r => r.$type as string === INDUSTRY_TYPE) as unknown as LinkedInProfileIndustry[];
            profileResults.industrys = industrys;
        }

        if (flags.region){
            const regions = results.filter(r => r.$type as string === REGION_TYPE) as unknown as LinkedInProfileRegion[];
            profileResults.regions = regions;
        }

        if (flags.certification){
            const certifications = results.filter(r => r.$type as string === CERTIFICATION_TYPE) as unknown as LinkedInProfileCertification[];
            profileResults.certifications = certifications;
        }

        if (flags.course){
            const courses = results.filter(r => r.$type as string === COURSE_TYPE) as unknown as LinkedInProfileCourse[];
            profileResults.courses = courses;
        }

        if (flags.education){
            const educations = results.filter(r => r.$type as string === EDUCATION_TYPE) as unknown as LinkedInProfileEducation[];
            profileResults.educations = educations;
        }

        if (flags.employmentType){
            const employmentTypes = results.filter(r => r.$type as string === EMPLOYMENT_TYPE) as unknown as LinkedInProfileEmploymentType[];
            profileResults.employmentTypes = employmentTypes;
        }

        if (flags.honors){
            const honors = results.filter(r => r.$type as string === HONOR_TYPE) as unknown as LinkedInProfileHonors[];
            profileResults.honors = honors;
        }

        if (flags.language){
            const languages = results.filter(r => r.$type as string === LANGUAGE_TYPE) as unknown as LinkedInProfileLangauge[];
            profileResults.languages = languages;
        }

        if (flags.organization){
            const organizations = results.filter(r => r.$type as string === ORGANIZATION_TYPE) as unknown as LinkedInProfileOrganization[];
            profileResults.organizations = organizations;
        }

        if (flags.position){
            const positions = results.filter(r => r.$type as string === POSITION_TYPE) as unknown as LinkedInProfilePosition[];
            profileResults.positions = positions;
        }

        if (flags.positionGroup){
            const positionGroups = results.filter(r => r.$type as string === POSITION_GROUP_TYPE) as unknown as LinkedInProfilepositionGroup[];
            profileResults.positionGroups = positionGroups;
        }

        if (flags.project){
            const projects = results.filter(r => r.$type as string === PROJECT_TYPE) as unknown as LinkedInProfileProject[];
            profileResults.projects = projects;
        }

        if (flags.skill){
            const skills = results.filter(r => r.$type as string === SKILL_TYPE) as unknown as LinkedInProfileSkill[];
            profileResults.skills = skills;
        }

        if (flags.company){
            const companys = results.filter(r => r.$type as string === COMPANY_TYPE) as unknown as LinkedInProfileCompany[];
            profileResults.companys = companys;
        }

        if (flags.school){
            const schools = results.filter(r => r.$type as string === SCHOOL_TYPE) as unknown as LinkedInProfileSchool[];
            profileResults.schools = schools;
        }

        if (flags.memberRelationship){
            const memberRelationship = results.filter(r => r.$type as string === MEMBER_RELATIONSHIP_TYPE) as unknown as LinkedInProfileMemberRelationship[];
            profileResults.memberRelationships = memberRelationship;
        }

        if (flags.connections){
            const id = profile.entityUrn.split(":").pop() as string;
            const profileConnectionsScroller = await this.client.search.searchConnectionsOf({ profileId: id });
            const profileConnections = await profileConnectionsScroller.scrollNext();
            profileResults.connections = profileConnections[0] as unknown as LinkedInProfileConnections[];
            
            
        }
        
        return profileResults;
    }
}

