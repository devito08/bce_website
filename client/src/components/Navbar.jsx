import { Link } from "react-router-dom"
const Navbar=()=> {
  return (
    <nav className="bg-purple-950 p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
      <img src="./src/assets/logo.png" alt="logo" className="w-48 h-28"/>
        {/* logo */}
        <div className="text-yellow-500 text-large">
    
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


