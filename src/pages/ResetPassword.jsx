import { Link } from "react-router-dom";
import LogoBlack from "/assets/images/LogoBlack.png"
import LogoWhite from "/assets/images/LogoWhite.png"
import { useState, useEffect } from "react";

function ResetPassword() {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleReset(event) {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = "/"
    }, 3000);
    
  }

  return (
    <section className="absolute inset-0 h-screen w-screen flex justify-center items-center bg-gray-100 overflow-auto">
      
      {/* Sign Up page */}
      <div className="lg:flex lg:flex-row-reverse bg-white">


        {/* credential Div */}
        <div className="max-w-md min-w-sm w-full bg-white p-[80px] flex flex-col gap-[20px] justify-center items-center relative">
            
            {/* Back Button at the right end */}
            {/* <Link to="/" className="absolute top-4  left-[15%] lg:left-[90%]">
              <button className="border border-black text-black">Back</button>
            </Link> */}

            <img src={LogoBlack} className="w-[60px] h-[60px]" alt="Logo" />
             
             <h2 className="text-2xl font-semibold tracking-wider">Reset Password</h2>

             <p className="text-sm text-gray-500">Enter your new password</p>

             <form action="" method="post" className="flex flex-col gap-[20px] w-full p-[30px] mt-[-10px]" onSubmit={handleReset}>

                {/* Password */}
                <input type="password" name="password" id="password" placeholder="New Password" className="text-sm rounded-lg py-2 px-4 border border-gray-600" required onChange={(e) => setPassword(e.target.value)} value={password} />

                {/* Confirm Password */}
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" className="text-sm rounded-lg py-2 px-4 border border-gray-600" required onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />

                {/* Forget Password */}
                {/* <Link to="/forget-password" className="underline font-medium hover:font-semibold mr-auto text-sm mt-[-5px]">Forget Password?</Link> */}

                {/* Sign In Button */}
                <button type="submit" disabled={isLoading} className="bg-black hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-xl w-full cursor-pointer transition ease-in-out duration-300">          
                  {isLoading? "Resetting..." : "Reset Password"}
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
            <div className="flex flex-col items-center">
              <p className="text-base text-center w-[270px]">"Your premier digital library for borrowing and reading books"</p>
            </div>

        </div>

      </div>

    </section>
  );
}

export default ResetPassword;
