export interface Socials {
  name: string;
  href: string;
  iconName?: string;
}

export interface Contact {
  email: string;
  socials: Socials[];
}
