import * as React from "react";
import * as cloudscape from "@cloudscape-design/components";

import * as components from "../components/index.component";
import * as types from "../types";

export const DashboardLayout: React.FC<types.DashboardLayoutProps> = (
  props
) => {
  return (
    <cloudscape.SpaceBetween size="m" direction="vertical">
      <cloudscape.ColumnLayout columns={2}>
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
      </cloudscape.ColumnLayout>
      <components.SummaryCard heading={props.metricsCard.heading}>
        <cloudscape.ColumnLayout columns={4} borders="all" variant="text-grid">
          {props.metricsCard.metrics.map((metric) => {
            return (
              <cloudscape.SpaceBetween
                direction="vertical"
                size="xxs"
                key={metric.heading}
              >
                <cloudscape.Header variant="h3">
                  {metric.heading}
                </cloudscape.Header>

                <div style={{ minWidth: "15rem" }}>
                  <cloudscape.SpaceBetween direction="vertical" size="xs">
                    {metric.items.map((metricItem) => {
                      return (
                        <div
                          key={metricItem.text}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <cloudscape.Box display="inline">
                            {metricItem.text}
                          </cloudscape.Box>

                          {metricItem.rating && (
                            <components.Rating rating={metricItem.rating} />
                          )}
                        </div>
                      );
                    })}
                  </cloudscape.SpaceBetween>
                </div>
              </cloudscape.SpaceBetween>
            );
          })}
        </cloudscape.ColumnLayout>
      </components.SummaryCard>
    </cloudscape.SpaceBetween>
  );
};
