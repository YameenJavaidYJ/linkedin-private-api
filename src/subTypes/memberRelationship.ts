export interface LinkedInProfileMemberRelationship {
    memberRelationshipUnion: MemberRelationshipUnion;
    entityUrn: string;
    memberRelationshipData: MemberRelationshipData;
    $recipeTypes: string[];
    $type: string;
}
interface MemberRelationshipData {
    "*connection": string;
}
  
interface MemberRelationshipUnion {
    "*connection": string;
}

  