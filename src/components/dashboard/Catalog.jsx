import { Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { TiArrowForwardOutline } from "react-icons/ti";
import Swal from "sweetalert2";
import { GrFormView } from "react-icons/gr";

function Catalog() {
  const [activeTab, setActiveTab] = useState("borrowed");
  const [data, setData] = useState([]);  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewBook, setViewBook] = useState(false);

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

  const handleReturn = (BookID) => {
    Swal.fire({
      title: "Success!",
      text: `You have successfully returned the book with ID ${BookID}!`,
      icon: "success",
      confirmButtonText: "OK",
    });
    setData(prevData => prevData.filter(item => item.id !== BookID));
  };

  // Render view Modal
  const handleView = (Book) => (
          <section className="fixed inset-0 flex items-center justify-center bg-[#cfcfcfa1] bg-opacity-20 z-50">

            <div className="bg-gray-50 p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col items-start gap-[20px]">

              <h2 className="text-xl font-semibold mb-4">Book Details</h2>
              <p className="text-gray-700"><strong className="text-blue-600">Book ID:</strong> {Book.id}</p>
              <p className="text-gray-700"><strong className="text-blue-600">Title:</strong> {Book.title}</p>
              <p className="text-gray-700"><strong className="text-blue-600">Author:</strong> {Book.author}</p>
              <p className="text-gray-700"><strong className="text-blue-600">Returned Date:</strong> {Book.returnedDate}</p>
              <p className="text-gray-700"><strong className="text-blue-600">Due Dtae:</strong> {Book.dueDate}</p>
              <p className="text-gray-700"><strong className="text-blue-600">Status:</strong> {Book.status}</p>
              <p className="text-gray-700"><strong className="text-blue-600">Quantity:</strong> {Book.Quantity}</p>

              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 ml-auto"
                onClick={() => setViewBook(false)}
              >
                Close
              </button>

            </div>

          </section>
  );

  return (
    <section className="flex flex-col items-center justify-center gap-[20px] bg-gradient-to-br from-gray-100 via-blue-50 to-white flex-1 w-full">
      {/* Navigation bar */}
      <div className="flex flex-col lg:flex-row items-center lg:justify-between justify-center w-full bg-white px-[30px] py-[20px] rounded-lg shadow-md sticky top-[-50px] bottom-[92%] mt-[-50px]">
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
                    <th className="py-2 px-4 text-blue-700 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-blue-50 cursor-pointer text-left border-b border-blue-50 text-sm"
                    >
                      <td className="py-2 px-4 text-blue-900">{item.id}</td>
                      <td className="py-2 px-4 text-blue-900">{item.user_id}</td>
                      <td className="py-2 px-4 text-blue-900">{item.title}</td>
                      <td className="py-2 px-4 text-blue-900">{item.Quantity}</td>
                      <td className="py-2 px-4 text-blue-900">{item[`${activeTab}Date`] || item.date}</td>
                      <td className="py-2 px-4 text-blue-900">{item.dueDate}</td>
                      {activeTab === "borrowed" ? (
                        <td className="py-2 px-4 text-blue-900">
                          <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex flex-row items-center justify-center cursor-pointer text-sm"
                            onClick={() => handleReturn(item.id)}
                          >
                            <TiArrowForwardOutline className="inline-block mr-2" />
                            Return
                          </button>
                        </td>
                      ) : 
                      <td className="py-2 px-4 text-blue-900">
                          <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex flex-row items-center justify-center cursor-pointer text-sm"
                            onClick={() => {
                              setViewBook(item);
                            }}
                          >
                            <GrFormView className="inline-block mr-2" />
                            View
                          </button>
                        </td>}
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

      {/* View Modal */}
      {viewBook && (
        handleView(viewBook)
      )}
    </section>
  );
}

export default Catalog;
