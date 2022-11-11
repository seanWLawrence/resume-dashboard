import * as cloudscape from "@cloudscape-design/components";
import * as types from "../types";

export const workData: { [company: string]: types.DashboardLayoutProps } = {
  "amazon-privacy": {
    contactCard: {
      heading: "Role details",
      name: "Amazon Privacy",
      image: { src: "../assets/amazon-logo.png", alt: "Amazon" },
      href: "https://amazon.com",
      address: { city: "San Antonio", state: "TX (Remote)" },
      socialLinks: [],
      description: "Lead frontend engineer on the Amazon privacy team",
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
      heading: "Skills used in this role",
      metrics: [
        {
          heading: "Technical",
          items: [
            { text: "Testing" },
            { text: "APIs (REST)" },
            { text: "Performance optimization" },
            { text: "Systems architecture" },
            { text: "Internationalization" },
          ],
        },
        {
          heading: "Languages",
          items: [
            { text: "TypeScript" },
            { text: "HTML/JSP" },
            { text: "CSS" },
            { text: "Java" },
          ],
        },
        {
          heading: "Frameworks",
          items: [
            { text: "Cypress" },
            { text: "Spring MVC" },
            { text: "Internal Amazon tooling" },
          ],
        },
        {
          heading: "Soft skills",
          items: [
            { text: "Mentoring engineers" },
            { text: "Sprint/roadmap planning" },
            { text: "On-call support" },
            { text: "Writing business narratives" },
          ],
        },
      ],
    },
  },
  "aws-professional-services": {
    contactCard: {
      heading: "Role details",
      name: "AWS Professional Services",
      image: { src: "../assets/aws-logo.webp", alt: "AWS" },
      href: "https://sean-lawrence.com",
      address: { city: "Seattle", state: "WA (Remote)" },
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
      heading: "Skills",
      metrics: [
        {
          heading: "Technical",
          items: [
            { text: "Cloud/AWS/Serverless" },
            { text: "APIs (GraphQL)" },
            { text: "Accessibility" },
            { text: "UI/UX design" },
            { text: "Systems architecture" },
            { text: "Threat modeling" },
          ],
        },
        {
          heading: "Languages",
          items: [
            { text: "TypeScript" },
            { text: "HTML/JSX" },
            { text: "Node.js" },
            { text: "GraphQL" },
            { text: "SQL" },
          ],
        },
        {
          heading: "Frameworks",
          items: [
            { text: "React" },
            { text: "Cypress" },
            { text: "AWS Amplify" },
          ],
        },
        {
          heading: "Soft skills",
          items: [
            { text: "Mentoring engineers" },
            { text: "Sprint/roadmap planning" },
          ],
        },
      ],
    },
  },
  "make-school": {
    contactCard: {
      heading: "Role details",
      name: "Make School",
      image: { src: "../assets/make-school-logo.png", alt: "AWS" },
      href: "https://sean-lawrence.com",
      address: { city: "San Francisco", state: "CA (Remote)" },
      socialLinks: [],
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
      heading: "Skills",
      metrics: [
        {
          heading: "Technical",
          items: [
            { text: "APIs (GraphQL)" },
            { text: "Accessibility" },
            { text: "UI/UX design" },
          ],
        },
        {
          heading: "Languages",
          items: [
            { text: "TypeScript/JavaScript" },
            { text: "HTML/JSX" },
            { text: "GraphQL" },
            { text: "Ruby" },
            { text: "SQL" },
          ],
        },
        {
          heading: "Frameworks",
          items: [
            { text: "React" },
            { text: "Cypress" },
            { text: "Apollo GraphQL" },
          ],
        },
        {
          heading: "Soft skills",
          items: [{ text: "Mentoring engineers" }],
        },
      ],
    },
  },
  beastgrip: {
    contactCard: {
      heading: "Role details",
      name: "Beastgrip",
      image: { src: "../assets/beastgrip-logo.png", alt: "Amazon" },
      href: "https://beastgrip.com",
      address: { city: "Chicago", state: "IL" },
      socialLinks: [],
      description: "Lead frontend engineer on the Amazon privacy team",
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
      heading: "Skills used in this role",
      metrics: [
        {
          heading: "Technical",
          items: [
            { text: "Testing" },
            { text: "APIs (REST)" },
            { text: "Performance optimization" },
            { text: "Systems architecture" },
            { text: "Internationalization" },
          ],
        },
        {
          heading: "Languages",
          items: [
            { text: "TypeScript" },
            { text: "HTML/JSP" },
            { text: "CSS" },
            { text: "Java" },
          ],
        },
        {
          heading: "Frameworks",
          items: [
            { text: "Cypress" },
            { text: "Spring MVC" },
            { text: "Internal Amazon tooling" },
          ],
        },
        {
          heading: "Soft skills",
          items: [
            { text: "Mentoring engineers" },
            { text: "Sprint/roadmap planning" },
            { text: "On-call support" },
            { text: "Writing business narratives" },
          ],
        },
      ],
    },
  },
};
