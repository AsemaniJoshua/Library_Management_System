import { NavLink, Outlet } from "react-router-dom";
import LogoWhite from "/assets/images/LogoWhite.png";
import dashboard_icon from "/assets/images/dashboard_icon.png";
import catalog_icon from "/assets/images/catalog_icon.png";
import book_icon from "/assets/images/book_icon.png";
import logout_icon from "/assets/images/logout_icon.png";
import user_icon from "/assets/images/user.png";
import setting_icon from "/assets/images/setting_icon.png";
import { useState, useEffect } from "react";
import { IoMdSettings } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Swal from "sweetalert2";

function MainLayout() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [settings, setSettings] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // update every second
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const handleSubmit = () => {
    // Handle form submission logic here
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
    console.log("Form submitted");
    setSettings(false); // Close the settings modal after submission
  };

  return (
    <section className="h-screen absolute inset-0 w-screen flex flex-row bg-gradient-to-br from-gray-100 via-blue-50 to-white">
      {/* SideBar */}
      <aside className="w-[220px] h-screen fixed top-0 left-0 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 text-blue-900 flex flex-col gap-[40px] p-4 shadow-lg border-r border-blue-200">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <img src={LogoWhite} alt="Logo" className="w-[55px] h-[55px]" />
          <h1 className="text-2xl font-semibold tracking-wide text-blue-900">
            BookWorm
          </h1>
        </div>

        {/* Navlinks */}
        <ul className="list-none flex flex-col items-center gap-[20px] justify-center">
          {/* Dashboard */}
          <li className="list-none text-sm w-full">
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `flex flex-row items-center gap-[10px] transition duration-300 cursor-pointer py-[8px] px-4 rounded-lg w-full
                ${
                  isActive
                    ? "bg-blue-100 text-blue-900 font-semibold shadow"
                    : "text-blue-900 hover:bg-blue-50 hover:text-blue-700"
                }`
              }
            >
              <img src={dashboard_icon} alt="dashboard_icon" />
              Dashboard
            </NavLink>
          </li>

          {/* Catalog */}
          <li className="list-none text-sm w-full">
            <NavLink
              to="/dashboard/catalog"
              className={({ isActive }) =>
                `flex flex-row items-center gap-[10px] transition duration-300 cursor-pointer py-[8px] px-4 rounded-lg w-full
                ${
                  isActive
                    ? "bg-purple-100 text-purple-900 font-semibold shadow"
                    : "text-blue-900 hover:bg-purple-50 hover:text-purple-700"
                }`
              }
            >
              <img src={catalog_icon} alt="catalog_icon" />
              Catalog
            </NavLink>
          </li>

          {/* Books */}
          <li className="list-none text-sm w-full">
            <NavLink
              to="/dashboard/books"
              className={({ isActive }) =>
                `flex flex-row items-center gap-[10px] transition duration-300 cursor-pointer py-[8px] px-4 rounded-lg w-full
                ${
                  isActive
                    ? "bg-emerald-100 text-emerald-900 font-semibold shadow"
                    : "text-blue-900 hover:bg-emerald-50 hover:text-emerald-700"
                }`
              }
            >
              <img src={book_icon} alt="book_icon" />
              Books
            </NavLink>
          </li>
        </ul>

        {/* Logout */}
        <div
          className="flex flex-row items-center gap-[10px] text-blue-900 hover:text-red-500 transition duration-300 cursor-pointer py-[5px] text-base mt-auto justify-center border-t border-blue-100 pt-6"
          onClick={() => {
            Swal.fire({
              title: "Are you sure?",
              text: "Do you want to logout?",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#d33",
              cancelButtonColor: "#B3B3B3",
              confirmButtonText: "Logout",
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Logout Successful",
                  showConfirmButton: false,
                  timer: 1500,
                });
                // Redirect to the login page or perform logout logic here
                window.location.href = "/";
              }
            });
          }}
        >
          <img src={logout_icon} alt="logout_icon" />
          Logout
        </div>
      </aside>

      {/* Navbar and Main Content */}
      <div className="flex-1 flex flex-col h-screen ml-[220px] bg-gradient-to-br from-gray-100 via-blue-50 to-white overflow-auto">
        {/* Navbar */}
        <nav
          className="h-[60px] bg-white flex items-center justify-between p-4 shadow-lg fixed"
          style={{
            width: "calc(100vw - 220px)",
            left: 220,
            top: 0,
            zIndex: 10,
          }}
        >
          <div className="flex flex-row items-center gap-[10px]">
            {/* user icon */}
            <img src={user_icon} alt="user_icon" />
            {/* user name and type */}
            <div className="flex flex-col">
              <h2 className="text-base font-semibold text-blue-900">
                Joshua Asemani
              </h2>
              <p className="text-sm text-blue-400">user</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-[10px]">
            <div className="flex flex-col items-center gap-[5px] border-r border-blue-200 pr-2 text-blue-900">
              {/* Current Time */}
              <p className="text-base font-semibold">
                {currentTime
                  .toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                  .replace(/(\d{1,2}:\d{2})\s([AP]M)/, (_, time, period) => {
                    return `${time} ${period.toUpperCase()}`;
                  })}
              </p>
              {/* Current Date */}
              <p className="text-sm text-blue-400">
                {currentTime.toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
            <img
              src={setting_icon}
              alt="setting_icon"
              className="cursor-pointer"
              onClick={() => setSettings(true)}
            />
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 flex flex-col p-[60px] bg-transparent mt-[60px] overflow-x-hidden">
          {/* Outlet */}
          <Outlet />
        </main>

        {/* Seetings Modal */}
        {settings && (
          <section className="fixed inset-0 flex items-center justify-center bg-[#cfcfcfa1] bg-opacity-20 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col items-start gap-[20px]">
              <div className="flex flex-row items-center justify-between w-full p-[30px] border-b border-gray-400">
                {/* Settings Header with Icon */}
                <div className="flex flex-row items-center gap-[5px]">
                  <IoMdSettings className="text-2xl" />
                  <h2 className="text-xl font-semibold mb-1">
                    Change Credentials
                  </h2>
                </div>

                {/* Close Icon */}
                <IoIosCloseCircleOutline
                  className="text-2xl text-gray-500 cursor-pointer transition-colors duration-300"
                  onClick={() => setSettings(false)}
                />
              </div>

              {/* Settings Form */}
              <form
                className="w-full flex flex-col gap-[20px]"
                onSubmit={() => handleSubmit()}
              >
                <div className="flex flex-col">
                  <label
                    htmlFor="username"
                    className="text-sm font-medium text-gray-700 mb-1"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your username"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="CurrentPassword"
                    className="text-sm font-medium text-gray-700 mb-1"
                  >
                    Current Password
                  </label>
                  <input
                    type="password"
                    id="CurrentPassword"
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter current password"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="NewPassword"
                    className="text-sm font-medium text-gray-700 mb-1"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    id="NewPassword"
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter new password"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 ml-auto"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}

export default MainLayout;
