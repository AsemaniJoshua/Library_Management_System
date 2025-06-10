import { NavLink, Outlet } from "react-router-dom";
import LogoWhite from "/assets/images/LogoWhite.png";
import dashboard_icon from "/assets/images/dashboard_icon.png";
import catalog_icon from "/assets/images/catalog_icon.png";
import book_icon from "/assets/images/book_icon.png";
import logout_icon from "/assets/images/logout_icon.png";
import user_icon from "/assets/images/user.png";
import setting_icon from "/assets/images/setting_icon.png";
import { useState, useEffect } from "react";

function MainLayout() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // update every second
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <section className="h-screen absolute inset-0 w-screen flex flex-row">
      {/* SideBar */}
      <aside className="w-[200px] h-screen fixed top-0 left-0 bg-black text-white flex flex-col gap-[40px] p-4">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <img src={LogoWhite} alt="Logo" className="w-[55px] h-[55px]" />
          <h1 className="text-2xl font-semibold tracking-wide">BookWorm</h1>
        </div>

        {/* Navlinks */}
        <ul className="list-none flex flex-col items-center gap-[20px] justify-center">
          {/* Dashboard */}

          <li className="list-none text-sm">
            <NavLink
              to="/dashboard/"
              end
              className={({ isActive }) =>
                `flex flex-row items-center gap-[10px] transition duration-300 cursor-pointer py-[5px] px-3 rounded-lg
    ${
      isActive
        ? "border-l-4 bg-[#ffffff1e] border-white px-[30px] py-[10px] font-semibold shadow"
        : "text-white hover:text-gray-300"
    }`
              }
            >
              <img src={dashboard_icon} alt="dashboard_icon"  />
              Dashboard
            </NavLink>
          </li>

          {/* Catalog */}

          <li className="list-none text-sm">
            <NavLink
              to="/dashboard/catalog"
              className={({ isActive }) =>
                `flex flex-row items-center gap-[10px] transition duration-300 cursor-pointer py-[5px] px-3 rounded-lg
    ${
      isActive
        ? "border-l-4 bg-[#ffffff1e] border-white px-[30px] py-[10px] font-semibold shadow"
        : "text-white hover:text-gray-300"
    }`
              }
            >
              <img src={catalog_icon} alt="catalog_icon" />
              Catalog <pre> </pre>
            </NavLink>
          </li>

          {/* Books */}

          <li className="list-none text-sm">
            <NavLink
              to="/dashboard/books"
              className={({ isActive }) =>
                `flex flex-row items-center gap-[10px] transition duration-300 cursor-pointer py-[5px] px-3 rounded-lg
    ${
      isActive
        ? "border-l-4 bg-[#ffffff1e] border-white px-[30px] py-[10px] font-semibold shadow"
        : "text-white hover:text-gray-300"
    }`
              }
            >
              <img src={book_icon} alt="book_icon" />
              Book <pre> </pre>
            </NavLink>
          </li>
        </ul>

        {/* Logout */}
        <div className="flex flex-row items-center gap-[10px] text-white hover:text-gray-300 transition duration-300 cursor-pointer py-[5px] text-base mt-[200px] justify-center">
          <img src={logout_icon} alt="logout_icon" />
          Logout <pre> </pre>
        </div>
      </aside>

      {/* Navbar and Main Content */}
      <div className="flex-1 flex flex-col h-screen ml-[200px] bg-gray-100 overflow-auto">
        {/* Navbar */}
        <nav className="h-[60px] bg-white flex items-center justify-between p-4 shadow-lg fixed"
             style={{ width: "calc(100vw - 200px)", left: 200, top: 0, zIndex: 10 }}>
          <div className="flex flex-row items-center gap-[10px]">
            {/* user icon */}
            <img src={user_icon} alt="user_icon" />

            {/* user name and type */}
            <div className="flex flex-col">
              <h2 className="text-base font-semibold">Joshua Asemani</h2>
              <p className="text-sm text-gray-500">user</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-[10px]">
            <div className="flex flex-col items-center  gap-[5px] border-r border-gray-900 pr-2 text-black">
              {/* Current Time */}
              <p className="text-base font-semibold">
                {currentTime
                .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                .replace(/(\d{1,2}:\d{2})\s([AP]M)/, (_, time, period) => {
                  return `${time} ${period.toUpperCase()}`;
                })}
              </p>
              {/* Current Date */}
              <p className="text-sm text-gray-500">
                {currentTime.toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>

            <img src={setting_icon} alt="setting_icon" />
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 flex flex-col p-[60px] bg-gray-100 mt-[60px] overflow-x-hidden">
          {/* Outlet */}
          <Outlet />
        </main>
      </div>
    </section>
  );
}

export default MainLayout;
