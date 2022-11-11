import * as React from "react";
import * as cloudscape from "@cloudscape-design/components";

interface ListProps {
  children: React.ReactNode;
}

export const List: React.FC<ListProps> = (props) => {
  return (
    <cloudscape.SpaceBetween size="s" direction="vertical">
      {props.children}
    </cloudscape.SpaceBetween>
  );
};
