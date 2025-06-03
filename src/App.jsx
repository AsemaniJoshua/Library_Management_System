import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRightToBracket } from "react-icons/fa6";
import {  FaGoogle, FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSignup() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    alert("Sign up successful!");
    window.location.href("/login")
  }

  return (
    <section className="absolute inset-0 h-screen w-screen flex justify-center items-center bg-gray-100 overflow-auto">
      {/* Sign up form with Google, Github, and Normal Procedures */}

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 20, 0] }} // Moves up by 30px and back to 0
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="p-[30px] max-w-sm w-full mx-auto bg-white rounded-xl  shadow-md flex flex-col gap-[20px] border border-gray-300 relative top-[15%] mb-[25px]"
      >

        <h1 className="text-xl md:text-2xl font-bold text-center pt-[20px]">Welcome to BookWorm</h1>

        <p className="text-center text-sm">Sign up to get started and access all the features and exclusive books.</p>

        <form method="post" onSubmit={() => {
          handleSignup
        }} className="flex flex-col gap-[10px]">
        {/* First and Last Name */}
        <div className="flex gap-[10px] justify-between max-w-full">

          {/* First Name */}
          <div className="flex flex-col gap-[4px] w-1/2 text-sm">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" value={firstName}
            onChange={(e) => setFirstName(e.target.value)} name="firstName" required placeholder="Enter first name" className="py-[5px] px-[10px] border-1 border-gray-400 rounded-lg" />
          </div>

          {/* Last Name */}
          <div className="flex flex-col gap-[4px] w-1/2 text-sm">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" value={lastName}
            onChange={(e) => setLastName(e.target.value)} name="lastName" required placeholder="Enter last name" className="py-[5px] px-[10px] border-1 border-gray-400 rounded-lg" />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-[4px] w-full text-sm">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email}
            onChange={(e) => setEmail(e.target.value)} name="email" required placeholder="pentestsec@gmail.com" className="py-[5px] px-[10px] border-1 border-gray-400 rounded-lg" />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-[4px] w-full text-sm">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password}
            onChange={(e) => setPassword(e.target.value)} name="password" required placeholder="••••••••" className="py-[5px] px-[10px] border-1 border-gray-400 rounded-lg" />
        </div>
        

        {/* Forget Password */}
        <Link to="/" className="underline font-medium hover:font-semibold ml-auto text-sm  my-[10px]">Forget Password?</Link>

        {/* Terms and Conditions */}
        <p className="text-center text-sm my-[10px]">
          <input type="checkbox" name="terms" required className="mr-[5px] text-black accent-[#2c2c2c]" id="terms" />
          By signing up, you agree to our <span className="underline font-medium hover:font-semibold cursor-pointer">Terms and Conditions</span>
        </p>

        {/* Sign up Button */}
        <button type="submit" className="bg-[#2c2c2c] hover:bg-[#3f3f3f] text-white font-semibold py-2 px-4 rounded w-full cursor-pointer flex items-center justify-center">          
          {isLoading? "Signing Up..." : "Sign Up"}
          <FaArrowRightToBracket className="ml-2 mt-1" />
        </button>
        
        </form>

        {/* Already have an account */}
        <p className="text-center text-sm my-[10px]">Already have an account? <Link to="/login" className="underline font-medium hover:font-semibold cursor-pointer">Sign in</Link></p>

        {/* Continue with */}
        <div className="flex gap-[30px] items-center justify-center">
          <hr className="bg-gray-300 text-gray-300 h-[1px] w-[60px] mt-[4px]" />
          <span className="text-xs md:text-sm text-gray-700 tracking-wider md:tracking-widest">Continue with</span>
          <hr className="bg-gray-300 text-gray-300 h-[1px] w-[60px] mt-[4px]" />
        </div>

        {/* Google and Github */}
        <div className="flex flex-col gap-[10px] w-full">
          
          {/* Google */}
          <button className="flex items-center justify-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full cursor-pointer">
            <FaGoogle className="mr-2" />
            Google
          </button>

          {/* Github */}
          <button className="flex items-center justify-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full cursor-pointer">
            <FaGithub className="mr-2" />
            Github
          </button>
        
        </div> 
      </motion.div>
    </section>
  );
}

export default App;
