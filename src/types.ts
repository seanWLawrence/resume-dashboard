export interface Image {
  src: string;
  alt: string;
}

export interface ContactCardProps {
  image: Image;
  name: string;
  href: string;
  description: string;
  socialLinks: { href: string; icon: Image }[];
  address: { city: string; state: string };
  email?: string;
}

export interface DashboardLayoutProps {
  contactCard: ContactCardProps;
}
