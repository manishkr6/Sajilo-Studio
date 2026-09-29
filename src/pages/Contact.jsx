export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen bg-[#ff4500] text-black flex flex-col justify-center">
      <div className="max-w-screen-2xl mx-auto w-full">
        <h1 className="text-[12vw] md:text-[8vw] font-bold tracking-tighter uppercase leading-[0.9] mb-12">
          Hello.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          <div>
            <p className="text-2xl md:text-4xl font-medium leading-relaxed mb-12">
              Ready to start a new project? Let's talk about it.
            </p>
            <a href="mailto:hello@sajilostudio.com" className="text-xl md:text-2xl font-bold uppercase tracking-wide border-b-2 border-black pb-2 hover:opacity-50 transition-opacity">
              hello@sajilostudio.com
            </a>
          </div>
          <div className="flex flex-col space-y-8">
            <div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-2">Location</h3>
              <p className="text-xl">Global / Remote</p>
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-2">Social</h3>
              <div className="flex space-x-6">
                <a href="#" className="text-xl hover:opacity-50 transition-opacity">Instagram</a>
                <a href="#" className="text-xl hover:opacity-50 transition-opacity">LinkedIn</a>
                <a href="#" className="text-xl hover:opacity-50 transition-opacity">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
