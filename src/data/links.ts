export const socialMediaLinks = [
  { id: "linkedin-1", label: "LinkedIn", url: "https://www.linkedin.com/in/joaquinolivero", icon: "LinkedInIcon", className: "linkedin" },
  { id: "github-1", label: "GitHub",   url: "https://github.com/Pulpoide", icon: "GithubIcon",   className: "github" },
] as const;

export type IconKey = typeof socialMediaLinks[number]["icon"];
export interface SocialMediaLink {
  label: string;
  url: string;
  icon: IconKey;
  className: string;
}
