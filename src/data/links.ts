export const socialMediaLinks = [
  { id: "github-1", label: "GitHub",   url: "https://github.com/Pulpoide", icon: "GithubIcon",   className: "github" },
  { id: "linkedin-1", label: "LinkedIn", url: "https://www.linkedin.com/in/joaquinolivero", icon: "LinkedInIcon", className: "linkedin" },
] as const;

export type IconKey = typeof socialMediaLinks[number]["icon"];
export interface SocialMediaLink {
  label: string;
  url: string;
  icon: IconKey;
  className: string;
}
