import RisscodingLandingpage from "@/assets/images/risscodingcode.vercel.app_.png";
import SALandingPage from "@/assets/images/SmartAttendance.png";
import eLibraryLandingPage from "@/assets/images/Elibrary.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";
import moviesWeb from "@/assets/images/moviesWeb.png";
import LoginWeb from "@/assets/images/LoginWeb.png";
import grainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
  {
    company: "School Mini-project",
    year: "2022",
    title: "Login Pages",
    results: [
      { title: "Frontend Engineer" },
      { title: "Using HTML5 and CSS for development" },
    ],
    image: LoginWeb,
  },
  {
    company: "School Mini-project",
    year: "2022",
    title: "My Movies",
    results: [
      { title: "Fullstack Engineer" },
      { title: "Using Javascript for development" },
      { title: "Improve site frontend by using Bootstrap" },
    ],
    image: moviesWeb,
  },
  {
    company: "School Mini-project",
    year: "2023",
    title: "E-Library",
    results: [
      { title: "Fullstack Engineer" },
      { title: "Using laravel for development" },
      { title: "Create a realtime tracking for library visitor" },
    ],
    image: eLibraryLandingPage,
  },
  {
    company: "Personal Project",
    year: "2023",
    title: "RissCoding Porto V1",
    results: [
      { title: "Fullstack Engineer" },
      { title: "Using Next.JS for development efficiency" },
      { title: "Improved site frontend by using Tailwind CSS" },
    ],
    link: "https://risscodingcode.vercel.app/",
    image: RisscodingLandingpage,
  },
  {
    company: "PT curaweda palagan innotech",
    year: "2024",
    title: "Smart Attendance",
    results: [
      { title: "Backend Engineer" },
      { title: "Using Prisma ORM for backend development" },
      { title: "Creating an effective server side" },
    ],
    link: "https://github.com/RISSCoding/Backend-SA",
    image: SALandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
    <div>
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            Apa yang saya kerjakan?
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">Featured Projects</h2>
        <p className="text-center md:text-lg text-white/60 mt-4 max-w-md mx-auto lg:text-xl">
          Lihat bagaimana saya menerapkan konsep saya ke dalam websites.
        </p>
        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 after:pointer-events-none lg:pt16 lg:px-20"
            >
              <div className="absolute inset-0 -z-10 opacity-5" style={{
                backgroundImage: `url(${grainImage.src})`
              }}></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
              <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                {project.results.map((result) => (
                  <li key={result.title} className="flex gap-2 text-sm text-white/50 md:text-base">
                    <CheckCircleIcon className="size-5 md:size-6" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              {project.link && (
                <a href={project.link}>
                  <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                    <span>View Result</span>
                    <ArrowUpIcon className="size-4" />
                  </button>
                </a>
              )}
              </div>
              <div className="relative">
              <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
            </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};
