import * as cloudscape from "@cloudscape-design/components";
import * as types from "../types";

export const summaryData: types.DashboardLayoutProps = {
  contactCard: {
    heading: "Contact",
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
  accomplishmentsCard: {
    heading: "Accomplishments",
    items: [
      {
        content: () => (
          <cloudscape.Box display="inline">
            (Amazon Privacy) Lead UI/UX for privacy consent service that
            consistently handles{" "}
            <cloudscape.Box display="inline" fontWeight="bold">
              over 100K TPS
            </cloudscape.Box>{" "}
            and over{" "}
            <cloudscape.Box display="inline" fontWeight="bold">
              10 marketplaces and subsidiaries
            </cloudscape.Box>
            .
          </cloudscape.Box>
        ),
      },
      {
        content: () => (
          <cloudscape.Box display="inline">
            (AWS) Architect and build UI/UX for new AI document translation
            product handling{" "}
            <cloudscape.Box display="inline" fontWeight="bold">
              over 150K documents a year
            </cloudscape.Box>{" "}
            in production.
          </cloudscape.Box>
        ),
      },
      {
        content: () => (
          <cloudscape.Box display="inline">
            (AWS) Lead product development of a new custom cloud financial
            management solution for entrprise users with
            <cloudscape.Box display="inline" fontWeight="bold">
              hundreds to thousands of AWS accounts
            </cloudscape.Box>{" "}
            .
          </cloudscape.Box>
        ),
      },
      {
        content: () => (
          <cloudscape.Box display="inline">
            Pass all 6 foundational, associate and professional AWS
            certifications and become{" "}
            <cloudscape.Box display="inline" fontWeight="bold">
              an AWS certification subject matter expert
            </cloudscape.Box>{" "}
            .
          </cloudscape.Box>
        ),
      },
    ],
  },
  metricsCard: {
    heading: "Skill mastery",
    metrics: [
      {
        heading: "Technical",
        items: [
          { text: "Testing", rating: 8 },
          { text: "Cloud/AWS/Serverless", rating: 7 },
          { text: "APIs (REST/GraphQL)", rating: 7 },
          { text: "Accessibility", rating: 7 },
          { text: "UI/UX design", rating: 7 },
          { text: "Systems architecture", rating: 6 },
          { text: "Internationalization", rating: 5 },
          { text: "Threat modeling", rating: 5 },
          { text: "Performance optimization", rating: 5 },
        ],
      },
      {
        heading: "Languages",
        items: [
          { text: "TypeScript/JavaScript", rating: 9 },
          { text: "HTML", rating: 9 },
          { text: "CSS/SCSS/CSS-in-JS", rating: 9 },
          { text: "Node.js", rating: 8 },
          { text: "GraphQL", rating: 7 },
          { text: "SQL", rating: 6 },
          { text: "Ruby", rating: 5 },
          { text: "Java", rating: 4 },
          { text: "Python", rating: 4 },
        ],
      },
      {
        heading: "Frameworks",
        items: [
          { text: "React", rating: 8 },
          { text: "Cypress", rating: 8 },
          { text: "AWS Amplify", rating: 7 },
          { text: "Next.js", rating: 6 },
          { text: "Spring MVC", rating: 5 },
          { text: "Svelte", rating: 4 },
          { text: "Remix", rating: 4 },
          { text: "Ruby on Rails", rating: 4 },
        ],
      },
      {
        heading: "Soft skills",
        items: [
          { text: "Mentoring engineers", rating: 8 },
          { text: "Sprint/roadmap planning", rating: 7 },
          { text: "On-call support", rating: 7 },
          { text: "Business narratives", rating: 6 },
        ],
      },
    ],
  },
};
