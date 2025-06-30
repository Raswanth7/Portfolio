import { projects } from '../../components/projectsData';
import Image from 'next/image';
import Link from 'next/link';
import { FaLink } from "react-icons/fa";


export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === Number(params.id));

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <Link href="/" className="text-blue-500 underline">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 px-8">
      {/* <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-8 relative">
        <Link href="/" className="absolute top-4 left-4 text-sm text-blue-500 underline">← Back</Link>
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-black/10 rounded-full p-2 border border-gray-200">
            <Image src={project.logo} alt={project.title} width={48} height={48} className="w-12 h-12 rounded-full" />
          </div>
          <div>
            <h1 className="text-3xl font-bold font-benzin text-black">{project.title}</h1>
            <p className="text-gray-600 text-sm">{project.subtitle}</p>
          </div>
        </div>
        <div className="mb-4 text-gray-800 font-mont text-base">
          {project.description}
        </div>
        <div className="mb-6">
          <div className="bento-grid grid grid-cols-2 gap-2 h-56">
            {project.images.slice(0, Math.min(3, project.images.length)).map((img, i) => {
              let gridClass = "";
              if (i === 0) gridClass = "col-span-1 row-span-2";
              else gridClass = "col-span-1 row-span-1";
              return (
                <div key={i} className={`bento-item ${gridClass} rounded-lg overflow-hidden bg-gray-800 relative`}>
                  <div className="w-full h-full border-1 border-black/10">
                    <Image src={img} alt={`${project.title} preview ${i + 1}`} width={1920} height={1080} className="object-cover w-full h-full" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-2">
          {project.technologies.map((tech, i) => (
            <span key={i} className="bg-black/70 text-white px-3 py-1.5 rounded-full text-xs font-medium border border-white/20">
              {tech}
            </span>
          ))}
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Visit Project</a>
      </div> */}
      <div>
        <Image
        src={project.images[0]}
        alt='project image'
        width={1920}
        height={1080}
        className='rounded-2xl'
        />
      </div>
      
      <div className='flex flex-col w-full h-full px-6'>
      <div className='flex w-full items-center'>
      <div className='flex flex-col gap-1 w-full py-4'>
        <h1 className='text-7xl font-benzin'>{project.title}</h1>
        <h1 className='text-xl font-mont '>{project.subtitle}</h1>
      </div>
      <Image
      src={project.logo}
      alt='logo'
      width={1920}
      height={1080}
      className='w-14 h-14 rounded-full border-4 border-white/20'
      />
      </div>
      <div className='flex flex-row w-full justify-between items-center'>
        <div className='flex h-full gap-3 items-center'>
        {project.technologies?.map((tech,index)=>{
          return(
            <div key={index} className='bg-blue-700 p-1 px-2 rounded-full hover:opacity-80 items-center'>
              <h1 className='font-mont text-center font-semibold'>{tech}</h1>
            </div>
          )
        })}
        </div>
        <div className='bg-blue-700 px-2 py-1 rounded-md flex flex-row items-center gap-2'>
          <FaLink />
          <h1 className='font-mont font-semibold'>Visit site</h1>
        </div>
      </div>
      <div className='flex w-full py-4  '>
        <p className='font-mont text-xl font-light'>{project?.description}</p>
      </div>
      </div>
    </div>
  );
} 