import { Link } from "react-router-dom"
const Navbar=()=> {
  return (
    <nav className="bg-blue-600 p-8 w-full">
      <div className="container mx-auto flex justify-between items-center">

        {/* logo */}
        <div className="text-white text-large font-black mx-14">
          BEST COMPUTER EDUCATION
        </div>

        {/* menubar */}
        <div className="space-x-14 mx-40">
          <Link to="/" className="text-orange-300 font-bold">Home</Link>
          <Link to="/about-us" className="font-bold text-white">About US</Link>
          <Link to="/courses" className="font-bold text-white">Courses</Link>
          <Link to="/contact-us" className="font-bold text-white">Contact Us</Link>

        </div>

      </div>
    </nav>
  )
}

export default Navbar


