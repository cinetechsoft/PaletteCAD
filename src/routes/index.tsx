import { IconCalculator, IconDashboard } from "@tabler/icons-react";
import { DashboardPage, QuotationPage } from "../pages";

const routes = [
    {
        name: "Dashboard",
        path: "/",
        element: DashboardPage,
        icon: IconDashboard
    },
    {
        name: "Quotation",
        path: "/quotation",
        element: QuotationPage,
        icon: IconCalculator
    }
]

export default routes