import React from "react"
import CustomCard from "../uiComponents/customCard"
import PlansDetail from "../uiComponents/plansDetailCard"

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col w-full p-4">
        <div className="w-5/6">
          <CustomCard header="Subscription TYPE-1" />
        </div>
        <div className="font-mono text-2xl mt-6 ml-4">
          <h1>Overview</h1>
          <hr className="border-gray-300 my-2" />
        </div>
        <div className="w-5/6 mt-2">
          <PlansDetail />
        </div>
        <div className="font-mono text-2xl mt-6 ml-4">
          <h1>Product Detail</h1>
        </div>
        <div className="flex flex-row">
          <CustomCard header="Transaction Monitoring" />
          <CustomCard header="KYC" />
          <CustomCard header="KYW" />
          <CustomCard header="Screening" />
        </div>
      </div>
    </>
  )
}

export default Dashboard
