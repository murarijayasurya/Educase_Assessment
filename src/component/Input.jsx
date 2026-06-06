// The Most Used Input Field Component
function Input({type,content}) {
    const isRequired = type?.endsWith('*');
     const text = isRequired?type.slice(0, -1):type;
     const  isEmail = type?.toLowerCase().includes('email');
     const ispass=type?.toLowerCase().includes('password');
    return (
        <>
            <div className="relative w-[90%] mx-auto mt-3">
                <label className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-sm text-[#6C25FF] font-medium z-10">
                    {text}{isRequired&&<span className=" text-red-600">*</span>}
                </label>
                <input
                     type={isEmail ?'email':ispass?'password': 'text'}
                    placeholder={`${content}`}
                    required
                    className="w-full h-12 px-3 pt-2 pb-1 border border-[#CBCBCB] rounded-md outline-none text-gray-600 placeholder:text-gray-400"
                />
            </div></>
    )
}
export default Input;