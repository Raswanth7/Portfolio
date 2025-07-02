import { projects } from '../../components/projectsData';
import Image from 'next/image';
import Link from 'next/link';
import { FaLink } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === Number(params.id));

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center">Project Not Found</h1>
        <Link href="/" className="text-blue-500 underline">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-4 sm:py-8 px-4 sm:px-8">
      {/* Carousel - Responsive width */}
      <Carousel className='w-full max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-7xl'>
        <CarouselContent>
          {project.images.map((img, index) => (
            <CarouselItem key={index}>
              <div className='border-1 border-white/20 rounded-xl sm:rounded-2xl'>
                <Image
                  src={img}
                  alt='project image'
                  width={1920}
                  height={1080}
                  className='rounded-xl sm:rounded-2xl w-full h-auto'
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>

      {/* Content Section - Responsive layout */}
      <div className='flex flex-col w-full h-full px-2 sm:px-6'>
        {/* Title and Logo Section - Stack on mobile, side by side on larger screens */}
        <div className='flex flex-col sm:flex-row w-full items-start sm:items-center'>
          <div className='flex flex-col gap-1 w-full py-2 sm:py-4 order-2 sm:order-1'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-benzin leading-tight'>{project.title}</h1>
            <h1 className='text-lg sm:text-xl font-mont'>{project.subtitle}</h1>
          </div>
          <div className="order-1 sm:order-2 self-start sm:self-auto pt-4 sm:mb-0">
            <Image
              src={project.logo}
              alt='logo'
              width={1920}
              height={1080}
              className='w-12 h-12 sm:w-14 sm:h-14 rounded-full border-4 border-white/20'
            />
          </div>
        </div>

        {/* Technologies and Visit Link Section - Stack on mobile */}
        <div className='flex flex-col sm:flex-row w-full justify-between items-start sm:items-center gap-4 sm:gap-0'>
          {/* Technologies */}
          <div className='flex h-full gap-2 sm:gap-3 items-center flex-wrap'>
            {project.technologies?.map((tech, index) => {
              return(
                <div key={index} className={`${project.bgcolor} p-1 px-2 sm:px-2 rounded-full hover:opacity-80 items-center`}>
                  <h1 className='font-mont text-center font-semibold text-sm sm:text-base'>{tech}</h1>
                </div>
              )
            })}
          </div>

          {/* Visit Site Button */}
          {/* <div className={`${project.bgcolor} px-3 py-2 sm:px-2 sm:py-1 rounded-md flex flex-row items-center gap-2 self-start sm:self-auto`}>
            <FaLink className="text-sm sm:text-base" />
            <h1 className='font-mont font-semibold text-sm sm:text-base'>Visit site</h1>
          </div> */}
        </div>

        {/* Description Section */}
        <div className='flex w-full py-4'>
          <p className='font-mont text-base sm:text-lg md:text-xl font-light leading-relaxed'>{project?.description}</p>
        </div>
      </div>
    </div>
  );
}