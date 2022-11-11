import React from "react";

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

export type Rating = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

interface MetricItem {
  text: string;
  rating: Rating;
}

interface Metric {
  heading: string;
  items: MetricItem[];
}

export interface DashboardLayoutProps {
  contactCard: ContactCardProps;
  accomplishmentsCard: {
    heading: string;
    items: { content: () => React.ReactNode }[];
  };
  metricsCard: { heading: string; metrics: Metric[] };
}
