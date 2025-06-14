import { Link } from "react-router-dom";
import LogoBlack from "/assets/images/LogoBlack.png"
import LogoWhite from "/assets/images/LogoWhite.png"
import { useState, useEffect } from "react";

function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSignin(event) {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Login successful!");
      window.location.href = "/dashboard"
    }, 3000);
    
  }

  return (
    <section className="absolute inset-0 h-screen w-screen flex justify-center items-center bg-gray-100 overflow-auto">
      
      {/* Sign Up page */}
      <div className="lg:flex lg:flex-row bg-white">


        {/* credential Div */}
        <div className="max-w-md min-w-sm w-full bg-white p-[30px] flex flex-col gap-[20px] justify-center items-center">
            <img src={LogoBlack} className="w-[60px] h-[60px]" alt="Logo" />
             
             <h2 className="text-2xl font-semibold tracking-wider">Welcome Back !!</h2>

             <p className="text-sm text-gray-500">Enter your credentials to login</p>

             <form action="" method="post" className="flex flex-col gap-[20px] w-full p-[30px] mt-[-10px]" onSubmit={handleSignin}>

                {/* Username */}
                <input type="text" name="username" id="username" placeholder="Username" className="text-sm rounded-lg py-2 px-4 border border-gray-600" required onChange={(e) => setUsername(e.target.value)} value={username} />

                {/* Password */}
                <input type="password" name="password" id="password" placeholder="Password" className="text-sm rounded-lg py-2 px-4 border border-gray-600" required onChange={(e) => setPassword(e.target.value)} value={password} />

                {/* Forget Password */}
                <Link to="/forget-password" className="underline font-medium hover:font-semibold mr-auto text-sm mt-[-5px]">Forget Password?</Link>

                {/* Sign In Button */}
                <button type="submit" disabled={isLoading} className="bg-black hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-xl w-full cursor-pointer transition ease-in-out duration-300 mt-[10px]">          
                  {isLoading? "Signing In..." : "Sign In"}
                </button>

             </form>
        </div>

        {/* logo side Div */}
        <div className="max-w-md min-w-sm w-full hidden lg:flex lg:flex-col bg-black text-white justify-center items-center p-[50px] gap-[80px] rounded-tr-4xl rounded-br-4xl">

            {/* Logo with name */}
            <div className="flex flex-col gap-[10px] items-center">
              <img src={LogoWhite} className="" alt="Logo" />
              <div className="flex flex-col gap-[4px] items-center">
                <h2 className="text-4xl font-medium tracking-widest">BookWorm</h2>
                <span className="text-base tracking-wider font-light">LIBRARY</span>
              </div>
            </div>

            {/* New to Platform */}
            <div className="flex flex-col gap-[20px] items-center">
              <p className="text-[12px] tracking-widest font-light">New to our Platform? <Link to="/signup" className="font-medium hover:font-semibold cursor-pointer">Sign Up now</Link></p>

              {/* Sign up Button */}
              <Link to="/signup">
                <button  className="w-full border border-white font-medium py-2 px-4 rounded-xl cursor-pointer min-w-[200px]">  
                  Sign Up
                </button>            
              </Link>
            </div>

        </div>

      </div>

    </section>
  );
}

export default App;
