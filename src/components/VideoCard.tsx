import React from 'react';
import { Video } from '../types';

interface VideoCardProps {
  video: Video;
  onClick: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onClick }) => {
  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M views`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(0)}K views`;
    }
    return `${views} views`;
  };

  return (
    <div 
      className="cursor-pointer group"
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          loading="lazy"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
      </div>

      {/* Video info */}
      <div className="flex mt-3 space-x-3">
        <div className="flex-shrink-0">
          <img
            src={video.channelAvatar}
            alt={video.channel}
            className="w-9 h-9 rounded-full"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
            {video.title}
          </h3>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
            {video.channel}
          </p>
          
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1">
            <span>{formatViews(video.views)}</span>
            <span className="mx-1">•</span>
            <span>{video.uploadTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;