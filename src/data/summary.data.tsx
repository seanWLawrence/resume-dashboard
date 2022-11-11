import * as types from "../types";

export const summaryData: types.DashboardLayoutProps = {
  contactCard: {
    name: "Sean W. Lawrence",
    image: { src: "../assets/avatar.jpeg", alt: "Sean's portrait" },
    href: "https://sean-lawrence.com",
    address: { city: "San Antonio", state: "TX" },
    email: "sean@sean-lawrence.com",
    socialLinks: [
      {
        icon: { src: "../assets/website-logo.png", alt: "Sean's Blog" },
        href: "https://sean-lawrence.com",
      },
      {
        icon: { src: "../assets/linked-in-logo.png", alt: "Sean's LinkedIn" },
        href: "https://www.linkedin.com/in/sean-w-lawrence/",
      },
      {
        icon: { src: "../assets/github-logo.png", alt: "Sean's GitHub" },
        href: "https://github.com/seanWLawrence",
      },
    ],
    description:
      "Senior frontend/full stack engineer that specializes in UI/UX. Currently leading the frontend for Amazon's privacy team.",
  },
};
