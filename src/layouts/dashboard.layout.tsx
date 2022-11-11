import * as React from "react";
import * as cloudscape from "@cloudscape-design/components";

interface DashboardLayoutProps {}

export const DashboardLayout: React.FC<DashboardLayoutProps> = (props) => {
  return (
    <cloudscape.SpaceBetween size="m" direction="vertical">
      <cloudscape.SpaceBetween
        direction="horizontal"
        size="s"
      ></cloudscape.SpaceBetween>
    </cloudscape.SpaceBetween>
  );
};
