import React from 'react';
import './Dashboard.css';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import RemoveIcon from '@mui/icons-material/Remove';
import data from "../Data/DashboardData.json";
const Dashboard = () => {
  return (
    <div className='main-dashboard'>
      <div className="left-dashboard">
        <img src="./images/Marriott_International 1.png" alt="something is wrong" />

        <div className="left-others">
          <div className="reports flex">
            <img src="./images/Vector.png" alt="something is wrong" />
            <span>Reports</span>
          </div>
          <div className="workspace flex">
            <h3>Workspace</h3>
          </div>
          <div className="settings flex">
            <SettingsIcon />
            <h3>Setting</h3>
          </div>
        </div>
      </div>
      <div className="right-dashboard flex">
        <div className="upper-section flex">
          <h2>Orders</h2>
          <div className="add-orders flex">
            <AddIcon/>
            <span>Add Orders</span>
          </div>
        </div>

        <div className="right-dashboard-bottom">
          <div className="second-upper flex">
            <h2>Confirmed</h2>
            <div className="remove flex">
              <RemoveIcon />
            </div>
          </div>

          <div className="search-section flex">
            <div className="search-icon flex">
              <SearchIcon />
              <input type="search" placeholder='Search' />
            </div>


            <div className="activeOrder-amount flex">
              <div className="active-order">
                <select name='All content' id='allContent'>
                  <option defaultValue>ACTIVE ORDERS</option>
                  <option>Confirmed</option>
                  <option>Delivered</option>
                  <option>Refund Completed(30d)</option>
                  <option>Pending</option>
                </select>
              </div>

              <div className="amount-sort active-order">
                <select name="amount-filter" id="amountFilter">
                  <option value="">0 to 500</option>
                  <option value="">500 to 1000</option>
                  <option value="">1000 to 10,000</option>
                  <option value="">more than 10,000</option>
                </select>
              </div>

              <div className="placed-on active-order">
                <select name="filterDate" id="filterDate">
                  <option value="Placed on" defaultValue>Placed on</option>
                </select>
              </div>

              <div className="option">
                <select>
                  <option value="Options" defaultValue>Options</option>
                </select>
              </div>
            </div>

            
          </div>
            {
              data.map((item,idx) => {
                return (
                  <div className='main-dash-prod'>
                    <div className="prod-dash-img">
                      <div className="dash-img">
                        <img src={item.img} alt="something is wrong" />
                      </div>

                      <h3>{item.title}</h3>
                    </div>

                    <div className="dash-orders flex">
                      <h3>{item.activeOrder}</h3>
                      <h3>{item.amount}</h3>
                      <h3>{item.date}</h3>
                      <h3>{item.options}</h3>
                    </div>
                  </div>
                )
              })
            }


        </div>
      </div>
    </div>
  )
}

export default Dashboard
