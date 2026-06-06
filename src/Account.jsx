import profileImg from './assets/img.png'; // adjust path as needed
import camera from './assets/camera.png'; // adjust path as needed
function Account(){
    return(
        <div className=" h-screen w-screen md:max-w-96 bg-[#F7F8F9] relative">
            {/* info section */}
            <div className=" bg-[#FFFFFF] flex justify-start items-center py-10 shadow ">
                <h1 className=" text-black font-bold">Account Settings</h1>
            </div>
            {/* image and text */}
            <div className='flex'>
            <div className=' relative w-fit m-5'>
                <div id='image' className=" relative size-[76px] rounded-full overflow-hidden"><img className='object-cover w-full h-full' src={profileImg} alt="img" /></div>
                <label htmlFor="image" className=' absolute -right-1 -bottom-0 cursor-pointer  '><img className=' h-[23px] w-[21px]' src={camera} alt="img2"/></label>
            </div>
            {/* text part */}
            <div className='flex justify-center mb-10 items-start flex-col'>
                <h1 className=' text-black font-medium'>Marry Doe</h1>
                <h3 className=' text-black'>Marry@Gmail.Com</h3>
            </div>
            </div>
             {/* text-2 */}
            <div className='flex justify-center border-b-2 border-dotted border-[#CBCBCB] py-8 items-center'>
               <span className=' text-[#1D2226] font-medium '>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</span> 
            </div>
    
        </div>
    )
}
export default Account;