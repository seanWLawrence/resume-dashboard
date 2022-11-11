import * as React from "react";
import * as router from "react-router-dom";
import { Outlet } from "react-router-dom";
import * as cloudscape from "@cloudscape-design/components";

import websiteLogo from "../assets/website-logo.png";
import * as hooks from "../hooks/index.hook";

export const AppLayout: React.FC<{ children?: React.ReactNode }> = (props) => {
  const onFollow = hooks.useOnFollowSideNavigation();
  const breadcrumbItems = hooks.useBreadcrumbItems();

  return (
    <cloudscape.AppLayout
      toolsHide
      breadcrumbs={
        <cloudscape.BreadcrumbGroup
          items={[{ href: "/", text: "Home" }, ...breadcrumbItems]}
        />
      }
      content={<Outlet />}
      navigation={
        <cloudscape.SideNavigation
          onFollow={onFollow}
          header={{
            text: "Sean W. Lawrence",
            href: "/",
            logo: { src: websiteLogo, alt: "Sean W. Lawrence" },
          }}
          items={[
            { text: "Home", href: "/", type: "link" },
            {
              type: "section",
              defaultExpanded: true,
              text: "Experience",
              items: [
                {
                  text: "Amazon Privacy",
                  type: "link",
                  href: "/experience/work/amazon-privacy",
                },
                {
                  text: "AWS Professional Services",
                  type: "link",
                  href: "/experience/work/aws-professional-services",
                },
                {
                  text: "Make School",
                  type: "link",
                  href: "/experience/work/make-school",
                },
                {
                  text: "Beastgrip",
                  type: "link",
                  href: "/experience/work/beastgrip",
                },
              ],
            },
            {
              type: "section",
              defaultExpanded: true,
              text: "Contributions",
              items: [
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
