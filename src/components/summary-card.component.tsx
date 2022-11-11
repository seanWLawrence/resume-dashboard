import * as React from "react";
import * as cloudscape from "@cloudscape-design/components";

interface SummaryCardProps {
  heading: string;
  children: React.ReactNode;
}

export const SummaryCard: React.FC<SummaryCardProps> = (props) => {
  return (
    <cloudscape.Container
      header={
        <cloudscape.Header variant="h2">{props.heading}</cloudscape.Header>
      }
    >
      {props.children}
    </cloudscape.Container>
  );
};
