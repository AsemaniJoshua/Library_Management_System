import { Link } from "react-router-dom";
import LogoBlack from "/assets/images/LogoBlack.png"
import LogoWhite from "/assets/images/LogoWhite.png"
import { useState, useEffect } from "react";

function SignupAdmin() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSignup(event) {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Login successful!");
      window.location.href = "/"
    }, 3000);
    
  }

  return (
    <section className="absolute inset-0 h-screen w-screen flex justify-center items-center bg-gradient-to-br from-gray-100 via-blue-50 to-white overflow-auto">
      <div className="lg:flex lg:flex-row-reverse rounded-2xl shadow-xl overflow-hidden">
        {/* credential Div */}
        <div className="max-w-md min-w-sm w-full bg-white p-[30px] flex flex-col gap-[20px] justify-center items-center">
          <img src={LogoBlack} className="w-[60px] h-[60px]" alt="Logo" />
          <h2 className="text-2xl font-semibold tracking-wider text-blue-900">Sign Up</h2>
          <p className="text-sm text-blue-400">Provide your information to sign up</p>
          <form className="flex flex-col gap-[20px] w-full p-[30px] mt-[-10px]" onSubmit={handleSignup}>
            <input type="text" name="fullname" id="fullname" placeholder="Full Name" className="text-sm rounded-lg py-2 px-4 border border-blue-200 focus:border-blue-500" required onChange={(e) => setFullName(e.target.value)} value={fullname} />
            <input type="email" name="email" id="email" placeholder="Email" className="text-sm rounded-lg py-2 px-4 border border-blue-200 focus:border-blue-500" required onChange={(e) => setEmail(e.target.value)} value={email} autoComplete="email" />
            <input type="phone" name="contact" id="contact" placeholder="Contact No:" className="text-sm rounded-lg py-2 px-4 border border-blue-200 focus:border-blue-500" required onChange={(e) => setContact(e.target.value)} value={contact} />
            <input type="text" name="username" id="username" placeholder="Username" className="text-sm rounded-lg py-2 px-4 border border-blue-200 focus:border-blue-500" required onChange={(e) => setUsername(e.target.value)} value={username} />
            <input type="password" name="password" id="password" placeholder="Password" className="text-sm rounded-lg py-2 px-4 border border-blue-200 focus:border-blue-500" required onChange={(e) => setPassword(e.target.value)} value={password} />
            <button type="submit" disabled={isLoading} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl w-full cursor-pointer transition ease-in-out duration-300 mt-[10px]">
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
        </div>
        {/* logo side Div */}
        <div className="max-w-md min-w-sm w-full hidden lg:flex lg:flex-col bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 text-blue-900 justify-center items-center p-[50px] gap-[80px] rounded-tr-2xl rounded-br-2xl">
          <div className="flex flex-col gap-[10px] items-center">
            <img src={LogoWhite} className="" alt="Logo" />
            <div className="flex flex-col gap-[4px] items-center">
              <h2 className="text-4xl font-medium tracking-widest">BookWorm</h2>
              <span className="text-base tracking-wider font-light">LIBRARY</span>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] items-center">
            <p className="text-[12px] tracking-widest font-light">Already have an account? <Link to="/admin/login" className="font-medium hover:font-semibold cursor-pointer text-blue-700">Sign In now</Link></p>
            <Link to="/admin/login">
              <button className="w-full border border-blue-700 text-blue-700 font-medium py-2 px-4 rounded-xl cursor-pointer min-w-[200px] hover:bg-blue-50">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupAdmin;
