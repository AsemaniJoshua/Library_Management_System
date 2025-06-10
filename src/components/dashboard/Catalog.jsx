import { Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";


function Catalog() {

    const [activeTab, setActiveTab] = useState("borrowed");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Simulate loading data
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Simulate a 1 second loading time
        return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-white">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
                <p className="ml-4 text-gray-500">Loading....</p>
            </div>
        );
    }


    return (
        <section className="flex flex-col items-center justify-center gap-[50px] p-[20px]">

            {/* Navigation bar */}
            <div>

                {/* Borrowed and Returned Button Div */}
                <div className="flex gap-[20px]">
                    {/* Borrowed Button */}
                    <button
                    className={
                        `px-4 py-2 rounded-lg transition-colors duration-300 ${
                            activeTab === "borrowed"
                                ? "bg-black text-white"
                                : "bg-gray-400 text-black hover:bg-gray-700 hover:text-white"
                        }`
                    }
                    onClick={() => setActiveTab("borrowed")}
                    >
                        Borrowed
                    </button>
                    
                    {/* Returned Button */}
                    <button
                    className={
                        `px-4 py-2 rounded-lg transition-colors duration-300 ${
                            activeTab === "borrowed"
                                ? "bg-black text-white"
                                : "bg-gray-400 text-black hover:bg-gray-700 hover:text-white"
                        }`
                    }
                    onClick={() => setActiveTab("returned")}
                    >
                        Returned
                    </button>
                </div>

                {/* Search Input */}
                <div>
                    <input
                        type="text"
                        placeholder="Search for books, authors, or categories..."
                        className="w-full max-w-md p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

            </div>

            {/* Catalog content */}
            <section className="bg-white">
                
            </section>
            
        </section>
    );
}

export default Catalog;