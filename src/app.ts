import axios from 'axios';
import fs from 'fs';
import { Client } from 'linkedin-private-api';
import { ExtendedProfileRepository} from "./profile.repository";
import { PeopleSearchScroller } from 'linkedin-private-api/dist/src/scrollers';

import {ProfileSearchFlags} from "./types";

require('dotenv').config();
const username = process.env.USERNAME as string;
const password = process.env.PASSWORD as string;

(async () => {
    // Login
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
    
    const fullProfile = await client.profile.getProfile({ publicIdentifier: searchedProfileHit.profile.publicIdentifier });
    console.log(fullProfile);
    
    const profile_repo : ExtendedProfileRepository = new ExtendedProfileRepository({client});
    
    
    const pFlags : ProfileSearchFlags = {
      connections: true,
      geo: true,
      contactInfo: true,
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
    console.log(profile);

    // const id : string = searchedProfileHit.profile.entityUrn.split(":").pop() as string;
    // const profileConnections = await profile_repo.getProfileConnections(id);
    // console.log(profile);
})();
  