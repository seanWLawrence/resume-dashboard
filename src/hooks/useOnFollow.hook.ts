import * as router from "react-router-dom";
import type * as types from "@cloudscape-design/components";

export const useOnFollowSideNavigation = () => {
  const navigate = router.useNavigate();
  return (
    event: Parameters<NonNullable<types.SideNavigationProps["onFollow"]>>[0]
  ) => {
    event.preventDefault();

    navigate(event.detail.href);
  };
};

export const useOnFollowLink = () => {
  const navigate = router.useNavigate();

  return (event: Parameters<NonNullable<types.LinkProps["onFollow"]>>[0]) => {
    event.preventDefault();

    if (event.detail.href) {
      navigate(event.detail.href);
    }
  };
};
