import * as React from "react";
import { Outlet } from "react-router-dom";
import * as cloudscape from "@cloudscape-design/components";

import websiteLogo from "../assets/website-logo.png";

export const AppLayout: React.FC<{ children?: React.ReactNode }> = (props) => {
  return (
    <cloudscape.AppLayout
      content={<Outlet />}
      navigation={
        <cloudscape.SideNavigation
          header={{
            text: "Sean W. Lawrence",
            href: "/",
            logo: { src: websiteLogo, alt: "Sean W. Lawrence" },
          }}
          items={[
            {
              text: "Experience",
              type: "section",
              items: [
                { text: "Summary", href: "/", type: "link" },
                { text: "Work", href: "/experience/work", type: "link" },
                {
                  text: "Open source",
                  href: "/experience/open-source",
                  type: "link",
                },
                {
                  text: "Speaking",
                  href: "/experience/speaking",
                  type: "link",
                },
              ],
            },
            { type: "divider" },
            { text: "Other interests", href: "/interests", type: "link" },
          ]}
        />
      }
    />
  );
};
