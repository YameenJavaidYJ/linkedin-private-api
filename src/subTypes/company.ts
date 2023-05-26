export interface LinkedInProfileCompany {
    industry: { [key: string]: string };
    industryUrns: string[];
    $recipeTypes: string[];
    url: string;
    $type: string;
    employeeCountRange: EmployeeCountRange;
    entityUrn: string;
    name: string;
    logo: Logo;
    universalName: string;
}

interface LinkablePositionCompany {
    $recipeTypes: string[];
}
  
interface IntegerRange {
    start: number;
    end: number;
    $recipeTypes: string[];
    $type: string;
}
  
interface VectorArtifact {
    width: number;
    $recipeTypes: string[];
    fileIdentifyingUrlPathSegment: string;
    expiresAt: number;
    height: number;
    $type: string;
}
  
interface VectorImageOnlyRootUrlAndAttribution {
    $recipeTypes: string[];
    rootUrl: string;
    artifacts: VectorArtifact[];
    $type: string;
}
  
interface VectorImage {
    $recipeTypes: string[];
    vectorImage: VectorImageOnlyRootUrlAndAttribution;
    $type: string;
}
  
interface Logo {
    vectorImage: VectorImage;
}
  
interface EmployeeCountRange {
    start: number;
    end: number;
    $recipeTypes: string[];
    $type: string;
}