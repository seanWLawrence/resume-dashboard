import * as React from "react";
import * as cloudscape from "@cloudscape-design/components";

import * as hooks from "../hooks/index.hook";

interface LinkProps extends cloudscape.LinkProps {}

export const Link: React.FC<LinkProps> = (props) => {
  const onFollow = hooks.useOnFollowLink();

  return (
    <cloudscape.Link {...props} onFollow={onFollow}>
      {props.children}
    </cloudscape.Link>
  );
};
