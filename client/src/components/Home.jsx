// import AboutUs from "./AboutUs";
// import Courses from "./Courses";

// const Home = () => {
    

//     return (
//         <div className="overflow-x-hidden bg-gray-50">
           
//             {/* Hero Section */}
//             <section className="pt-12 bg-gray-50 sm:pt-16">
//                 <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-10 mb-20">
//                     <div className="max-w-2xl mx-auto text-center">
//                         <h1 className="px-6 text-lg text-gray-600">Spend time and upskill yourself!</h1>
//                         <p className="mt-5 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
//                         Turn your tech skills into a{' '}
//                             <span className="relative inline-flex">
//                                 <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
//                                 <span className="relative">profitable career.</span>
//                             </span>
//                         </p>

//                         <div className="mt-9 sm:flex sm:justify-center">
//                             <a
//                                 href="#"
//                                 className="inline-flex items-center px-8 py-3 text-lg font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-600"
//                             >
//                                 Get more customers
//                             </a>
//                             <a
//                                 href="#"
//                                 className="inline-flex items-center px-6 py-3 mt-4 text-lg font-bold text-gray-900 border-2 border-gray-400 rounded-xl sm:ml-4 sm:mt-0 hover:bg-gray-900 hover:text-white"
//                             >
//                                 <svg className="w-5 h-5 mr-2" viewBox="0 0 18 18" fill="none" stroke="currentColor">
//                                     <path
//                                         d="M8.18 13.4261C6.86 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.86 2.85821 8.18 3.82387L12.54 7.01022C13.63 7.80916 13.63 9.44084 12.54 10.2398L8.18 13.4261Z"
//                                         strokeWidth="2"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                     />
//                                 </svg>
//                                 Watch free demo
//                             </a>
//                         </div>

//                         <p className="mt-8 text-base text-gray-500">60 Days free trial · No credit card required</p>
//                     </div>
//                 </div>
               
// {/* hi */}
// <div className="bg-white mt-20">
//   <div className="flex flex-wrap items-center justify-center gap-10 mt-48">
//     {/* Circle 1 */}
//     <div className="bg-red-700 flex flex-col items-center justify-center rounded-full h-48 w-48  animate-slideInLeft">
//       <img src="./src/assets/practical.jpg" alt="lab_image" className="w-20 h-10" />
//       <h1 className="mt-4 text-white font-bold">Programming</h1>
//     </div>
    
//     {/* Circle 2 */}
//     <div className="bg-blue-950 flex flex-col items-center justify-center rounded-full h-48 w-48">
//       <img src="./src/assets/practical.jpg" alt="lab_image" className="w-20 h-10" />
//       <h1 className="mt-4 text-white font-bold">Full Stack Development</h1>
//     </div>

//     {/* Circle 3 */}
//     <div className="bg-green-700 flex flex-col items-center justify-center rounded-full h-48 w-48  animate-slideInLeft">
//       <img src="./src/assets/practical.jpg" alt="lab_image" className="w-20 h-10" />
//       <h1 className="mt-4 text-white font-bold">Accounting Courses</h1>
//     </div>

//     {/* Circle 4 */}
//     <div className="bg-blue-600 flex flex-col items-center justify-center rounded-full h-48 w-48">
//       <img src="./src/assets/practical.jpg" alt="lab_image" className="w-20 h-10" />
//       <h1 className="mt-4 text-white font-bold">MS-OFFICE</h1>
//     </div>

//     {/* Circle 5 */}
//     <div className="bg-yellow-500 flex flex-col items-center justify-center rounded-full h-48 w-48  animate-slideInLeft">
//       <img src="./src/assets/practical.jpg" alt="lab_image" className="w-20 h-10" />
//       <h1 className="mt-4 text-white font-bold">Software Courses</h1>
//     </div>
//   </div>
// </div>

                
//             </section>
            
//             <AboutUs/>
//             <Courses/>
//         </div>
//     );
// };

// export default Home;


import AboutUs from "./AboutUs";
import Courses from "./Courses";

const Home = () => {
  return (
    <div className="overflow-x-hidden bg-gray-50">
      {/* Hero Section */}
      <section className="pt-12 bg-gray-50 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-10 mb-20">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="px-6 text-lg text-gray-600">Spend time and upskill yourself!</h1>
            <p className="mt-5 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              Turn your tech skills into a{' '}
              <span className="relative inline-flex">
                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                <span className="relative">profitable career.</span>
              </span>
            </p>

            <div className="mt-9 sm:flex sm:justify-center">
              <a
                href="#"
                className="inline-flex items-center px-8 py-3 text-lg font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-600"
              >
                Get more customers
              </a>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 mt-4 text-lg font-bold text-gray-900 border-2 border-gray-400 rounded-xl sm:ml-4 sm:mt-0 hover:bg-gray-900 hover:text-white"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 18 18" fill="none" stroke="currentColor">
                  <path
                    d="M8.18 13.4261C6.86 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.86 2.85821 8.18 3.82387L12.54 7.01022C13.63 7.80916 13.63 9.44084 12.54 10.2398L8.18 13.4261Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Watch free demo
              </a>
            </div>

            <p className="mt-8 text-base text-gray-500">
              60 Days free trial · No credit card required
            </p>
          </div>
        </div>

        {/* Courses Section */}
        <div className="bg-white mt-20">
          <div className="flex flex-wrap items-center justify-center gap-10 mt-48">
            {/* Circle 1 */}
            <div className="bg-red-700 flex flex-col items-center justify-center rounded-full h-48 w-48 animate-bounce">
          <img src="./src/assets/ux.png" alt="lab_image" className="w-20 h-10" />
            <h1 className="mt-4 text-white font-bold">Programming</h1>
            </div>

            {/* Circle 2 */}
            <div className="bg-blue-950 flex flex-col items-center justify-center rounded-full h-48 w-48 animate-bounce">
            <img src="./src/assets/programming.png" alt="lab_image" className="w-20 h-10" />
            <h1 className="mt-4  text-white font-bold text-xl justify-center items-center">FSD</h1>
            </div>

            {/* Circle 3 */}
            <div className="bg-green-700 flex flex-col items-center justify-center rounded-full h-48 w-48 animate-bounce">
            <img src="./src/assets/accounting.png" alt="lab_image" className="w-20 h-10" />
            <h1 className="mt-4 text-white font-bold">Accounting Courses</h1>
            </div>

            {/* Circle 4 */}
            <div className="bg-blue-600 flex flex-col items-center justify-center rounded-full h-48 w-48 animate-bounce">
            <img src="./src/assets/microsoft.png" alt="lab_image" className="w-20 h-10" />
            <h1 className="mt-4 text-white font-bold">MS-OFFICE</h1>
            </div>

            {/* Circle 5 */}
            <div className="bg-yellow-500 flex flex-col items-center justify-center rounded-full h-48 w-48 animate-bounce overflow-hidden">
            <img src="./src/assets/online-course.png" alt="lab_image" className="w-20 h-10" />
            <h1 className="mt-4 text-white font-bold text-xs">Software Courses</h1>
            </div>
          </div>
        </div>
      </section>

      <AboutUs />
      <Courses />
    </div>
  );
};

export default Home;
