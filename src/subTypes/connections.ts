export interface LinkedInProfileConnections{
    memberDistance: MemberDistance;
    image: ImageViewModel;
    targetUrn: string;
    socialProofImagePile: SocialProofImagePile[];
    trackingUrn: string;
    navigationUrl: string;
    title: TextViewModel;
    type: "PROFILE";
    $type: "com.linkedin.voyager.search.SearchHitV2";
    headless: boolean;
    socialProofText: string;
    secondaryTitle: TextViewModel;
    "*badges": string;
    publicIdentifier: string;
    headline: TextViewModel;
    nameMatch: boolean;
    subline: TextViewModel;
    trackingId: string;
    profile: Profile;
}

interface MemberDistance {
    value: "DISTANCE_1";
    $type: "com.linkedin.voyager.common.MemberDistance";
  }
  
  interface ImageAttribute {
    sourceType: "PROFILE_PICTURE";
    "*miniProfile": string;
    $type: "com.linkedin.voyager.common.ImageAttribute";
}
  
interface ImageViewModel {
    attributes: ImageAttribute[];
    accessibilityTextAttributes: any[];
    $type: "com.linkedin.voyager.common.ImageViewModel";
}
  
interface SocialProofImagePile {
    attributes: ImageAttribute[];
    accessibilityTextAttributes: any[];
    $type: "com.linkedin.voyager.common.ImageViewModel";
}
  
interface TextViewModel {
    textDirection: "USER_LOCALE";
    text: string;
    $type: "com.linkedin.voyager.common.TextViewModel";
}
  
interface Profile {
    customPronoun: null;
    lastName: string;
    memorialized: null;
    dashEntityUrn: string;
    standardizedPronoun: null;
    occupation: string;
    objectUrn: string;
    backgroundImage: null;
    picture: {
      artifacts: {
        width: number;
        fileIdentifyingUrlPathSegment: string;
        expiresAt: number;
        height: number;
        $type: "com.linkedin.common.VectorArtifact";
      }[];
      rootUrl: string;
      $type: "com.linkedin.common.VectorImage";
    };
    $type: "com.linkedin.voyager.identity.shared.MiniProfile";
    firstName: string;
    entityUrn: string;
    publicIdentifier: string;
    trackingId: string;
    pictureUrls: string[];
    profileId: string;
}
  

  
  
  
  
  
  
  