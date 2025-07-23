import Barchart from "@/components/landing/Barchart";
import CategorySelector from "@/components/portfolio/category-selector";
import Link from "next/link";

// const backgrounds = [
//   "bg-indigo-900",
//   // "bg-cyan-950",
//   // "bg-black",
//   // "bg-white",
//   "bg-gradient-to-tr from-blue-900 to-purple-900",
//   "bg-blue-950",
//   "bg-gradient-to-tr from-pink-700 to-fuchsia-900",
//   "bg-gray-900",
//   "bg-gradient-to-tr from-green-800 to-teal-900",
//   "bg-blue-800",
//   "bg-stone-900",
// ];

const companies = [
  {
    companyName: "Thytanium",
    role: "Founder & Lead Software Engineer",
    duration: "Jan 2020 - Present",
    image: "/images/org/thytanium-bn.png",
  },
  {
    companyName: "Company A",
    role: "Software Engineer",
    duration: "Jan 2020 - Present",
    image: "/images/org/lokavant-bn.png",
  },
  {
    companyName: "Company B",
    role: "Frontend Developer",
    duration: "Jan 2018 - Dec 2019",
    image: "/images/org/iqvia.png",
  },
  {
    companyName: "Company C",
    role: "Backend Developer",
    duration: "Jan 2016 - Dec 2017",
    image: "/images/org/materialize-labs-bn.png",
  },
];

export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-br from-[#011400] to-lime-900 py-4">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl text-center font-light my-4 text-lime-300">
            Experience in Years by Technology
          </h3>
          <div className="h-[480px] mb-8">
            <Barchart />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-bl to-[#011400] from-lime-900 py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl font-light my-4 text-lime-300 text-center">
              A collection of my best projects
            </h3>
            <p className="text-center leading-relaxed text-lime-50">
              With <strong>{new Date().getFullYear() - 2011} years</strong> in
              web development, I acquired extensive experience working on
              projects across multiple industries and technologies. Let me show
              you my best creations.
            </p>
          </div>
          <CategorySelector />
          <div className="grid grid-cols-2 gap-4">
            {companies.map((job, index) => (
              <div
                key={index}
                className="rounded bg-stone-950/30 overflow-hidden pb-2"
              >
                <div className="h-64 w-full bg-lime-900" />
                <h4 className="text-lg font-bold text-lime-100 px-4 pt-2">
                  {job.companyName}
                </h4>
                <div className="flex justify-between px-4 py-1">
                  <h5 className="text-lime-300">{job.role}</h5>
                  <h5 className="text-lime-100">{job.duration}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-stone-900 py-4">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-light my-4 text-lime-300">
            Experience by Company
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {companies.map((job, index) => (
              <div
                key={index}
                className="rounded bg-lime-900/50 overflow-hidden pb-2"
              >
                <div className="h-64 w-full bg-lime-700" />
                <h4 className="text-lg font-bold text-lime-100 px-4 pt-2">
                  {job.companyName}
                </h4>
                <div className="flex justify-between px-4 py-1">
                  <h5 className="text-lime-300">{job.role}</h5>
                  <h5 className="text-lime-100">{job.duration}</h5>
                </div>
              </div>
            ))}
          </div>
          <div className="py-8 flex justify-center">
            <Link
              className="rounded bg-lime-900 font-medium text-xl px-4 py-3 hover:bg-lime-700 hover:text-white transition-colors duration-300 text-lime-100"
              href="/companies"
            >
              View All Companies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
