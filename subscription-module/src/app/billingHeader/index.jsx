import React from "react"
import { FaMoneyBill1Wave } from "react-icons/fa6"
import CustomSidebarItem from "../components/sidebar/customSidebarItem"

export default function BillingHeader() {
  return (
    <CustomSidebarItem text="Billing" icon={<FaMoneyBill1Wave size={30} />} />
  )
}
