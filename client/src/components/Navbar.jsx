// import { Link } from "react-router-dom"
// const Navbar=()=> {
//   return (
//     <nav className="bg-darkBlue p-4 w-full">
//       <div className="container mx-auto flex justify-between items-center">
//       <img src="./src/assets/2.png" alt="logo" className="w-48 h-28"/>
//         {/* logo */}
        

//         {/* menubar */}
//         <div className="space-x-14 mx-40">
//           <Link to="/" className="text-orange-300 font-bold">Home</Link>
//           <Link to="/about-us" className="font-bold text-white">About US</Link>
//           <Link to="/courses" className="font-bold text-white">Courses</Link>
//           <Link to="/contact-us" className="font-bold text-white">Contact Us</Link>

//         </div>

//       </div>
//     </nav>
//   )
// }

// export default Navbar


import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-darkBlue  w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex mx-14">
          <img src="./src/assets/2.png" alt="logo" className="w-32 h-20 md:w-28 md:h-28" />
          {/* <h1 className="text-white">BEST COMPUTER EDUCATION</h1> */}
          
        </div>

        {/* Menubar */}
        <div className="hidden md:flex space-x-10 mx-auto">
          <Link to="/" className="text-orange-300 font-bold hover:text-orange-500">
            Home
          </Link>
          <Link to="/about-us" className="font-bold text-white hover:text-gray-300">
            About Us
          </Link>
          <Link to="/courses" className="font-bold text-white hover:text-gray-300">
            Courses
          </Link>
          <Link to="/contact-us" className="font-bold text-white hover:text-gray-300">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button id="menu-toggle" className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menubar */}
      <div id="mobile-menu" className="flex flex-col items-center md:hidden space-y-2 pt-4">
        <Link to="/" className="text-orange-300 font-bold hover:text-orange-500">
          Home
        </Link>
        <Link to="/about-us" className="font-bold text-white hover:text-gray-300">
          About Us
        </Link>
        <Link to="/courses" className="font-bold text-white hover:text-gray-300">
          Courses
        </Link>
        <Link to="/contact-us" className="font-bold text-white hover:text-gray-300">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
