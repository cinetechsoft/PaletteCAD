import {
  IconCalculator,
  IconDashboard,
  IconProgress,
  TablerIconsProps,
} from "@tabler/icons-react";
import * as LazyLoaded from "../pages";
export interface RouteItem {
  name: string;
  path: string;
  element: React.LazyExoticComponent<() => JSX.Element>;
  icon: (props: TablerIconsProps) => JSX.Element;
  isHidden?: boolean;
  subRoutes?: RouteItem[];
}
const routes: RouteItem[] = [
  {
    name: "Dashboard",
    path: "/",
    element: LazyLoaded.DashboardPage,
    icon: IconDashboard,
  },
  {
    name: "Quotation",
    path: "/quotation/:projectID",
    element: LazyLoaded.QuotationPage,
    isHidden: true,
    icon: IconCalculator,
  },
  {
    name: "Project",
    path: "/project",
    element: LazyLoaded.ProjectPage,
    icon: IconProgress,
  },
  {
    name: "Item",
    path: "/item",
    element: LazyLoaded.ItemPage,
    icon: IconProgress,
  },

  {
    name: "Master",
    path: "/master",
    element: LazyLoaded.ProjectPage,
    icon: IconProgress,
    subRoutes: [
      {
        name: "Showroom",
        path: "/showroom",
        element: LazyLoaded.ShowroomPage,
        icon: IconProgress,
      },
      {
        name: "Customer",
        path: "/customer",
        element: LazyLoaded.CustomerPage,
        icon: IconProgress,
      },
      {
        name: "Influencer",
        path: "/influencer",
        element: LazyLoaded.InfluencerPage,
        icon: IconProgress,
      },
      {
        name: "InfluencerType",
        path: "/influencertype",
        element: LazyLoaded.InfluencerTypePage,
        icon: IconProgress,
      },
      {
        name: "Designation",
        path: "/designation",
        element: LazyLoaded.DesignationPage,
        icon: IconProgress,
      },
      {
        name: "Room",
        path: "/room",
        element: LazyLoaded.RoomPage,
        icon: IconProgress,
      },
    ],
  },
];

export default routes;
