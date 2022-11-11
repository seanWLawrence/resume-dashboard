import * as React from "react";
import * as cloudscape from "@cloudscape-design/components";

import * as components from "../components/index.component";
import * as types from "../types";

export const DashboardLayout: React.FC<types.DashboardLayoutProps> = (
  props
) => {
  return (
    <cloudscape.SpaceBetween size="m" direction="vertical">
      <cloudscape.SpaceBetween direction="horizontal" size="s">
        <components.ContactCard {...props.contactCard} />
        <components.SummaryCard heading={props.accomplishmentsCard.heading}>
          <components.List>
            {props.accomplishmentsCard.items.map((item, index) => {
              return (
                <components.UnorderedListItem key={index}>
                  {item.content()}
                </components.UnorderedListItem>
              );
            })}
          </components.List>
        </components.SummaryCard>
      </cloudscape.SpaceBetween>
    </cloudscape.SpaceBetween>
  );
};
