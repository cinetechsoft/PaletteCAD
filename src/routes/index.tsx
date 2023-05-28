import { IconHome2 } from "@tabler/icons-react";
import { DashboardPage,QuotationPage } from "../pages";

const routes = [
    {
        name: "Dashboard",
        path: "/",
        element: DashboardPage,
        icon: <IconHome2 size="1rem" stroke={1.5} />
    },
    {
        name: "Quotation",
        path: "/quotation",
        element: QuotationPage,
        icon: <IconHome2 size="1rem" stroke={1.5} />
    }
]

export default routes