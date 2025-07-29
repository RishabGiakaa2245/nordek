import { useState, useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

const SplineGlobe = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [dimensions, setDimensions] = useState({ width: '600px', height: '600px' });
  const containerRef = useRef(null);

  // Get responsive size based on screen width
  const getResponsiveSize = () => {
   
    return { width: '100vw', height: '100vh' }; // Increased default from 600px
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const newSize = getResponsiveSize();
      setDimensions(newSize);
      
      // Update container dimensions
      if (containerRef.current) {
        const container = containerRef.current;
        container.style.width = newSize.width;
        container.style.height = newSize.height;
      }
      
      // Update canvas dimensions directly
      const canvas = document.querySelector('canvas');
      if (canvas) {
        canvas.style.width = newSize.width;
        canvas.style.height = newSize.height;
      }
    };

    // Set initial size
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Optimized canvas resize - only when needed
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      container.style.width = dimensions.width;
      container.style.height = dimensions.height;
      
      // Simple canvas resize
      const canvas = containerRef.current.querySelector('canvas');
      if (canvas) {
        canvas.style.width = dimensions.width;
        canvas.style.height = dimensions.height;
      }
    }
  }, [dimensions]);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Minimal CSS override - only targets canvas directly */}
      <style>{`
        canvas {
          width: ${dimensions.width} !important;
          height: ${dimensions.height} !important;
        }
      `}</style>
      
      <div 
        ref={containerRef}
        className="relative transition-all duration-300 ease-in-out"
        style={{ 
          width: dimensions.width, 
          height: dimensions.height,
          minWidth: dimensions.width,
          minHeight: dimensions.height
        }}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center text-white/50 z-10">
            <div className="bg-black/50 px-3 py-2 rounded text-xs sm:text-sm backdrop-blur-sm">
              Loading Globe...
            </div>
          </div>
        )}
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center text-red-400 z-10">
            <div className="bg-black/50 px-3 py-2 rounded text-xs sm:text-sm backdrop-blur-sm">
              Failed to load globe
            </div>
          </div>
        )}
        <Spline 
          scene="https://prod.spline.design/JDOOi6cfggvzwt4q/scene.splinecode" 
          style={{ 
            width: dimensions.width, 
            height: dimensions.height,
            display: 'block'
          }}
          onLoad={() => {
            console.log('Spline scene loaded successfully');
            setIsLoading(false);
            
            // Single, efficient canvas resize after load
            setTimeout(() => {
              const canvas = containerRef.current?.querySelector('canvas');
              if (canvas) {
                canvas.style.width = dimensions.width;
                canvas.style.height = dimensions.height;
              }
            }, 50); // Reduced delay for faster response
          }}
          onError={(error) => {
            console.error('Spline error:', error);
            setHasError(true);
            setIsLoading(false);
          }}
        />
      </div>
    </div>
  );
};

export default SplineGlobe;