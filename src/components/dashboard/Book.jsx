import { Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { TiArrowForwardOutline } from "react-icons/ti";
import Swal from "sweetalert2";
import { GrFormView } from "react-icons/gr";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { BsInfoCircleFill } from "react-icons/bs";
import { FiSend } from "react-icons/fi";

function Book() {
  // const [activeTab, setActiveTab] = useState("borrowed");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewBook, setViewBook] = useState(false);
  const [acquireBook, setAcquireBook] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`/JSON Data/AllBooks.json`);
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
  }, []);

  // Filter data for search
  const filteredData = searchTerm
    ? data.filter((item) =>
        item.title?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data;

  const handleBorrow = (Book) => {
    Swal.fire({
      title: "Are you sure?",
      html: `Do you want to Borrow this book?<br/><br/><b style="text-align: left">Book ID</b>: ${Book.id}<br/><b style="text-align: left">Title</b>: ${Book.title}<br/><b style="text-align: left">Author</b>: ${Book.author}<br/><b style="text-align: left">Type</b>: ${Book.type}<br/><b style="text-align: left">Language</b>: ${Book.language}<br/><b style="text-align: left">Availability</b>: ${Book.availability}<br/><b style="text-align: left">Quantity</b>: ${Book.quantity}`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3B82F6",
      cancelButtonColor: "#B3B3B3",
      confirmButtonText: "Yes, Borrow it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Borrowed Successful",
          text: `You have successfully borrowed the book with ID ${Book.id}!`,
          showConfirmButton: false,
          timer: 1500,
        });
        // Redirect to the login page or perform logout logic here
        setData((prevData) => prevData.filter((item) => item.id !== Book.id));
      }
    });
  };

  // Form submission handler for acquiring a book
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    Swal.fire({
      text: "Book request submitted successfully!",
      position: "top-end",
      icon: "success",
      title: "Request Successful",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  // Render view Modal
  const handleView = (Book) => (
    <section className="fixed inset-0 flex items-center justify-center bg-[#cfcfcfa1] bg-opacity-20 z-50">
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col items-start gap-[20px]">
        <h2 className="text-xl font-semibold mb-4">Book Details</h2>
        <p className="text-gray-700">
          <strong className="text-blue-600">Book ID:</strong> {Book.id}
        </p>
        <p className="text-gray-700">
          <strong className="text-blue-600">Title:</strong> {Book.title}
        </p>
        <p className="text-gray-700">
          <strong className="text-blue-600">Author:</strong> {Book.author}
        </p>
        <p className="text-gray-700">
          <strong className="text-blue-600">Returned Date:</strong> {Book.type}
        </p>
        <p className="text-gray-700">
          <strong className="text-blue-600">Due Dtae:</strong> {Book.language}
        </p>
        <p className="text-gray-700">
          <strong className="text-blue-600">Status:</strong> {Book.availability}
        </p>
        <p className="text-gray-700">
          <strong className="text-blue-600">Quantity:</strong> {Book.quantity}
        </p>

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
        {/* Library pane books */}
        <h2 className="text-2xl font-semibold">Library Pane Books</h2>
        {/* Search Input */}
        <div className="flex space-x-4">
          {/* Acquire Button to Request for a book which is not available */}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center text-sm cursor-pointer w-[230px]"
            onClick={() => setAcquireBook(true)}
          >
            <BsInfoCircleFill className="inline-block mr-2" />
            Acquire Book
          </button>
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
          <div className="flex items-center justify-center h-screen w-full">
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
                  <tr className="text-center border-b border-blue-200">
                    <th className="py-2 px-4 text-blue-700 font-semibold">
                      Book ID
                    </th>
                    <th className="py-2 px-4 text-blue-700 font-semibold">
                      Book Title
                    </th>
                    <th className="py-2 px-4 text-blue-700 font-semibold">
                      Author
                    </th>
                    <th className="py-2 px-4 text-blue-700 font-semibold">
                      Type
                    </th>
                    <th className="py-2 px-4 text-blue-700 font-semibold">
                      Language
                    </th>
                    <th className="py-2 px-4 text-blue-700 font-semibold">
                      Availability
                    </th>
                    <th className="py-2 px-4 text-blue-700 font-semibold">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-blue-50 cursor-pointer text-center border-b border-blue-50 text-sm"
                      onClick={() => handleView(item)}
                    >
                      <td
                        className="py-2 px-4 text-blue-900"
                        onClick={() => handleView(item)}
                      >
                        {item.id}
                      </td>
                      <td
                        className="py-2 px-4 text-blue-900"
                        onClick={() => handleView(item)}
                      >
                        {item.title}
                      </td>
                      <td
                        className="py-2 px-4 text-blue-900"
                        onClick={() => handleView(item)}
                      >
                        {item.author}
                      </td>
                      <td
                        className="py-2 px-4 text-blue-900"
                        onClick={() => handleView(item)}
                      >
                        {item.type}
                      </td>
                      <td
                        className="py-2 px-4 text-blue-900"
                        onClick={() => handleView(item)}
                      >
                        {item.language}
                      </td>
                      <td
                        className="py-2 px-4 text-blue-900"
                        onClick={() => handleView(item)}
                      >
                        {item.availability === "Available" ? (
                          <span className="text-white text-xs bg-green-400 font-light py-2 px-4 rounded-full">
                            {item.availability}
                          </span>
                        ) : (
                          <span className="text-white text-xs bg-red-400 font-light py-2 px-4 rounded-full">
                            {item.availability}
                          </span>
                        )}
                      </td>
                      {item.availability === "Available" ? (
                        <td className="py-2 px-4 text-blue-900">
                          <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex flex-row items-center justify-center cursor-pointer text-sm"
                            onClick={() => handleBorrow(item)}
                          >
                            <MdOutlineAddShoppingCart className="inline-block mr-2" />
                            Borrow
                          </button>
                        </td>
                      ) : (
                        <td className="py-2 px-4 text-blue-900">
                          <span
                            className="text-gray-500 text-sm"
                            disabled={true}
                          >
                            No Action
                          </span>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-500">
                No {searchTerm ? "results" : "data"} found.
              </p>
            )}
          </div>
        )}
      </div>

      {/* View Modal */}
      {viewBook && handleView(viewBook)}

      {/* Form modal for the user to request a book */}
      {acquireBook && (
        <section className="fixed inset-0 flex items-center justify-center bg-[#cfcfcfa1] bg-opacity-20 z-50">
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col items-start gap-[20px]">
            <h2 className="text-xl font-semibold mb-4">Acquire Book</h2>
            <p className="text-gray-700 text-sm">
              To acquire a book, please fill this form
            </p>
            <p className="text-gray-700 text-sm">
              Provide the following details:
            </p>
            {/* form to get the id, title, author, and quantity */}
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-[10px]">
                <input
                  type="text"
                  name="id"
                  id="id"
                  placeholder="Enter Book ID"
                  className="text-sm rounded-lg py-2 px-4 border border-blue-200 focus:border-blue-500"
                  required
                />
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Enter Book Title"
                  className="text-sm rounded-lg py-2 px-4 border border-blue-200 focus:border-blue-500"
                  required
                />
                <input
                  type="text"
                  name="author"
                  id="author"
                  placeholder="Enter Book Author"
                  className="text-sm rounded-lg py-2 px-4 border border-blue-200 focus:border-blue-500"
                  required
                />
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  placeholder="Enter Quantity"
                  className="text-sm rounded-lg py-2 px-4 border border-blue-200 focus:border-blue-500"
                  required
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-row gap-[10px] items-center justify-center mt-[20px]">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex flex-row items-center justify-center cursor-pointer text-sm"
                  type="submit"
                >
                  <FiSend className="inline-block mr-2" />
                  Acquire
                </button>
                <button
                  className="bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors duration-300 flex flex-row items-center justify-center cursor-pointer text-sm"
                  onClick={() => setAcquireBook(false)}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </section>
  );
}

export default Book;
