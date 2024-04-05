import React from "react"
import DashboardHeader from "../../dashboardHeader/index.jsx"
import BillingHeader from "../../billingHeader/index.jsx"
import PlansHeader from "../../plansHeader/index.jsx"
import Dashboard from "../../dashboard/page.jsx"
import Billing from "../../billing/page.jsx"
import Plans from "../../plans/page.jsx"

const sidebarConfig = [
  {
    label: "Dashboard",
    header: <DashboardHeader />,
    component: <Dashboard />,
  },
  {
    label: "Billing",
    header: <BillingHeader />,
    component: <Billing />,
  },
  {
    label: "Plans",
    header: <PlansHeader />,
    component: <Plans />,
  },
  // Add more sidebar items here if needed
]

export default sidebarConfig
