import { Client } from 'linkedin-private-api';
require('dotenv').config();

const PROFILE_TYPE = "com.linkedin.voyager.dash.identity.profile.Profile";
const COLLECTION_RESPONSE_TYPE = 'com.linkedin.restli.common.CollectionResponse';
const GEO_TYPE = "com.linkedin.voyager.dash.common.Geo";
const INDUSTRY_TYPE = 'com.linkedin.voyager.dash.common.Industry';
const REGION_TYPE = 'com.linkedin.voyager.dash.common.Region';
const CERTIFICATION_TYPE = 'com.linkedin.voyager.dash.identity.profile.Certification';
const COURSE_TYPE = 'com.linkedin.voyager.dash.identity.profile.Course';
const EDUCATION_TYPE = 'com.linkedin.voyager.dash.identity.profile.Education';
const EMPLOYMENT_TYPE_TYPE = 'com.linkedin.voyager.dash.identity.profile.EmploymentType';
const HONOR_TYPE = 'com.linkedin.voyager.dash.identity.profile.Honor';
const LANGUAGE_TYPE = 'com.linkedin.voyager.dash.identity.profile.Language';
const ORGANIZATION_TYPE = 'com.linkedin.voyager.dash.identity.profile.Organization';
const POSITION_TYPE = 'com.linkedin.voyager.dash.identity.profile.Position';
const POSITION_GROUP_TYPE = 'com.linkedin.voyager.dash.identity.profile.PositionGroup';
const PROJECT_TYPE = 'com.linkedin.voyager.dash.identity.profile.Project';
const SKILL_TYPE = 'com.linkedin.voyager.dash.identity.profile.Skill';
const COMPANY_TYPE = 'com.linkedin.voyager.dash.organization.Company';
const SCHOOL_TYPE = 'com.linkedin.voyager.dash.organization.School';
const CONNECTION_TYPE = 'com.linkedin.voyager.dash.relationships.Connection';
const MEMBER_RELATIONSHIP_TYPE = 'com.linkedin.voyager.dash.relationships.MemberRelationship';

// const uniqueTypes: Set<string> = new Set(results.map((r : { $type: string; }) => r.$type));
// const result: any = await client.request.get(
//   `https://www.linkedin.com/voyager/api/identity/profiles/muhammad-zakria-jan-8339ab105/profileView`
// );


// https://www.linkedin.com/voyager/api/identity/profiles/ACoAAAKT9JQBsH7LwKaE9Myay9WcX8OVGuDq9Uw
// res = self._fetch(f"/identity/profiles/{public_id or urn_id}/profileView")

export class Extended_Profile_Repository{
    private client: Client;
    
    constructor({ client }: { client: Client }) {
        this.client = client;
    }

    async getProfile(publicIdentifier: string)
    {
        const response = await this.client.request.profile.getProfile({ publicIdentifier });
        const results = response.included || [];
        const profile = results.filter((r : { $type: string; }) => r.$type === PROFILE_TYPE);
        return profile;
    }

    
    
    async getProfileConnections(entityUrn: string) {
        const profileConnectionsScroller = await this.client.search.searchConnectionsOf({ profileId: entityUrn });
        const profileConnections = await profileConnectionsScroller.scrollNext();
        return profileConnections;
    }
    
    async getProfileContactInfo(publicIdentifier: string) {
        const result: any = await this.client.request.get(
            `https://www.linkedin.com/voyager/api/identity/profiles/${publicIdentifier}/profileContactInfo`
        );
  
        return result;
    }
    
    // to retrieve a geo
    async getGeoData(publicIdentifier: string) {
        const response = await this.client.request.profile.getProfile({ publicIdentifier });
        const results = response.included || [];
        const geo = results.filter((r : { $type: string; }) => r.$type === GEO_TYPE);
        return geo;
    }
    
    // to retrieve an industry
    async getIndustryData(publicIdentifier: string) {
        const response = await this.client.request.profile.getProfile({ publicIdentifier });
        const results = response.included || [];
        const industry = results.filter((r : { $type: string; }) => r.$type === INDUSTRY_TYPE);
        return industry;
    }
    
    // to retrieve a region
    async getRegionData(publicIdentifier: string) {
        const response = await this.client.request.profile.getProfile({ publicIdentifier });
        const results = response.included || [];
        const region = results.filter((r : { $type: string; }) => r.$type === REGION_TYPE);
        return region;
    }
    
    // to retrieve a certification
    async getCertificationData(publicIdentifier: string) {
        const response = await this.client.request.profile.getProfile({ publicIdentifier });
        const results = response.included || [];
        const certification = results.filter((r : { $type: string; }) => r.$type === CERTIFICATION_TYPE);
        return certification;
    }
    
