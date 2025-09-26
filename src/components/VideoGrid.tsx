import React from 'react';
import VideoCard from './VideoCard';
import { Video } from '../types';

interface VideoGridProps {
  videos: Video[];
  onVideoClick: (video: Video) => void;
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos, onVideoClick }) => {
  return (
    <div className="px-6 pb-8">
      <div className="max-w-7xl mx-auto">
        {videos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">No videos found</p>
          </div>
        ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onClick={() => onVideoClick(video)}
            />
          ))}
        </div>
        )}
      </div>
    </div>
  );
};

export default VideoGrid;