import * as React from "react";

interface UnorderedListItemProps {
  children: React.ReactNode;
}

export const UnorderedListItem: React.FC<UnorderedListItemProps> = (props) => {
  return <li>{props.children}</li>;
};
