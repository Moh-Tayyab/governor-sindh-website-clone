import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import Image  from "next/image";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { ImageSlides } from "@/components/ui/images-slider";
import CoreCoursesSequence from "./Core Courses Sequence/page";
import AdvancedCourses from "./Advanced Courses/page";


export default function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Main Content */}
      <main>
      {/* Hero Section */}
      <section className="bg-gray-100 py-10">
        <BackgroundGradient />
        <div className="container mx-auto grid md:grid-cols-2 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-7xl font-bold  text-sky-800">
              Governor Sindh </h1>
            <h2 className="fon-bold text-3xl text-sky-700"> Kamran Khan Tessori </h2>
            
            <p className=" text-wrap text-5xl font-semibold text-sky-400 p-3">
              Certified Cloud Applied Generative AI Engineer (GenEng)
            </p>
            <p className="text-blue-900 font-semibold text-3xl mt-4">Earn up to €4632.99 / month</p>
            <p className="text-blue-900 font-serif text-3xl mt-4">Now admissions are open in Hyderabad</p>
            <div className="mt-8">
              <Link href="#" className="bg-sky-900 text-white py-4 px-11 rounded hover:bg-sky-700">
                Apply Now
              </Link>
            </div>
            <p className=" text-center text-sky-700 font-bold text-3xl -mt-9">562,143</p>
            <p className="text-sky-500 text-center font-bold">Accepted Applications</p>
          </div>
          <div className="relative">
            <Image
              src="/governor-image.png" // Replace with your actual image path
              alt="Governor Sindh"
              width={1000}
              height={900}
              className="mx-auto zoom-image"
            />
            <BackgroundGradient />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-sky-700 mb-6">
            Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur 
            Developing Billion-Dollar Valued Developers and Solopreneurs
          </h2>
          <p className="text-gray-600 mb-6 px-4 md:px-20 font-serif text-2xl">
          The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning 
          by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution 
          networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, 
          by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, 
          thus paving the way for the first billion-dollar valued solopreneur businesses. 
          This program has the objective to train this new breed of billion-dollar solopreneurs. 
          These solopreneurs will adopt the ultra-lean business model and work independently and will not 
          need to hire employees or other team members.
          </p>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-10 px-2 md:px-20">
            <Image src="/image1.png" alt="Tech event" width={330} height={200} />
            <Image src="/image2.png" alt="Solopreneur's Mind" width={360} height={220} />
            <Image src="/image3.png" alt="Students attending event" width={330} height={200} />
          </div>

          {/* Governor’s Work */}
          <div>
            <ImageSlides images={["/slideShow1.png", "/slide1.png", "/slideShow2.png", "/slide2.png",
               "/slideShow3.png", "/slideShow3.0.png", "/slideShow4.png", "slide4.png"]}/>
          </div>
          <div>
            <CoreCoursesSequence />
          </div>
          <div>
            <AdvancedCourses />
          </div>
        </div>
      </section>
    </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
