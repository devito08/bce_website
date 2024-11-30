
import Contact from "./Contact";
function Courses() {
  return (
    <div className="bg-white">
      <div className="bg-white">
        <div className="justify-between text-center mt-10">
          <h1 className="text-3xl font-semibold text-blue-700">COURSES</h1>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
          {/* Circle 1 */}
          <div className="bg-[#FF5733] flex flex-col items-center justify-center rounded-full h-48 w-48">
            <img src="/assets/tally.png" alt="lab_image" className="w-16 h-10" />
            <h1 className="mt-4 text-white font-bold">TALLY-9, GST</h1>
          </div>

          {/* Circle 2 */}
          <div className="bg-[#FF8D1A] flex flex-col items-center justify-center rounded-full h-48 w-48">
            <img src="/assets/microsoft.png" alt="lab_image" className="w-16 h-10" />
            <h1 className="mt-4 text-white font-bold">MS-OFFICE</h1>
          </div>

          {/* Circle 3 */}
          <div className="bg-[#28B463] flex flex-col items-center justify-center rounded-full h-48 w-48">
            <img src="/assets/python.png" alt="lab_image" className="w-16 h-10" />
            <h1 className="mt-4 text-white font-bold">PYTHON</h1>
          </div>

          {/* Circle 4 */}
          <div className="bg-[#2980B9] flex flex-col items-center justify-center rounded-full h-48 w-48">
            <img src="/assets/data_entry.png" alt="lab_image" className="w-16 h-10" />
            <h1 className="mt-4 text-white font-bold">DATA ENTRY</h1>
          </div>
        </div>
      </div>

      {/* Additional Circles with Unique Colors */}
      <div className="bg-white">
        <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
          <div className="bg-[#8E44AD] flex flex-col items-center justify-center rounded-full h-48 w-48">
            <img src="/assets/diploma.png" alt="lab_image" className="w-16 h-10" />
            <h1 className="mt-4 text-white font-bold">COA/DMO</h1>
          </div>

          <div className="bg-[#FFC300] flex flex-col items-center justify-center rounded-full h-48 w-48">
            <img src="/assets/programming.png" alt="lab_image" className="w-20 h-10" />
            <h1 className="mt-4 text-white font-bold">Full Stack Development</h1>
          </div>

          <div className="bg-[#C70039] flex flex-col items-center justify-center rounded-full h-48 w-48">
            <img src="/assets/web_design.png" alt="lab_image" className="w-16 h-10" />
            <h1 className="mt-4 text-white font-bold">WEB DESIGN</h1>
          </div>

          <div className="bg-[#1ABC9C] flex flex-col items-center justify-center rounded-full h-48 w-48">
            <img src="/assets/corel.png" alt="lab_image" className="w-16 h-10" />
            <h1 className="mt-4 text-white font-bold">CORELDRAW</h1>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
          <div className="bg-[#E74C3C] flex flex-col items-center justify-center rounded-full h-48 w-48">
            <img src="/assets/xml.png" alt="lab_image" className="w-16 h-10" />
            <h1 className="mt-4 text-white font-bold">HTML-5/XML</h1>
          </div>

          <div className="bg-[#5DADE2] flex flex-col items-center justify-center rounded-full h-48 w-48">
            <img src="/assets/2d.png" alt="lab_image" className="w-16 h-10" />
            <h1 className="mt-4 text-white font-bold">2D,3D ANIMATION</h1>
          </div>

          <div className="bg-[#F1C40F] flex flex-col items-center justify-center rounded-full h-48 w-48">
            <img src="/assets/photoshop.png" alt="lab_image" className="w-16 h-10" />
            <h1 className="mt-4 text-white font-bold">PHOTOSHOP/CSS</h1>
          </div>

          <div className="bg-[#7D3C98] flex flex-col items-center justify-center rounded-full h-48 w-48">
            <img src="/assets/ux.png" alt="lab_image" className="w-16 h-10" />
            <h1 className="mt-4 text-white font-bold">C,C++/C#</h1>
          </div>
        </div>
      </div>
      <Contact/>
    </div>
  );
}

export default Courses;
