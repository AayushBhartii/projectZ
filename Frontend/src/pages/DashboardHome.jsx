import React, { useState, useEffect } from "react";
import DashboardAnalytics from "../components/DashboardComponets/Analytics";
import TodayOrdersSummary from "../components/DashboardComponets/TodaysOrderSummary";
import { FaArrowLeftLong } from "react-icons/fa6";
import DashboardStats from "../components/DashboardComponets/DashboardStats";
import CommentList from "../components/TiffinComponets/TiffinRightPanle/DataManagementComponents/ShowComments";


export default function DashboardHome() {
  return (
    <div className="space-y-2">
      <div>
        <DashboardStats />
      </div>

      <div className="md:flex-row flex flex-col gap-2 md:h-[70vh] h-[95vh]">
        <DashboardAnalytics />
      </div>

      <div className="md:flex-row flex flex-col gap-2 max-h-[50vh] overflow-y-auto">
        <TodayOrdersSummary />
        <CommentList fullWidth={false} maxHeight={false} limit={2} toggleShowMore = {true} />
      </div>
    </div >
  );
}

