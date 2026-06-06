import Input from "./component/Input";
import { Link } from "react-router-dom";
function CreateAccount() {
    return (
        <div className=" h-screen md:max-w-96 w-screen bg-[#F7F8F9] relative">
            {/* text-1 */}
            <div className=" m-5 w-56">
                <h1 className=" font-bold text-[#1D2226] text-[28px]">Create your PopX account</h1>
            </div>
             
             <form action="/account">
            {/* Input Fields */}
            <div className=" flex flex-col gap-3">
                <Input type={"Full Name*"} content={"Marry Doe"}/>
                <Input type={"Phone number*"} content={"Marry Doe"}/>
                <Input type={"Email address*"} content={"Marry Doe"}/>
                <Input type={"Password*"} content={"Marry Doe"}/>
                <Input type={"Company name"} content={"Marry Doe"}/>
            </div>
            {/* text-2 */}
            <div className=" m-5 flex flex-col gap-1 w-40">
                <h3 id="ask" className=" text-black">Are you an Agency<span className=" text-red-700">*</span></h3>
                <div className=" mr-6 flex justify-center items-center gap-x-5">
                <input type="radio" defaultChecked required className=" accent-[#6C25FF] size-4" name="agency" id="yes" />
                <label htmlFor="yes" className="text-[#1D2226] text-[14px]">Yes</label>

                 <input type="radio" required className=" accent-[#6C25FF] border border-[#919191] size-4" name="agency" id="yes" />
                <label htmlFor="yes" className=" text-[#1D2226] text-[14px]">No</label>
                </div>
            </div>
            {/* Button */}
            <div className=" flex justify-center items-center h-10 w-[90%] mx-auto mt-20">
                {/* <Link to="/account" className=" block w-full"> */}
                <button type="submit" className=" h-10 w-full rounded-[6px] bg-[#6C25FF]"><h1 className=" text-white font-medium">Create Account</h1></button>
                {/* </Link> */}
            </div>
</form>


        </div>
    );
}
export default CreateAccount;
