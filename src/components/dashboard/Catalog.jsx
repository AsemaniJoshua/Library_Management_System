import { Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Catalog() {
  const [activeTab, setActiveTab] = useState("borrowed");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `/JSON Data/${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}.json`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setData([]);
        setError("Error fetching data: " + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [activeTab]);

  // Filter data for search
  const filteredData = searchTerm
    ? data.filter((item) =>
        item.title?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data;

  return (
    <section className="flex flex-col items-center justify-center gap-[20px] px-[20px] bg-gradient-to-br from-gray-100 via-blue-50 to-white flex-1 w-full">
      {/* Navigation bar */}
      <div className="flex flex-col lg:flex-row items-center lg:justify-between justify-center w-full gap-[40px] bg-white px-[30px] py-[20px] rounded-lg shadow-md sticky top-[-55px]">
        {/* Borrowed and Returned Button Div */}
        <div className="flex flex-row gap-[20px]">
          <button
            className={`px-4 py-2 rounded-lg transition-colors duration-300 cursor-pointer ${
              activeTab === "borrowed"
                ? "bg-blue-600 text-white"
                : "bg-blue-100 text-blue-900 hover:bg-blue-200"
            }`}
            onClick={() => setActiveTab("borrowed")}
          >
            Borrowed
          </button>
          <button
            className={`px-4 py-2 rounded-lg transition-colors duration-300 cursor-pointer ${
              activeTab === "returned"
                ? "bg-blue-600 text-white"
                : "bg-blue-100 text-blue-900 hover:bg-blue-200"
            }`}
            onClick={() => setActiveTab("returned")}
          >
            Returned
          </button>
        </div>
        {/* Search Input */}
        <div>
          <input
            type="text"
            placeholder="Search by title..."
            className="w-full py-2 px-4 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Catalog content */}
      <div className="w-full flex flex-col items-center">
        {loading && (
          <div className="flex items-center justify-center h-40 w-full">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            <p className="ml-4 text-gray-500">Loading....</p>
          </div>
        )}

        {error && (
          <div className="flex items-center justify-center h-40 w-full">
            <p className="text-red-500">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="flex flex-col items-center justify-center gap-[20px] p-[20px] w-full">
            {filteredData.length > 0 ? (
              <table className="bg-gradient-to-br from-gray-100 via-blue-50 to-white p-[20px] rounded-xl shadow-md border border-blue-100 w-full max-w-5xl">
                <thead>
                  <tr className="text-left border-b border-blue-200">
                    <th className="py-2 px-4 text-blue-700 font-semibold">Book ID</th>
                    <th className="py-2 px-4 text-blue-700 font-semibold">User ID</th>
                    <th className="py-2 px-4 text-blue-700 font-semibold">Book Title</th>
                    <th className="py-2 px-4 text-blue-700 font-semibold">Quantity</th>
                    <th className="py-2 px-4 text-blue-700 font-semibold">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Date</th>
                    <th className="py-2 px-4 text-blue-700 font-semibold">Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-blue-50 cursor-pointer text-left border-b border-blue-50"
                    >
                      <td className="py-2 px-4 text-blue-900">{item.id}</td>
                      <td className="py-2 px-4 text-blue-900">{item.user_id}</td>
                      <td className="py-2 px-4 text-blue-900">{item.title}</td>
                      <td className="py-2 px-4 text-blue-900">{item.Quantity}</td>
                      <td className="py-2 px-4 text-blue-900">{item[`${activeTab}Date`] || item.date}</td>
                      <td className="py-2 px-4 text-blue-900">{item.dueDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-500">No {searchTerm ? "results" : "data"} found.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Catalog;
