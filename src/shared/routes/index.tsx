import { ReactNode } from "react";
import Home from "../../pages/Home/ui/Home";
import { HomeIcon } from "../../icons/HomeIcon";
import { ReferalsIcon } from "../../icons/ReferalsIcon";
import { TasksIcons } from "../../icons/TasksIcon";

export enum TgAppRouteNames {
  HOME = "home",
  TASKS = "tasks",
  REFERALS = "referals",
}

type Page = {
  path: string;
  label: string;
  element: ReactNode;
  svg: string;
};

export const AppRoutes: Record<TgAppRouteNames, Page> = {
  [TgAppRouteNames.HOME]: {
    path: "*",
    label: "Home",
    element: <Home />,
    svg: HomeIcon,
  },
  [TgAppRouteNames.TASKS]: {
    path: "/tasks",
    label: "Tasks",
    element: <Home />,
    svg: TasksIcons,
  },
  [TgAppRouteNames.REFERALS]: {
    path: "/friends",
    label: "Friends",
    element: <Home />,
    svg: ReferalsIcon,
  },
};
