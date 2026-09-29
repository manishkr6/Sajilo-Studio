import { useParams } from 'react-router-dom';

export default function ProjectDetail() {
  const { slug } = useParams();
  
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="px-6 md:px-12 mb-16">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-sm font-medium uppercase mb-4 text-gray-500">Digital Experience • 2024</div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase">{slug.replace('-', ' ')}</h1>
        </div>
      </div>
      
      <div className="w-full h-[60vh] bg-gray-200 mb-24 relative overflow-hidden">
        {/* Placeholder for project hero image */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium uppercase tracking-widest">
          Project Visual
        </div>
      </div>
      
      <div className="px-6 md:px-12 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4 text-lg font-medium text-gray-500 uppercase tracking-wide">
          The Challenge
        </div>
        <div className="md:col-span-8 text-2xl md:text-4xl font-medium leading-relaxed">
          How do we create an immersive digital platform that blends complex technology with the aesthetic of editorial design?
        </div>
      </div>
    </div>
  );
}
