import * as React from "react";
import * as cloudscape from "@cloudscape-design/components";

import { SummaryCard } from "./summary-card.component";
import * as lib from "../lib/index.lib";
import * as types from "../types";

export const ContactCard: React.FC<types.ContactCardProps> = (props) => {
  return (
    <SummaryCard heading="Contact">
      <cloudscape.SpaceBetween size="xl" direction="horizontal">
        <img
          src={lib.getImageSrc(props.image.src)}
          alt={props.image.alt}
          style={{ maxHeight: "11.5rem", borderRadius: "10%" }}
        />
        <cloudscape.SpaceBetween direction="vertical" size="xs">
          <cloudscape.Header variant="h3">
            {props.name}{" "}
            <cloudscape.Box>
              {props.address.city}, {props.address.state}{" "}
              {props.email && (
                <cloudscape.Box display="inline">
                  -{" "}
                  <cloudscape.Link href={`mailto:${props.email}`}>
                    Email me
                  </cloudscape.Link>
                </cloudscape.Box>
              )}
            </cloudscape.Box>
          </cloudscape.Header>

          <div style={{ maxWidth: "20rem" }}>
            <cloudscape.Box variant="p">{props.description}</cloudscape.Box>
          </div>

          <cloudscape.SpaceBetween direction="horizontal" size="xs">
            {props.socialLinks.map((socialLink) => {
              return (
                <a href={socialLink.href} key={socialLink.href}>
                  <img
                    style={{ maxHeight: "2rem" }}
                    src={lib.getImageSrc(socialLink.icon.src)}
                    alt={socialLink.icon.alt}
                  />
                </a>
              );
            })}
          </cloudscape.SpaceBetween>
        </cloudscape.SpaceBetween>
      </cloudscape.SpaceBetween>
    </SummaryCard>
  );
};
