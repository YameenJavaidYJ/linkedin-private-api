import { Client } from 'linkedin-private-api';
import { PeopleSearchScroller } from 'linkedin-private-api/dist/src/scrollers';

import { ExtendedProfileRepository} from "./profile.repository";


import {
  ProfileSearchFlags,
  ExtendedProfile
} from "./types";

require('dotenv').config();
const username = process.env.USERNAME as string;
const password = process.env.PASSWORD as string;

(async () => {
    const client = new Client();
    try {
      await client.login.userPass({ username, password });
      console.log("Logged In");
    } catch (error) {
      console.log(error);
    }

    const peopleScroller = await client.search.searchPeople({
      keywords: 'Muhammad Zakria Jan'
    });
    
    var searchedProfileHit = (await peopleScroller.scrollNext())[0];
    
    const profile_repo = new ExtendedProfileRepository({client});
    
    
    const pFlags : ProfileSearchFlags = {
      connections: false,
      contactInfo: false,
      geo: true,
      industry: true,
      region: true,
      certification: true,
      course: true,
      education: true,
      employmentType: true,
      honors: true,
      language: true,
      organization: true,
      position: true,
      positionGroup: true,
      project: true,
      skill: true,
      company: true,
      school: true,
      connection: true,
      memberRelationship: true
    };
    

    const profile = await profile_repo.getProfile({
      publicIdentifier:  searchedProfileHit.profile.publicIdentifier,
      flags: pFlags 
    });

    
    

    
})();
  