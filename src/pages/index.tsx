import React from "react";

export const DashboardPage = React.lazy(() => import("./Dashboard"));
export const QuotationPage = React.lazy(() => import("./Quotation"));
export const ProjectPage = React.lazy(() => import("./Project"));
export const CustomerPage = React.lazy(() => import("./Masters/Customer"));
export const InfluencerPage = React.lazy(() => import("./Masters/Influencer"));
export const DesignationPage = React.lazy(
  () => import("./Masters/Designation")
);
export const InfluencerTypePage = React.lazy(
  () => import("./Masters/InfluencerType")
);
