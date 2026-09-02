import React, { useRef, useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';

function VideoThumbnail({ src, alt, className, style }) {
  const videoRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      video.currentTime = 0.1;
    };

    const handleSeeked = () => {
      setReady(true);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('seeked', handleSeeked);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('seeked', handleSeeked);
    };
  }, [src]);

  return (
    <div className={`video-thumbnail ${className || ''}`} style={style}>
      <video
        ref={videoRef}
        src={src}
        preload="metadata"
        muted
        playsInline
        className="video-thumbnail-source"
      />
      {!ready && (
        <div className="video-thumbnail-loading">
          <FaPlay className="video-thumbnail-loading-icon" />
        </div>
      )}
      <div className="video-thumbnail-play">
        <FaPlay className="video-thumbnail-play-icon" />
      </div>
    </div>
  );
}

export default VideoThumbnail;
