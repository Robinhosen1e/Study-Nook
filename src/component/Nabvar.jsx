

'use client';
import Image from "next/image";
import Link from "next/link";
import HeroImage from '@/image/Hero.jpg';
import { MoveRight } from "lucide-react";
// import { FiUser } from "react-icons/fi";
// import { authClient } from "@/lib/auth-client";



const Navbar = () => {

  //  const { data: session, isPending } = authClient.useSession();
  //     const user = session?.user;

    const link = <>
     <li className=" text-white hover:text-[#65A662] mr-6 transition duration-500 "><Link href="/">Home</Link></li>
     <li className=" text-white  hover:text-[#65A662]  mr-6 transition duration-500"><Link href="/products">Rooms</Link></li>
     {/* {user?( */}
      <li className=" text-white  hover:text-[#65A662] mr-6 transition duration-500"><Link href="/profile">Add Rooms</Link></li>
      {/* ) : ("")} */}
     <li className=" text-white hover:text-[#65A662] mr-6 transition duration-500"><Link href="/about">My Listings</Link></li>

     <li className=" text-white hover:text-[#65A662] transition duration-500"><Link href="/about">My Bookings</Link></li>
    </>

    return (
        <section className="min-h-[100vh] relative">

          <Image
           fill
           priority
            alt="Tailwind CSS Navbar component"
            src={HeroImage} 
            className="object-cover" />


         <div className="absolute inset-0 bg-black/60">

            <div className="relative z-10">



                 {/* navbar */}
          <div className="">
            <div className="w-11/12 mx-auto navbar">
  <div className="navbar-start">
    <div className="dropdown relative">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="absolute dropdown-content bg-base-100 rounded-box z-[999] mt-3 w-[600px] p-2 shadow">
        {link}
      </ul>
    </div>
    <Link href="/" >
      {/* <Image src={Img} alt="logo" width={50} height={50} className="" /> */}
      <h1 className="text-white font-bold text-2xl">My App</h1>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" menu-horizontal px-1">
        {link}
    </ul>
  </div>
    {/* {user ? ( */}
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
             <Image
              height={40}
              width={40}
              alt="Tailwind CSS Navbar component"
              src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q" />
         </div>
       </div>
         <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
      </div>
    {/* ):
    (<div className="navbar-end">

       <div className="justify-items-center cursor-pointer hover:text-[#f3790d] transition duration-300">
        
        <FiUser size={20} />

    <Link href="/login" >
      SignIn
    </Link>

       </div>
  </div>)} */}
</div>
        </div>



               <div>
                    <label className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" value="dark" />

  {/* sun icon */}
  <svg
    className="swap-off h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
                    </label>
               </div>

        {/* hero content */}
        
        <div className="w-full md:w-1/2 mx-auto px-4">
  <div className="pt-32 text-white">
    <h1 className="text-4xl lg:text-6xl font-bold">
      Find Your Perfect Study <br />
      <span className="text-[#65A662] text-2xl lg:text-6xl font-bold text-center">
        Room With StudyNook
      </span>
    </h1>

    <p className="mt-6 max-w-xl text-[14px] text-gray-300">
      Reserve quiet study rooms, manage bookings, and enjoy a seamless
      learning experience with StudyNook.
    </p>

    <div className="w-[250px] lg:w-[500px] mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      <button className="flex rounded-lg bg-[#65A662] hover:bg-[#3b7e37] cursor-pointer px-6 py-3 font-medium mr-5">
        Explore Rooms
        <MoveRight className="ml-2" />
      </button>

      <button className="rounded-lg border-[#65A662] border px-6 py-3 font-medium cursor-pointer text-[#65A662] hover:bg-[#65A662] hover:text-white transition duration-500">
        Get Started
      </button>
    </div>
  </div>
</div>
            </div>
         </div>
        </section>
    );
};

export default Navbar;