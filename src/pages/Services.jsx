export default function Services() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen bg-white">
      <div className="max-w-screen-2xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-24">Services</h1>
        <div className="border-t border-black">
          {['Brand Strategy', 'Digital Design', 'Web Development', 'Creative Technology'].map((service, i) => (
            <div key={i} className="py-12 border-b border-black flex flex-col md:flex-row md:items-center justify-between">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter hover:text-[#ff4500] transition-colors">{service}</h2>
              <div className="text-xl mt-4 md:mt-0 text-gray-500 font-medium">0{i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
