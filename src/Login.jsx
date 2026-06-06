import { Link } from "react-router-dom";
import Input from "./component/Input";
function Login() {
    return (
        <div className=" h-screen w-screen md:max-w-96 bg-[#F7F8F9] relative">
            {/* text part 1 */}
            <div className="  w-60 m-5">
                <h1 className=" text-3xl text-[#1D2226] font-medium">Signin to your PopX account</h1>
            </div>
            {/* text part 2 */}
            <div className=" w-72 m-5">
                <h2 className=" opacity-60 font-medium text-[#1D2226]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            </div>

            {/*The Input Contents*/}
            <div className=" flex flex-col gap-y-2">
    
               <Input type={"Email Address"} content={"Enter email address"}/>
               <Input type={"Password"} content={"Enter password"}/>
            </div>
             {/*Login Button*/}
             <div className=" mx-auto relative w-[90%]">
                <Link to="/account">
                <button className=" bg-[#CBCBCB] w-[100%] h-10 mt-5 "><h1 className=" text-[#FFFFFF] font-medium">Login</h1></button>
                </Link>
             </div>
        </div>
    );
}
export default Login;
