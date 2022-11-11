import * as router from "react-router-dom";
import type * as cloudscape from "@cloudscape-design/components";
import { workData } from "../data/work.data";

const upperFirst = (str: string): string =>
  str.toLowerCase().replaceAll(/\b[a-zA-Z]/g, (char) => char.toUpperCase());

const stripHyphen = (str: string): string => str.replaceAll("-", " ");

// Paths that don't have a dedicated page to navigate to
const pathsToIgnore = new Set<string>();
pathsToIgnore.add("experience");
pathsToIgnore.add("work");
pathsToIgnore.add("contributions");

export const useBreadcrumbItems =
  (): cloudscape.BreadcrumbGroupProps["items"] => {
    const location = router.useLocation();

    const splitPath = location.pathname.split("/").filter(Boolean);

    return splitPath.reduce(
      (result: cloudscape.BreadcrumbGroupProps["items"], path, index) => {
        const lastItemOnWorkPages =
          splitPath[1] === "work" && splitPath.length === index + 1;

        if (pathsToIgnore.has(path)) {
          return result;
        }

        return [
          ...result,
          {
            text: lastItemOnWorkPages
              ? workData[path].contactCard.name
              : upperFirst(stripHyphen(path)),
            href: "#",
          },
        ];
      },
      []
    );
  };
