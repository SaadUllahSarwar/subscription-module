import React from "react"

const CustomCard = ({ header }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full ml-4 p-2">
      <div className="p-4">
        <div className="flex items-center mb-4">
          <img className="w-10 h-10 mr-4" alt="" src="/oc-logo.png" />

          <div>
            <h2 className="text-lg font-bold">{header}</h2>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <span className="text-xs font-medium">Exp.</span>
            <span className="text-xs font-medium">11/12/2024</span>
          </div>
          <div>
            <span className="text-xs">􀍠</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomCard
