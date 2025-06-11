import { useState } from "react";
import { Link } from "react-router-dom";
import LogoBlack from "/assets/images/LogoBlack.png";
import LogoWhite from "/assets/images/LogoWhite.png";

function ForgetPassword() {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("OTP sent to your email!");
      window.location.href = "/otp";
    }, 2000);
  }

  return (
    <section className="absolute inset-0 h-screen w-screen flex justify-center items-center bg-gradient-to-br from-gray-100 via-blue-50 to-white overflow-auto">
      <div className="lg:flex lg:flex-row-reverse rounded-2xl shadow-xl overflow-hidden">
        {/* Form Card */}
        <div className="max-w-md min-w-sm w-full bg-white p-[30px] flex flex-col gap-[20px] justify-center items-center">
          <img src={LogoBlack} className="w-[60px] h-[60px]" alt="Logo" />
          <h2 className="text-2xl font-semibold tracking-wider text-blue-900">Forgot Password</h2>
          <p className="text-sm text-blue-400">Enter your username to receive an OTP</p>
          <form className="flex flex-col gap-[20px] w-full p-[30px] mt-[-10px]" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="text-sm rounded-lg py-2 px-4 border border-blue-200 focus:border-blue-500"
              required
              onChange={e => setUsername(e.target.value)}
              value={username}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl w-full cursor-pointer transition ease-in-out duration-300 mt-[10px]"
            >
              {isLoading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
          <Link to="/" className="text-blue-700 hover:text-blue-900 text-sm font-medium mt-2">Back to Sign In</Link>
        </div>
        {/* Logo Side */}
        <div className="max-w-md min-w-sm w-full hidden lg:flex lg:flex-col bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 text-blue-900 justify-center items-center p-[50px] gap-[80px] rounded-tr-2xl rounded-br-2xl">
          <div className="flex flex-col gap-[10px] items-center">
            <img src={LogoWhite} className="" alt="Logo" />
            <div className="flex flex-col gap-[4px] items-center">
              <h2 className="text-4xl font-medium tracking-widest">BookWorm</h2>
              <span className="text-base tracking-wider font-light">LIBRARY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForgetPassword;
