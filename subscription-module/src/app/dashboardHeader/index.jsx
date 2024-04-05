import CustomSidebarItem from "../components/sidebar/customSidebarItem"
import { MdDashboard } from "react-icons/md"

export default function DashboardHeader() {
  let title = "dashboard"

  return <CustomSidebarItem text="Dashboard" icon={<MdDashboard size={30} />} />
}
