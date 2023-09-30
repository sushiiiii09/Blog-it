import { getProject } from "@/sanity/utils/fetchData";
import { PortableText } from '@portabletext/react';
import Image from "next/image";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div className="p-24 border border-red-500">
      <header className="flex items-center justify-between border border-red-500">
        <h1 className="text-purple-700 text-5xl drop-shadow-sm font-extrabold">
          {project.title}
        </h1>

        <a
          href={project.url}
          title="view project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-purple-500 hover:text-pink-100 transition duration-500 ease-in-out"
        >
          View Project
        </a>
      </header>
      <div className="border border-red-500 m-2">
      
      {project.image ? (
        <Image
          src={project.image}
          alt={project.title}
          width={1920}
          height={1080}
          className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
        />
      ) : (
        <div className="p-12 text-xl text-gray-700">No image available 🍃</div>
      )}

      
      <div className="text-lg text-gray-700 mt-5 prose px-12">
        <PortableText value={project.content} />
      </div>
    </div></div>
  );
}
