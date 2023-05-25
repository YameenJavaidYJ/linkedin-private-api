import axios from 'axios';
import fs from 'fs';
import { Client } from 'linkedin-private-api';
import { Extended_Profile_Repository} from "./extended_profile_repository";

require('dotenv').config();
const username = process.env.USERNAME as string;
const password = process.env.PASSWORD as string;

(async () => {
    // Login
    const client = new Client();
    try {
      await client.login.userPass({ username, password });
    } catch (error) {
      // console.log(error);
    }

    const peopleScroller = await client.search.searchPeople({
      keywords: 'Muhammad Zakria Jan'
    });
    
    var searchedProfileHit = (await peopleScroller.scrollNext())[0];
    
    // using linkedin-private-api getprofile
    const fullProfile = await client.profile.getProfile({ publicIdentifier: searchedProfileHit.profile.publicIdentifier });
    // console.log(fullProfile);
    
    const profile_repo : Extended_Profile_Repository = new Extended_Profile_Repository({client});
    // using our get profile
    const profile = await profile_repo.getProfile(searchedProfileHit.profile.publicIdentifier);
    // console.log(profile);

    const id : string = searchedProfileHit.profile.entityUrn.split(":").pop() as string;
    const profileConnections = await profile_repo.getProfileConnections(id);
    // console.log(profile);
    
    const profileContactInfo = await profile_repo.getProfileContactInfo(searchedProfileHit.profile.publicIdentifier);
    // console.log(profileContactInfo);

    const profileGeo = await profile_repo.getGeoData(searchedProfileHit.profile.publicIdentifier);
    // console.log(profileGeo);
    
    const profileIndustry = await profile_repo.getIndustryData(searchedProfileHit.profile.publicIdentifier);
    // console.log(profileIndustry);

    const profileRegion = await profile_repo.getRegionData(searchedProfileHit.profile.publicIdentifier);
    // console.log(profileRegion);

    const profileCertification = await profile_repo.getCertificationData(searchedProfileHit.profile.publicIdentifier);
    // console.log(profileCertification);

    const profileCourse = await profile_repo.getCourseData(searchedProfileHit.profile.publicIdentifier);
    // console.log(profileCourse);

    const profileEducation = await profile_repo.getEducationData(searchedProfileHit.profile.publicIdentifier);
    // console.log(profileEducation);

    const profileEmploymentType = await profile_repo.getEmploymentTypeData(searchedProfileHit.profile.publicIdentifier);
    // console.log(profileEmploymentType);

    const profileHonor = await profile_repo.getHonorData(searchedProfileHit.profile.publicIdentifier);
    // console.log(profileHonor);

    const profileLanguage = await profile_repo.getLanguageData(searchedProfileHit.profile.publicIdentifier);
    // console.log(profileLanguage);

    const profileOrganization = await profile_repo.getOrganizationData(searchedProfileHit.profile.publicIdentifier);
    // console.log(profileOrganization);

    const profilePosition = await profile_repo.getPositionData(searchedProfileHit.profile.publicIdentifier);
    // console.log(profilePosition);

    const profilePositionGroup = await profile_repo.getPositionGroupData(searchedProfileHit.profile.publicIdentifier);
    // console.log(profilePositionGroup);

    const profileProject = await profile_repo.getProjectData(searchedProfileHit.profile.publicIdentifier);
    // console.log(profileProject);

    const profileSkill = await profile_repo.getSkillData(searchedProfileHit.profile.publicIdentifier);
    // console.log(profileSkill);

    const profileCompany = await profile_repo.getCompanyData(searchedProfileHit.profile.publicIdentifier);
    // console.log(profileCompany);

    const profileSchool = await profile_repo.getSchoolData(searchedProfileHit.profile.publicIdentifier);
    // console.log(profileSchool);

    const profileConnection = await profile_repo.getConnectionData(searchedProfileHit.profile.publicIdentifier);
    // console.log(profileConnection);

    const profileMemberRelationship = await profile_repo.getMemberRelationshipData(searchedProfileHit.profile.publicIdentifier);
    // console.log(profileMemberRelationship);

})();
  