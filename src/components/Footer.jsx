import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-16 md:py-24 px-6 md:px-12 mt-auto">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Brand & Description */}
        <div className="lg:col-span-2 flex flex-col justify-between">
          <div>
            <Link to="/" className="text-2xl md:text-3xl font-bold tracking-tight uppercase block mb-6 hover:text-gray-300 transition-colors">
              Sajilo Studio
            </Link>
            <p className="text-gray-400 text-lg md:text-xl max-w-md text-balance leading-relaxed">
              Creative studio for brands, digital experiences, and technology.
            </p>
          </div>
          <div className="mt-16 md:mt-0 text-gray-500 text-sm hidden lg:block">
            &copy; {currentYear} Sajilo Studio. All rights reserved.
          </div>
        </div>
        
        {/* Navigation */}
        <div>
          <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-6 font-semibold">Menu</h4>
          <ul className="space-y-4">
            {['Work', 'Studio', 'Services', 'Contact'].map((item) => (
              <li key={item}>
                <Link 
                  to={`/${item.toLowerCase()}`} 
                  className="text-lg hover:text-[#ff4500] transition-colors relative inline-block group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#ff4500] transition-all duration-300 ease-out group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Social */}
        <div>
          <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-6 font-semibold">Social</h4>
          <ul className="space-y-4">
            {['Instagram', 'LinkedIn', 'GitHub'].map((social) => (
              <li key={social}>
                <a 
                  href="#" 
                  className="text-lg hover:text-[#ff4500] transition-colors relative inline-block group"
                >
                  {social}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#ff4500] transition-all duration-300 ease-out group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
      
      {/* Mobile Copyright */}
      <div className="mt-16 text-gray-500 text-sm lg:hidden border-t border-gray-800 pt-8">
        &copy; {currentYear} Sajilo Studio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
