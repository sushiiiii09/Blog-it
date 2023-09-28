import { getProjects } from '@/sanity/utils/fetchData'
import Image from 'next/image'
import Link  from 'next/link';
export default async function Home() {

  const projects=await getProjects();
  return (
    <div className="p-8 m-2">
    <h1 className="lg:text-7xl font-extrabold md:text-6xl text-4xl">
      Hi I&apos;m
      <span 
      className="mx-2 bg-gradient-to-r from-orange-400 via-red-400 to-purple-700 bg-clip-text text-transparent"
      >
        Subhashree
      </span>
      !
    </h1>
    <p className="mt-6 text-2xl text-gray-500">
    Check out my projects!
    </p>
    <h2 className="mt-12 font-bold text-gray-500 text-3xl">My Projects</h2>
    <div className=" mt-5 grid md:grid-cols-2 lg:grid-col-3 gap-8">
      {projects.map((project) => (
        <Link
          href={`/projects/${project.slug}`}
          key={project._id}
          className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition duration-300 ease-in-out"
        >
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              width={750}
              height={300}
              className="object-cover rounded-lg border border-gray-500"
            />
          )}
          <div className="mt-4 font-extrabold  ">
            {project.title}
          </div>
        </Link>
      ))}
    </div>
  </div>

  // <div>
  //   {projects.map((project)=>(
  //     <div key={project._id}>{project.title}</div>
  //   ))}
  // </div>
  )
}
