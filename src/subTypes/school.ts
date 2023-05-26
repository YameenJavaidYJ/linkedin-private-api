export interface LinkedInProfileSchool {
    active: boolean;
    $recipeTypes: string[];
    url: string;
    $type: string;
    entityUrn: string;
    name: string;
    logo: Logo;
}

interface VectorArtifact {
    width: number;
    $recipeTypes: string[];
    fileIdentifyingUrlPathSegment: string;
    expiresAt: number;
    height: number;
    $type: string;
}
  
interface VectorImage {
    $recipeTypes: string[];
    rootUrl: string;
    artifacts: VectorArtifact[];
    $type: string;
}
  
interface Logo {
    vectorImage: VectorImage;
}