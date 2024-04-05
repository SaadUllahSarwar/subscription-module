// import sidebarConfig from "./sidebarConfig" // Import your sidebar config
import { useState } from "react"

const Sidebar = ({ sidebarConfig, setActiveContent }) => {
  const [activeItem, setActiveItem] = useState(false)
  const handleItemClick = (content, label) => {
    setActiveContent(content)
    console.log(content, "content")
    setActiveItem(label)
    console.log(content, "content")
  }
  return (
    <div className="flex flex-col w-full p-4 lg:h-screen lg:w-72 p2 m2">
      <div>
        {console.log(activeItem, "activeItemactiveItemactiveItemactiveItem")}
        {sidebarConfig.map((item, index) => (
          <ul
            key={index}
            className={
              activeItem == item?.label
                ? "bg-silver-500 text-black-500 active:bg-gray-500 hover:bg-gray-100 cursor-pointer rounded-lg p-2 mb-2"
                : "text-black-500 active:bg-transparent hover:bg-gray-100 cursor-pointer rounded-lg p-2 mb-2"
            }
            onClick={() => handleItemClick(item.component, item.label)}
          >
            <li className="flex flex-row">
              <div className="sidebar-icon">{item.header}</div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
