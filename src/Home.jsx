import { Link } from "react-router-dom";
function Home() {
    return (
        <div className=" h-screen md:max-w-96 w-screen bg-[#F7F8F9] relative">

            <div className=" absolute bottom-40 left-0">
                {/* Texts */}
                <div className=" m-5 w-64 flex flex-wrap justify-center items-center gap-2">
                    <h1 className=" text-black font-bold text-3xl">Welcome to PopX</h1>
                    <h2 className=" text-[#1D2226] opacity-60 font-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
                </div>
            </div>

            {/* Link Buttons */}
            <div className=" absolute bottom-10 w-full items-center flex justify-center flex-col gap-y-3.5">
                <Link to="/signup" className=" h-10 rounded-[6px] w-[90%] bg-[#6C25FF] flex justify-center items-center">
                <h1 className=" text-white font-medium">Create Account</h1>
                </Link>
                <Link to="/login" className=" h-10 rounded-[6px] w-[90%] bg-[#6C25FF4B] flex justify-center items-center">
                <h1 className=" text-black font-medium">Already Registered? Login</h1>
                </Link>
            </div>

        </div>
    )
}
export default Home;