
// import Contact from "./Contact"
function AboutUs() {
  return (
    <div>
      <div className="flex my-20 w-full h-full justify-center ">

        {/* left-image */}
        <div className="">
          <img src="./src/assets/government.jpg" alt="certificate" className="mx-40"/>
        </div>

        {/* right-side */}
        <div className="mx-56">
          <h1 className="font-bold text-red-600 text-2xl">About Us</h1>
          <p className="mt-5 text-xl">Best Computer Education offers hands-on training in software, 
            hardware, networking, and multimedia. Our industry-relevant courses are designed to 
            keep up with future tech trends and help students prepare for global certifications. 
            Practical sessions are emphasized, ensuring real-world experience and skill development.
            Guest lectures from industry experts provide valuable exposure. As part of the Apollo 
            Colleges Group, we offer extensive training services to stay ahead in the tech world.</p>
            <div className="">
              <h1 className="font-bold mt-10 text-2xl">Features</h1>
              <div className="flex mx-14 justify-between text-xl">
                <p1 className="text-blue-900 mt-5 font-semibold">100% Practical Training</p1>
                <p className="text-blue-900 mt-5 font-semibold">Industry Trainers</p>
                <p className="text-blue-900 mt-5 font-semibold">100% Satisfaction</p>
              </div>

            </div>
        </div>
        
        
      </div>
      {/* <Contact/> */}
    </div>
  )
}

export default AboutUs