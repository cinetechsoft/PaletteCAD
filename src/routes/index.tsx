import { IconCalculator, IconDashboard, IconProgress } from "@tabler/icons-react";
import * as LazyLoaded from "../pages";

const routes = [
    {
        name: "Dashboard",
        path: "/",
        element: LazyLoaded.DashboardPage,
        icon: IconDashboard
    },
    {
        name: "Quotation",
        path: "/quotation/:projectID",
        element: LazyLoaded.QuotationPage,
        isHidden: true,
        icon: IconCalculator
    },
    {
        name: "Project",
        path: "/project",
        element: LazyLoaded.ProjectPage,
        icon: IconProgress
    }
]

export default routes