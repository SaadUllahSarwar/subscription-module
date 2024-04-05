import React from "react"

const PlansDetail = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full ml-4 p-2">
      <div className="flex flex-row justify-between">
        <h1 className="font-mono text-xl font-bold">Plan Detail</h1>
        <button className="rounded-full font-mono bg-green-300 hover:bg-green-500">
          Change Plan
        </button>
      </div>
      <div className="flex mt-4">
        <div className="grid grid-cols-5 gap-16">
          <div className="current-plan-parent">
            <div className="font-bold">Current Plan</div>
            <div>Pro</div>
          </div>
          <div className="current-plan-parent">
            <div className="font-bold">Billing Period</div>
            <div>Monthly</div>
          </div>
          <div className="current-plan-parent">
            <div className="font-bold">Renewal date</div>
            <div>Apr 17, 2024</div>
          </div>
          <div className="current-plan-parent">
            <div className="font-bold">Total</div>
            <div>$72</div>
          </div>
          <div className="current-plan-parent">
            <div className="font-bold">Status</div>
            <div>Pending</div>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 my-2" />
      <div className="flex flex-row justify-end">
        <button
          className="text-underline-offset: auto font-semibold text-blue-500 hover:text-blue-700"
          onClick={() => console.log("clicked")}
        >
          Billing Detail
        </button>
      </div>
    </div>
  )
}

export default PlansDetail
