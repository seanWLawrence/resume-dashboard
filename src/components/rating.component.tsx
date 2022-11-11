import * as React from "react";

import type * as types from "../types";
import * as styles from "@cloudscape-design/design-tokens";

interface RatingProps {
  rating: types.Rating;
}

export const Rating: React.FC<RatingProps> = (props) => {
  return (
    <div
      style={{
        maxWidth: "5rem",
        border: `2px solid ${styles.colorBackgroundButtonPrimaryActive}`,
        borderRadius: styles.borderRadiusBadge,
        minWidth: "5rem",
        minHeight: "1rem",
      }}
    >
      <div
        style={{
          backgroundColor: styles.colorBackgroundButtonPrimaryDefault,
          width: `${props.rating * 10}%`,
          minHeight: "1.125rem",
        }}
      />
    </div>
  );
};
