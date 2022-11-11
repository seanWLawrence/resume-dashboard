import * as cloudscape from "@cloudscape-design/components";
import * as components from "../components/index.component";
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
  accomplishmentsCard: {
    heading: "Accomplishments",
    items: [
      {
        content: () => (
          <cloudscape.Box display="inline">
            Lead UI/UX for privacy consent service that consistently handles{" "}
            <cloudscape.Box display="inline" fontWeight="bold">
              over 100K TPS
            </cloudscape.Box>
            .
          </cloudscape.Box>
        ),
      },
      {
        content: () => (
          <cloudscape.Box display="inline">
            Architect and build UI/UX for new AI document translation product
            handling{" "}
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
};
