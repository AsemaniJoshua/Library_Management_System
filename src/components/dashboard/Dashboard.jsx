import browse_icon from "/assets/images/browse.png";
import book_square from "/assets/images/book-square.png";
import return_btn_black from "/assets/images/return_btn_black.png";
import PieChart from "../PieChart";




function Dashboard(){

    return(
        <section className="h-screen flex flex-col lg:flex-row gap-[20px] p-[10px] bg-gray-100">

            {/* Texts and Icons */}
            <div className="flex flex-col gap-[50px]">

                {/* Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                    {/* card 1 */}
                    <div className="border-t-[7px] border-gray-300 bg-white flex flex-col gap-[10px] w-[300px] h-[150px] rounded-xl items-center justify-center cursor-pointer">
                        <p>
                            <img src={book_square} alt="Book Icon" className="w-[45px] h-[45px]" />
                        </p>
                        <h2 className="text-lg font-semibold mb-[-10px] mt-[10px]">Browse Catalog</h2>
                        <p className="text-sm text-gray-400">Browse available book inventory </p>
                    </div>

                    {/* card 2 */}
                    <div className="border-t-[7px] border-gray-500 bg-white flex flex-col gap-[10px] w-[300px] h-[150px] rounded-xl items-center justify-center cursor-pointer">

                        <p>
                            <img src={return_btn_black} alt="Return Icon" className="w-[45px] h-[45px]" />
                        </p>
                        <h2 className="text-lg font-semibold mb-[-10px] mt-[10px]">Returned Books</h2>
                        <p className="text-sm text-gray-400">View list of returned books</p>

                    </div>

                    {/* card 3 */}
                    <div className="border-t-[7px] border-black bg-white flex flex-col gap-[10px] w-[300px] h-[150px] rounded-xl items-center justify-center cursor-pointer">

                        <p>
                            <img src={browse_icon} alt="Browse Icon" className="w-[45px] h-[45px]" />
                        </p>
                        <h2 className="text-lg font-semibold mb-[-10px] mt-[10px]">Borrowed Books</h2>
                        <p className="text-sm text-gray-400">View list of borrowed books</p>

                    </div>

                </div>

                {/* Testimonial */}
                <div className="bg-white p-[30px] rounded-xl shadow-lg w-[450px] h-[150px] flex flex-col gap-[10px] items-center justify-center">

                    <p className="text-sm">"Embarking on the journey of reading fosters personal growth, nurturing a path towards excellence and the refinement of character."</p>

                    <p className="text-sm text-gray-500 ml-auto">- Anonymous</p>

                </div>

            </div>

            {/* Chart */}
            <div className="flex items-center justify-center relative right-[-20px]">

                <PieChart />

            </div>

        </section>
    );
}

export default Dashboard;