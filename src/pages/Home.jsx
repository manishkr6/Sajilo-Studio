import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

import { ArrowRight } from 'lucide-react';

// Reusable animated text component
const RevealText = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : { y: "100%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  
  const projects = [
    {
      id: 1,
      title: "Digital Form",
      category: "Digital Experience",
      year: "2024",
      description: "A new standard for immersive digital platforms, blending technology and editorial design.",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
      slug: "project-one"
    },
    {
      id: 2,
      title: "Onyx Identity",
      category: "Brand Identity",
      year: "2023",
      description: "Complete visual repositioning for a global architecture firm focused on minimal brutalism.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop",
      slug: "project-two"
    },
    {
      id: 3,
      title: "Nexus Web",
      category: "Web & Technology",
      year: "2024",
      description: "An AI-powered interface that turns complex data into beautiful, intuitive visualizations.",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
      slug: "project-three"
    }
  ];

  const services = [
    { num: "01", title: "Brand Strategy", desc: "Building clear identities and visual systems." },
    { num: "02", title: "Digital Design", desc: "Creating expressive and intuitive digital experiences." },
    { num: "03", title: "Web Development", desc: "Turning ambitious ideas into fast, scalable websites." },
    { num: "04", title: "Creative Technology", desc: "Using technology, interaction, motion, and AI to create new experiences." },
    { num: "05", title: "Content & Campaigns", desc: "Creating digital stories and campaigns that build attention." }
  ];

  return (
    <div className="bg-[#f8f8f8]">
      
      {/* 1. Hero Section */}
      <section className="h-screen flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 relative overflow-hidden">
        <motion.div style={{ y: heroY }} className="max-w-screen-2xl mx-auto w-full z-10">
          <h1 className="text-[12vw] md:text-[8vw] leading-[0.9] font-bold tracking-tighter uppercase mb-12 max-w-[90%]">
            <RevealText>We make</RevealText>
            <RevealText delay={0.1}>complex things</RevealText>
            <RevealText delay={0.2}>feel simple.</RevealText>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-start-7 md:col-span-5 text-xl md:text-2xl font-medium leading-relaxed max-w-lg">
              <RevealText delay={0.4}>
                Sajilo Studio is an independent creative studio building brands, digital experiences, and technology that people remember.
              </RevealText>
            </div>
          </div>
        </motion.div>
        
        {/* Abstract animated shape in background */}
        <div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-gradient-to-tr from-[#ff4500]/20 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-[pulse_8s_ease-in-out_infinite]" />
      </section>

      {/* 2. Featured Work */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-white text-black">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-end mb-16 md:mb-24">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">Selected Work</h2>
            <a href="#work" className="hidden md:flex items-center text-lg font-medium hover:text-[#ff4500] transition-colors group">
              View all projects 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="space-y-32 md:space-y-48">
            {projects.map((project, idx) => (
              <div key={project.id} className="group relative">
                <a href="#work" data-cursor="VIEW">
                  <div className={`grid grid-cols-1 ${idx % 2 !== 0 ? 'md:grid-cols-12' : 'md:grid-cols-12'} gap-8 md:gap-16`}>
                    
                    {/* Image Block */}
                    <div className={`col-span-1 ${idx % 2 !== 0 ? 'md:col-start-6 md:col-span-7 order-1 md:order-2' : 'md:col-span-8 order-1'}`}>
                      <div className="relative overflow-hidden aspect-[4/3] md:aspect-[16/10] bg-gray-100">
                        <motion.img 
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                          src={project.img} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Text Block */}
                    <div className={`col-span-1 flex flex-col justify-end ${idx % 2 !== 0 ? 'md:col-start-1 md:col-span-4 order-2 md:order-1 text-left' : 'md:col-span-4 order-2 text-left'}`}>
                      <div className="border-t border-black pt-6 md:pt-8 mt-6 md:mt-0">
                        <div className="text-sm font-medium mb-4 flex justify-between">
                          <span>0{project.id} — {project.category}</span>
                          <span>{project.year}</span>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-6">{project.title}</h3>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">{project.description}</p>
                      </div>
                    </div>

                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Studio Philosophy Statement */}
      <section className="py-32 md:py-64 px-6 md:px-12 bg-black text-white">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-[10vw] md:text-[7vw] leading-[0.9] font-bold tracking-tighter uppercase mb-16">
            <RevealText>Make it simple.</RevealText>
            <RevealText delay={0.1}>Make it distinctive.</RevealText>
            <RevealText delay={0.2}>
              <span className="text-[#ff4500]">Make it matter.</span>
            </RevealText>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-start-8 md:col-span-5 text-xl md:text-3xl leading-relaxed text-gray-300">
              <RevealText delay={0.4}>
                We believe the best digital experiences are born from rigorous subtraction. By removing the unnecessary, we create space for what truly matters.
              </RevealText>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter sticky top-32">What we do</h2>
            </div>
            
            <div className="lg:col-span-8 flex flex-col">
              {services.map((service, idx) => (
                <div 
                  key={idx} 
                  className="group flex flex-col md:flex-row md:items-center py-10 md:py-16 border-t border-black/10 hover:border-black transition-colors"
                >
                  <div className="text-sm md:text-lg font-medium w-16 md:w-24 shrink-0 mb-4 md:mb-0 text-gray-400 group-hover:text-black transition-colors">{service.num}</div>
                  <div className="flex-grow">
                    <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter mb-2 md:mb-4 group-hover:text-[#ff4500] transition-colors">{service.title}</h3>
                    <p className="text-lg md:text-xl text-gray-600 max-w-md group-hover:text-black transition-colors">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Statement */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-[#ff4500] text-black overflow-hidden relative">
        <div className="max-w-screen-2xl mx-auto z-10 relative pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-[12vw] md:text-[9vw] font-bold uppercase tracking-tighter leading-[0.85] text-center"
          >
            We believe <br/>
            good design <br/>
            should feel <br/>
            <span className="text-white">effortless.</span>
          </motion.div>
        </div>
      </section>

      {/* 6. Studio Intro */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-white">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-12">Sajilo Studio</h2>
            <div className="text-2xl md:text-4xl font-medium leading-snug">
              We are a creative digital studio working across design, technology, branding, and digital experiences. We turn complex ideas into clear, distinctive, and memorable experiences.
            </div>
          </div>
          
          <div className="flex flex-col justify-end">
            <div className="grid grid-cols-2 gap-8 text-lg font-medium">
              <div className="flex flex-col space-y-4 border-l border-black pl-6 py-2">
                <span>Design</span>
                <span>Technology</span>
                <span>Strategy</span>
              </div>
              <div className="flex flex-col space-y-4 border-l border-black pl-6 py-2">
                <span>Motion</span>
                <span>AI Integration</span>
                <span>Branding</span>
              </div>
            </div>
            <div className="mt-16 pt-8 border-t border-black/10">
              <a href="#studio" className="inline-flex items-center text-lg font-medium hover:text-[#ff4500] transition-colors group">
                About the studio
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Process */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-[#f8f8f8]">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-24 md:mb-32">Our Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {[
              { n: '01', t: 'Discover', d: 'Understand the problem, audience, and opportunity.' },
              { n: '02', t: 'Define', d: 'Build the strategy and creative direction.' },
              { n: '03', t: 'Design', d: 'Develop the visual language and experience.' },
              { n: '04', t: 'Build', d: 'Turn the idea into a polished digital product.' },
              { n: '05', t: 'Evolve', d: 'Measure, learn, and continue improving.' },
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col border-t border-black pt-6">
                <span className="text-sm font-medium mb-6 text-gray-500">{step.n}</span>
                <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4">{step.t}</h3>
                <p className="text-gray-600 leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Latest Thoughts / Journal */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-white text-black">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          <div className="md:col-span-4">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter sticky top-32">Notes from<br/>the Studio</h2>
          </div>
          
          <div className="md:col-span-8 flex flex-col border-t border-black">
            {[
              "Why simplicity is harder than complexity",
              "Designing digital experiences people remember",
              "What AI means for creative studios",
              "Building brands for the next generation",
            ].map((article, idx) => (
              <a key={idx} href="#" className="group block py-8 border-b border-black/20 hover:border-black transition-colors">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl md:text-4xl font-bold tracking-tighter uppercase group-hover:text-[#ff4500] transition-colors">{article}</h3>
                  <ArrowRight className="w-8 h-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[10vw] md:text-[6vw] font-bold tracking-tighter uppercase leading-[0.9] mb-12">
            Have something<br/>worth making?
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-2xl mx-auto">
            Let's turn your idea into something simple, distinctive, and unforgettable.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center bg-white text-black px-8 py-5 rounded-full text-lg md:text-xl font-bold uppercase tracking-wide hover:bg-[#ff4500] hover:text-white transition-colors duration-300"
          >
            Start a project
            <ArrowRight className="ml-3 w-6 h-6" />
          </a>
        </div>
      </section>

    </div>
  );
}