    // to retrieve a course
    async getCourseData(publicIdentifier: string) {
        const response = await this.client.request.profile.getProfile({ publicIdentifier });
        const results = response.included || [];
        const course = results.filter((r : { $type: string; }) => r.$type === COURSE_TYPE);
        return course;
    }
    
    // to retrieve an education
    async getEducationData(publicIdentifier: string) {
        const response = await this.client.request.profile.getProfile({ publicIdentifier });
        const results = response.included || [];
        const education = results.filter((r : { $type: string; }) => r.$type === EDUCATION_TYPE);
        return education;
    }
    
    // to retrieve an employment type
    async getEmploymentTypeData(publicIdentifier: string) {
        const response = await this.client.request.profile.getProfile({ publicIdentifier });
        const results = response.included || [];
        const employmentType = results.filter((r : { $type: string; }) => r.$type === EMPLOYMENT_TYPE_TYPE);
        return employmentType;
    }
    
    // to retrieve a honor
    async getHonorData(publicIdentifier: string) {
        const response = await this.client.request.profile.getProfile({ publicIdentifier });
        const results = response.included || [];
        const honor = results.filter((r : { $type: string; }) => r.$type === HONOR_TYPE);
        return honor;
    }
    
    // to retrieve a language
    async getLanguageData(publicIdentifier: string) {
        const response = await this.client.request.profile.getProfile({ publicIdentifier });
        const results = response.included || [];
        const language = results.filter((r : { $type: string; }) => r.$type === LANGUAGE_TYPE);
        return language;
    }
    
    // to retrieve an organization
    async getOrganizationData(publicIdentifier: string) {
        const response = await this.client.request.profile.getProfile({ publicIdentifier });
        const results = response.included || [];
        const organization = results.filter((r : { $type: string; }) => r.$type === ORGANIZATION_TYPE);
        return organization;
    }
    
    // to retrieve a position
    async getPositionData(publicIdentifier: string) {
        const response = await this.client.request.profile.getProfile({ publicIdentifier });
    const results = response.included || [];
    const position = results.filter((r : { $type: string; }) => r.$type === POSITION_TYPE);
    return position;
    }

    // to retrieve a position group
    async getPositionGroupData(publicIdentifier: string) {
        const response = await this.client.request.profile.getProfile({ publicIdentifier });
        const results = response.included || [];
        const positionGroup = results.filter((r : { $type: string; }) => r.$type === POSITION_GROUP_TYPE);
        return positionGroup;
    }

    // to retrieve a project
    async getProjectData(publicIdentifier: string) {
        const response = await this.client.request.profile.getProfile({ publicIdentifier });
        const results = response.included || [];
        const project = results.filter((r : { $type: string; }) => r.$type === PROJECT_TYPE);
        return project;
    }

    // to retrieve a skill
    async getSkillData(publicIdentifier: string) {
        
        // can be done in two ways either with this.client.request.profile.getProfile or voyager's skills
        
        const response = await this.client.request.profile.getProfile({ publicIdentifier });
        const results = response.included || [];
        const skill = results.filter((r : { $type: string; }) => r.$type === SKILL_TYPE);
        // return skill;

        const result: any = await this.client.request.get(
            `https://www.linkedin.com/voyager/api/identity/profiles/${publicIdentifier}/skills`
        );
  
        return {result, skill};
    }

    // to retrieve a company
    async getCompanyData(publicIdentifier: string) {
        const response = await this.client.request.profile.getProfile({ publicIdentifier });
        const results = response.included || [];
        const company = results.filter((r : { $type: string; }) => r.$type === COMPANY_TYPE);
        return company;
    }

    // to retrieve a school
    async getSchoolData(publicIdentifier: string) {
        const response = await this.client.request.profile.getProfile({ publicIdentifier });
        const results = response.included || [];
        const school = results.filter((r : { $type: string; }) => r.$type === SCHOOL_TYPE);
    return school;
    }

    // to retrieve a connection
    async getConnectionData(publicIdentifier: string) {
        const response = await this.client.request.profile.getProfile({ publicIdentifier });
        const results = response.included || [];
        const connection = results.filter((r : { $type: string; }) => r.$type === CONNECTION_TYPE);
    return connection;
    }

    // to retrieve a member relationship
    async getMemberRelationshipData(publicIdentifier: string) {
        const response = await this.client.request.profile.getProfile({ publicIdentifier });
        const results = response.included || [];
        const memberRelationship = results.filter((r : { $type: string; }) => r.$type === MEMBER_RELATIONSHIP_TYPE);
    return memberRelationship;
    }

  
    

    
}

