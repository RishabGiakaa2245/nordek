import { useState, useEffect, useRef } from 'react';

const VideoHero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => {
        setIsLoading(false);
        console.log('Video loaded successfully');
      };

      const handleError = (error) => {
        console.error('Video error:', error);
        setHasError(true);
        setIsLoading(false);
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-[0]">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-fill
"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/images/video/heroback.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Glass/Blur Effect */}
      <div className="absolute inset-0 backdrop-blur-[60px] bg-black/10"></div>

      {/* Gradient Overlay - Black from bottom to transparent */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to top,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0.8) 20%,
            rgba(0, 0, 0, 0.6) 40%,
            rgba(0, 0, 0, 0.4) 60%,
            rgba(0, 0, 0, 0.1) 80%,
            transparent 100%
          )`
        }}
      />

      {/* Additional subtle color overlay for aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10"></div>
    </div>
  );
};

export default VideoHero;