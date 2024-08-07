import React from 'react'
import SideBar from './SideBar'
import Header from './Header'
import ActivityChart from './ActivityChart'
import RecentOrders from './RecentOrders'
import FeedBack from './FeedBack'
import './Dashboard.css';
const Dashboard = () => {
  return (
    <div className="dashboard d-flex flex-column flex-lg-row">
    <SideBar />
    <div className="main-content flex-grow-1 p-3">
      <Header />
      <div className="content">
        <div className="row mb-3">
          <div className="col-lg-4 col-sm-6 mb-3">
            <div className="stat-box bg-dark p-3 rounded">Total Orders</div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-3">
            <div className="stat-box bg-dark p-3 rounded">Total Delivered</div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-3">
            <div className="stat-box bg-dark p-3 rounded">Total Cancelled</div>
          </div>
        </div>
        <ActivityChart />
        <RecentOrders />
        <FeedBack />
      </div>
    </div>
  </div>
  )
}

export default Dashboard