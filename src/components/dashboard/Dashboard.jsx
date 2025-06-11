import SankeyChart from "../SankeyChart.jsx";
import PieChart from "../PieChart";
import { IoBookOutline } from "react-icons/io5";
import { IoReturnUpForwardOutline } from "react-icons/io5";
import { MdOutlineTouchApp } from "react-icons/md";
import { GiBookshelf } from "react-icons/gi";
import { useState, useEffect } from "react";

// Modern color palette
const cardColors = [
  "border-t-[7px] border-blue-500 bg-gradient-to-br from-blue-50 to-white",
  "border-t-[7px] border-purple-500 bg-gradient-to-br from-purple-50 to-white",
  "border-t-[7px] border-emerald-500 bg-gradient-to-br from-emerald-50 to-white",
  "border-t-[7px] border-yellow-500 bg-gradient-to-br from-yellow-50 to-white"
];

function Dashboard() {
  const [recentActivity, setRecentActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/JSON Data/Recent.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRecentActivity(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
        <p className="text-lg text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <section className="h-screen flex flex-col gap-[40px] p-[10px] bg-gradient-to-br from-gray-100 via-blue-50 to-white mb-[40px]">

      {/* Texts and Icons */}
      <div>
        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-7">
          {/* Card 1 */}
          <div className={`${cardColors[0]} shadow-lg flex flex-col gap-[10px] w-[250px] h-[150px] rounded-xl items-center justify-center cursor-pointer transition hover:scale-105`}>
            <p className="bg-blue-100 p-2 rounded-full">
              <IoBookOutline className="text-3xl text-blue-600" />
            </p>
            <h2 className="text-lg font-semibold mb-[-10px] mt-[10px] text-blue-900">Browse Catalog</h2>
            <p className="text-sm text-blue-400">Browse available book inventory</p>
          </div>

          {/* Card 2 */}
          <div className={`${cardColors[1]} shadow-lg flex flex-col gap-[10px] w-[250px] h-[150px] rounded-xl items-center justify-center cursor-pointer transition hover:scale-105`}>
            <p className="bg-purple-100 p-2 rounded-full">
              <IoReturnUpForwardOutline className="text-3xl text-purple-600" />
            </p>
            <h2 className="text-lg font-semibold mb-[-10px] mt-[10px] text-purple-900">Returned Books</h2>
            <p className="text-sm text-purple-400">View list of returned books</p>
          </div>

          {/* Card 3 */}
          <div className={`${cardColors[2]} shadow-lg flex flex-col gap-[10px] w-[250px] h-[150px] rounded-xl items-center justify-center cursor-pointer transition hover:scale-105`}>
            <p className="bg-emerald-100 p-2 rounded-full">
              <MdOutlineTouchApp className="text-3xl text-emerald-600" />
            </p>
            <h2 className="text-lg font-semibold mb-[-10px] mt-[10px] text-emerald-900">Borrowed Books</h2>
            <p className="text-sm text-emerald-400">View list of borrowed books</p>
          </div>

          {/* Card 4 */}
          <div className={`${cardColors[3]} shadow-lg flex flex-col gap-[10px] w-[250px] h-[150px] rounded-xl items-center justify-center cursor-pointer transition hover:scale-105`}>
            <p className="bg-yellow-100 p-2 rounded-full">
              <GiBookshelf className="text-3xl text-yellow-600" />
            </p>
            <h2 className="text-lg font-semibold mb-[-10px] mt-[10px] text-yellow-900">My Books</h2>
            <p className="text-sm text-yellow-400 text-center">View list of books you have borrowed and returned</p>
          </div>
        </div>
      </div>

      {/* Testimonial and Chart */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-[30px]">
        <div className="flex flex-col items-center justify-between gap-[30px] w-full">

            {/* Sankey Chart */}
            <SankeyChart />

            {/* Testimonial */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-[30px] rounded-xl shadow-lg w-[450px] h-[150px] flex flex-col gap-[10px] items-center justify-center border border-blue-100">
            <p className="text-base text-blue-900 font-medium">"Embarking on the journey of reading fosters personal growth, nurturing a path towards excellence and the refinement of character."</p>
            <p className="text-sm text-blue-400 ml-auto">- Anonymous</p>
 
        </div>
        </div>

        {/* Chart */}
        <PieChart />

      </div>

      {/* Recent Activity */}
      <div className="bg-gradient-to-br from-white to-blue-50 p-[30px] rounded-xl shadow-lg w-full flex flex-col gap-[10px] border border-blue-100">
        <h2 className="text-lg font-semibold border-b border-blue-200 mt-[10px] py-[10px] text-blue-900">Recent Activity</h2>
        {error ? (
          <p className="text-red-500 text-sm">Error fetching recent activity: {error}</p>
        ) : (
          <table className="min-w-full bg-transparent rounded-xl">
            <thead>
              <tr>
                <th className="text-left text-base font-semibold text-blue-700 border-b border-blue-200 py-3 px-4">Activity</th>
                <th className="text-left text-base font-semibold text-blue-700 border-b border-blue-200 py-3 px-4">Date</th>
                <th className="text-left text-base font-semibold text-blue-700 border-b border-blue-200 py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentActivity.map((activity, index) => (
                <tr key={index} className="border-b border-blue-100 text-left hover:bg-blue-50 transition">
                  <td className="text-sm text-blue-900 py-2 px-4">{activity.Activity}</td>
                  <td className="text-sm text-blue-900 py-2 px-4">{activity.Date}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-2 py-1 rounded-full font-medium text-xs ${
                        activity.Status === "Returned"
                          ? "bg-emerald-400 text-white"
                          : "bg-rose-400 text-white"
                      }`}
                    >
                      {activity.Status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Space */}
      <div className="h-[100px] w-full p-[20px]"></div>
    </section>
  );
}

export default Dashboard;