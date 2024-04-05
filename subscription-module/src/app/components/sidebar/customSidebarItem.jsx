import React from "react"

const CustomSidebarItem = ({ text, icon, onClick }) => {
  return (
    <div className="flex flex-row" onClick={onClick}>
      <div className="sidebar-icon">{icon}</div>
      <div className="text-2xl font-mono ml-4">{text}</div>
    </div>
  )
}

export default CustomSidebarItem
