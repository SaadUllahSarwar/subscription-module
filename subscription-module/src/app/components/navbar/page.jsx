import React from "react"
//import { Icon } from "/oc-logo.png"
import { CiSettings } from "react-icons/ci"
import { IoIosNotifications } from "react-icons/io"
import CustomSidebarItem from "../sidebar/customSidebarItem"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 mb-4">
      <div className="flex flex-row">
        {/* <span className="flex-none">
          <img src={"/oc-logo.png"} alt="One Constellation" className="h-8" />
        </span>
        <h1 className="">One Constellation</h1> */}
        <CustomSidebarItem
          text="One Constellation"
          icon={
            <img src={"/oc-logo.png"} alt="One Constellation" className="h-8" />
          }
        />
      </div>
      <div className="flex flex-row-reverse">
        <span className="flex">
          <span>
            <CiSettings size={27} />
          </span>
          <span>
            <IoIosNotifications size={27} />
          </span>
        </span>
        <span className="flex-none mr-4">
          <input
            type="text"
            name="name"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset placeholder:text-gray-400  focus:ring-inset sm:text-sm sm:leading-6"
            placeholder="Type here"
          ></input>
        </span>
      </div>
    </nav>
  )
}

export default Navbar
