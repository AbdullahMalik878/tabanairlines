import React, { useState } from "react";
import {
  RiMenu2Fill,
  RiDashboardLine,
  RiCalendarLine,
  RiFileListLine,
  RiRefundLine,
  RiBarChartLine,
  RiFlightTakeoffLine,
  RiMoneyDollarCircleLine,
  RiAdminLine,
  RiSettings3Line,
  RiPlaneLine,
  RiUserLine,
  RiBuildingLine,
  RiMoneyRupeeCircleLine,
  RiTicketLine,
  RiShieldLine,
  RiArrowDownSFill,
  RiArrowUpSFill,
} from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "@/hooks/storeHook";
import { setSidebarToggleStateAction } from "@/store/Services/Controls";
import logo from "../../../assets/tabanair-logo-et-removebg-preview.png";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { sidebarActiveState } = useAppSelector((state) => state.appcontrols);

  const handleSidebarToggle = () => {
    dispatch(
      setSidebarToggleStateAction({
        newValue: !sidebarActiveState,
      })
    );
  };

  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };

  return (
    <div
      className={`bg-primary ${
        sidebarActiveState ? "w-64" : "w-20"
      } min-h-screen text-primary-foreground p-2 relative transition-width duration-300`}
    >
      {/* Menu button */}
      <span
        onClick={handleSidebarToggle}
        className="h-8 w-8 bg-primary absolute left-full top-4 flex flex-col justify-center items-center ml-1 rounded-sm text-primary-foreground sm:hidden cursor-pointer"
      >
        <RiMenu2Fill className="text-lg" />
      </span>
      <aside className="bg-primary min-h-screen text-primary-foreground p-4">
        <div className="flex items-center justify-center mb-6">
          {sidebarActiveState && (
            <img src={logo} alt="Company Logo" />
          )}
        </div>
        <ul>
          <li className="py-2 px-4 hover:bg-gray-700 flex items-center">
            <RiDashboardLine className="mr-2" />
            {sidebarActiveState && <Link to="/">Dashboard</Link>}
          </li>
          <li className="py-2 px-4 hover:bg-gray-700 flex items-center">
            <RiCalendarLine className="mr-2" />
            {sidebarActiveState && <Link to="/availability">Availability</Link>}
          </li>
          <li className="py-2 px-4 hover:bg-gray-700 flex items-center">
            <RiFileListLine className="mr-2" />
            {sidebarActiveState && <Link to="/flight-manifest">Flight Manifest</Link>}
          </li>
          <li className="py-2 px-4 hover:bg-gray-700 flex items-center">
            <RiRefundLine className="mr-2" />
            {sidebarActiveState && <Link to="/refund">Refund</Link>}
          </li>
          <li className="py-2 px-4 hover:bg-gray-700 flex items-center">
            <RiBarChartLine className="mr-2" />
            {sidebarActiveState && <Link to="/salesreport">Sales Report</Link>}
          </li>
          <li
            className="py-2 px-4 hover:bg-gray-700 cursor-pointer flex items-center justify-between"
            onClick={() => toggleMenu("flights")}
          >
            <div className="flex items-center">
              <RiFlightTakeoffLine className="mr-2" />
              {sidebarActiveState && "Flights"}
            </div>
            {sidebarActiveState && (
              openMenu === "flights" ? <RiArrowUpSFill /> : <RiArrowDownSFill />
            )}
          </li>
          {openMenu === "flights" && (
            <ul className={`ml-6 ${sidebarActiveState ? '' : 'hidden'}`}>
              <li className="py-2 px-4 hover:bg-gray-600 flex items-center">
                <RiPlaneLine className="mr-2" />
                <Link to="/flight-inventory">Flight Inventory</Link>
              </li>
              <li className="py-2 px-4 hover:bg-gray-600 flex items-center">
                <RiUserLine className="mr-2" />
                <Link to="/agent-seat-quota">Agent Seat Quota</Link>
              </li>
              <li className="py-2 px-4 hover:bg-gray-600 flex items-center">
                <RiBuildingLine className="mr-2" />
                <Link to="/flight-monitoring">Flight Monitoring</Link>
              </li>
              <li className="py-2 px-4 hover:bg-gray-600 flex items-center">
                <RiMoneyRupeeCircleLine className="mr-2" />
                <Link to="/flight-revenue">Flight Revenue</Link>
              </li>
            </ul>
          )}
          <li
            className="py-2 px-4 hover:bg-gray-700 cursor-pointer flex items-center justify-between"
            onClick={() => toggleMenu("financials")}
          >
            <div className="flex items-center">
              <RiMoneyDollarCircleLine className="mr-2" />
              {sidebarActiveState && "Financials"}
            </div>
            {sidebarActiveState && (
              openMenu === "financials" ? <RiArrowUpSFill /> : <RiArrowDownSFill />
            )}
          </li>
          {openMenu === "financials" && (
            <ul className={`ml-6 ${sidebarActiveState ? '' : 'hidden'}`}>
              <li className="py-2 px-4 hover:bg-gray-600 flex items-center">
                <RiMoneyRupeeCircleLine className="mr-2" />
                <Link to="/agent-payment">Agent Payment</Link>
              </li>
              <li className="py-2 px-4 hover:bg-gray-600 flex items-center">
                <RiTicketLine className="mr-2" />
                <Link to="/agent-selling-limit">Agent Selling Limit</Link>
              </li>
              <li className="py-2 px-4 hover:bg-gray-600 flex items-center">
                <RiShieldLine className="mr-2" />
                <Link to="/taxes">Taxes/Fees</Link>
              </li>
              <li className="py-2 px-4 hover:bg-gray-600 flex items-center">
                <RiRefundLine className="mr-2" />
                <Link to="/cancellation-charges">Cancellation Charges</Link>
              </li>
            </ul>
          )}
          <li
            className="py-2 px-4 hover:bg-gray-700 cursor-pointer flex items-center justify-between"
            onClick={() => toggleMenu("departureControl")}
          >
            <div className="flex items-center">
              <RiFlightTakeoffLine className="mr-2" />
              {sidebarActiveState && "Departure Control"}
            </div>
            {sidebarActiveState && (
              openMenu === "departureControl" ? <RiArrowUpSFill /> : <RiArrowDownSFill />
            )}
          </li>
          {openMenu === "departureControl" && (
            <ul className={`ml-6 ${sidebarActiveState ? '' : 'hidden'}`}>
              <li className="py-2 px-4 hover:bg-gray-600 flex items-center">
                <RiFileListLine className="mr-2" />
                <Link to="/pre-manifest">Pre Manifest</Link>
              </li>
              <li className="py-2 px-4 hover:bg-gray-600 flex items-center">
                <RiFileListLine className="mr-2" />
                <Link to="/flight-checkin">Flight Checkin</Link>
              </li>
              <li className="py-2 px-4 hover:bg-gray-600 flex items-center">
                <RiFileListLine className="mr-2" />
                <Link to="/post-manifest">Post Manifest</Link>
              </li>
            </ul>
          )}
          <li
            className="py-2 px-4 hover:bg-gray-700 cursor-pointer flex items-center justify-between"
            onClick={() => toggleMenu("administration")}
          >
            <div className="flex items-center">
              <RiAdminLine className="mr-2" />
              {sidebarActiveState && "Administration"}
            </div>
            {sidebarActiveState && (
              openMenu === "administration" ? <RiArrowUpSFill /> : <RiArrowDownSFill />
            )}
          </li>
          {openMenu === "administration" && (
            <ul className={`ml-6 ${sidebarActiveState ? '' : 'hidden'}`}>
              <li className="py-2 px-4 hover:bg-gray-600 flex items-center">
                <RiUserLine className="mr-2" />
                <Link to="/agents">Agents</Link>
              </li>
              <li className="py-2 px-4 hover:bg-gray-600 flex items-center">
              <RiUserLine className="mr-2" />
                <Link to="/users">Users</Link>
              </li>
              <li className="py-2 px-4 hover:bg-gray-600 flex items-center">
              <RiPlaneLine className="mr-2" />
                <Link to="/flights">Flights</Link>
              </li>
              <li className="py-2 px-4 hover:bg-gray-600 flex items-center">
                <RiBuildingLine className="mr-2" />
                <Link to="/airports">Airports</Link>
              </li>
            </ul>
          )}
          <li
            className="py-2 px-4 hover:bg-gray-700 cursor-pointer flex items-center justify-between"
            onClick={() => toggleMenu("site-settings")}
          >
            <div className="flex items-center">
             <RiSettings3Line className="mr-2" />
              {sidebarActiveState && "Site Settings"}
            </div>
            {sidebarActiveState && (
              openMenu === "site-settings" ? <RiArrowUpSFill /> : <RiArrowDownSFill />
            )}
          </li>
          {openMenu === "site-settings" && (
            <ul className={`ml-6 ${sidebarActiveState ? '' : 'hidden'}`}>
              <li className="py-2 px-4 hover:bg-gray-600 flex items-center">
              <RiSettings3Line className="mr-2" />
                <Link to="/site-settings">PSS Name</Link>
              </li>
              <li className="py-2 px-4 hover:bg-gray-600 flex items-center">
              <RiMoneyRupeeCircleLine className="mr-2" />
                <Link to="/currency">Currency</Link>
              </li>
              <li className="py-2 px-4 hover:bg-gray-600 flex items-center">
               <RiUserLine className="mr-2" />
                <Link to="/agent-role">Agent Role</Link>
              </li>
              <li className="py-2 px-4 hover:bg-gray-600 flex items-center">
              <RiPlaneLine className="mr-2" />
                <Link to="/airline">Airline</Link>
              </li>
            </ul>
          )}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
