import CustomSidebarItem from "../components/sidebar/customSidebarItem"
import { TbPackages } from "react-icons/tb"

export default function PlansHeader() {
  return <CustomSidebarItem text="Plans" icon={<TbPackages size={30} />} />
}
