"use client"
import React from "react"
import "../../styles/global.css"
import Navbar from "./components/navbar/page"
import Sidebar from "./components/sidebar/page"
import sidebarConfig from "./components/sidebar/sidebarConfig"

export default function HomePage({ children }) {
  const [activeContent, setActiveContent] = React.useState(null)
  return (
    <div>
      <Navbar />
      <hr className="border-gray-300 my-2" />
      <div className="flex">
        <Sidebar
          sidebarConfig={sidebarConfig}
          setActiveContent={setActiveContent}
        />
        <div className="flex w-full ">
          {activeContent ? activeContent : children}
        </div>
      </div>
    </div>
  )
}
