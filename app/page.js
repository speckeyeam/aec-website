import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8ede2]">
      {/* Navbar */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="rounded-lg px-6 py-3 flex items-center justify-between">
          {/* <div className="cursor-pointer flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="AeroEdu Logo"
              width={65}
              height={65}
              className="object-contain"
            />
          </div> */}
          {/* <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Competition</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Resources</a>
          </div> */}
          {/* <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Join Waitlist
          </button> */}
          <button className="md:hidden text-gray-600">
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
      <div className="cursor-pointer w-screen flex items-center justify-center"> {/* Centering the content */}
  <Image
    src="/logo.png"
    alt="AeroEdu Logo"
    width={65}
    height={65}
    className="object-contain"
  />
</div>


      {/* Main Content */}
      <main className="mx-auto pb-32 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mt-32 mb-[10rem]" data-aos="fade-up">
          <div className="inline-block border-2 border-gray-300 bg-gray-200 rounded-full px-4 py-1 mb-8">
            <span className="text-sm text-gray-500 opacity-75">NPO in progress</span>
          </div>
          <div className="mb-10 relative">
            <h1 className="text-4xl font-grosque lh-2 sm:text-7xl font-bold text-gray-900 mb-4">
              Aircraft Engineering
            </h1>
            <h1 className="text-4xl font-grosque lh-2 sm:text-7xl font-bold text-gray-900 mb-4">
              Competition
            </h1>
          </div>
          <p className="max-w-xl mt-2 mx-auto text-lg sm:text-xl font-bodytext text-gray-600 leading-relaxed mb-12">
            Transforming traditional science education through project-based, hands-on experiences led by:
            <p className="text-gray-900 mt-4 font-medium">Drafting, Manufacturing, and Flying.</p>
          </p>
          <div className="mt-8 flex justify-center items-center gap-3">
            <button className="bg-gradient-to-r bg-opacity-0 from-MID_BLUE to-DARK_BLUE px-8 py-4 rounded-xl font-medium hover:opacity-90 text-lg transition-all">
              Join Waitlist
            </button>
          </div>
          <div className="flex justify-center mt-28">
            <svg
              className="animate-bounce mt-16 w-8 h-8 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* About Organization Section */}
        <section className="mt-20 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About AEC</h2>
          <p className="max-w-3xl mx-auto text-bodytext text-lg text-gray-600 leading-relaxed mb-8">
            AEC focuses on adhering to students’ education by providing an opportunity for them to learn, grow, and expand in suitable career choices. Students will construct a team at their institution. Similar to current engineering workforces, teams arrange subteams (business, engineering, etc) and execute a project that efficiently solves our program’s annual challenges. Our organization will develop a concise curriculum for students to correlate necessary information needed for them to be successful. Our team will also provide mentorship through our voluntary programs that help these students meet their needs. Our organization’s season will kick start Fall 2025.
          </p>
        </section>

        {/* Design, Engineer, Fly Section */}
        <section className="mt-20 text-center" data-aos="fade-up">
          <div className="flex justify-center space-x-16">
            {/* Design Box */}
            <div className="w-60 h-60 flex-col gap-6 bg-[#fdfaf7] text-black rounded-2xl drop-shadow-2xl flex items-center justify-center">
            <Image
              src="/penicon.svg"
              alt="AeroEdu Logo"
              width={50}
              height={50}
              className="object-contain fw-bold"
            />
              <p className="text-lg font-bold">Design</p>
            </div>

            {/* Engineer Box */}
            <div className="w-60 h-60 flex-col gap-6 bg-[#fdfaf7] text-black rounded-2xl drop-shadow-2xl flex items-center justify-center">
            <Image
              src="/wrenchicon.svg"
              alt="AeroEdu Logo"
              width={50}
              height={50}
              className="object-contain"
            />
              <p className="text-lg font-bold">Engineer</p>
            </div>

            {/* Fly Box */}
            <div className="w-60 h-60 flex-col gap-6 bg-[#fdfaf7] text-black rounded-2xl drop-shadow-2xl flex items-center justify-center">
            <Image
              src="/planeicon.svg"
              alt="AeroEdu Logo"
              width={50}
              height={50}
              className="object-contain"
            />
              <p className="text-lg font-bold">Fly</p>
            </div>
          </div>
        </section>


        

        {/* Divider */}
        <div className="my-32 w-full border-b-2 border-gray-300" data-aos="fade-up"></div>

        
        {/* Competition Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-12">
            <div className="lg:w-1/2 text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Competition</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Teams will arrange subteams (business, engineering, etc.) and execute a project that efficiently solves challenges via autonomous and semi-autonomous rounds. During the 2024-2025 season, teams will raise funds ($1-10k) to engineer an aircraft to compete in our competition’s challenges. AEC will release rulebooks at the start of each season annually. Information will be released in 2025, and competitions will start in 2026.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/planebackground.jpg"
                width={800}
                height={800}
                className="w-full rounded-xl object-cover"
                alt="Aircraft competition"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
