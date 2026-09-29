import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [cursorText, setCursorText] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if touch device to disable custom cursor
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', mouseMove);

    // Set up hover listeners
    const handleMouseOver = (e) => {
      const target = e.target;
      
      // Check for links or buttons
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') || 
        target.closest('button')
      ) {
        setCursorVariant('link');
      } 
      // Check for elements with data-cursor attribute
      else if (target.closest('[data-cursor]')) {
        const el = target.closest('[data-cursor]');
        setCursorVariant('project');
        setCursorText(el.getAttribute('data-cursor'));
      }
      else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isTouchDevice) return null;

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      backgroundColor: 'rgba(0, 0, 0, 1)',
      mixBlendMode: 'difference',
      transition: { type: 'spring', mass: 0.1, stiffness: 800, damping: 50 }
    },
    link: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      border: '1px solid rgba(0, 0, 0, 0.5)',
      mixBlendMode: 'normal',
      transition: { type: 'spring', mass: 0.2, stiffness: 400, damping: 30 }
    },
    project: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      backgroundColor: '#ff4500',
      color: 'white',
      mixBlendMode: 'normal',
      transition: { type: 'spring', mass: 0.3, stiffness: 300, damping: 25 }
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[100] flex items-center justify-center text-[10px] font-bold tracking-wider text-center"
      variants={variants}
      animate={cursorVariant}
      style={{
        zIndex: 9999,
        backfaceVisibility: 'hidden',
      }}
    >
      {cursorVariant === 'project' && <span className="px-2 block">{cursorText}</span>}
    </motion.div>
  );
};

export default CustomCursor;
