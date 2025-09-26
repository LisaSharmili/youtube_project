import React, { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ThumbsUp, ThumbsDown, Share, Download, MoreHorizontal, Bell } from 'lucide-react';
import { Video } from '../types';
import { mockComments, mockVideos } from '../data/mockData';
import CommentSection from './CommentSection';
import VideoCard from './VideoCard';

interface VideoPlayerProps {
  video: Video;
  onBack: () => void;
  onVideoClick?: (video: Video) => void;
  isSubscribed: boolean;
  onSubscribe: () => void;
  isLiked: boolean;
  onLike: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  video, 
  onBack, 
  onVideoClick, 
  isSubscribed, 
  onSubscribe, 
  isLiked, 
  onLike 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  // Get related videos (excluding current video)
  const relatedVideos = mockVideos.filter(v => v.id !== video.id).slice(0, 10);

  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(0)}K`;
    }
    return views.toString();
  };

  const formatSubscribers = (subscribers: number) => {
    if (subscribers >= 1000000) {
      return `${(subscribers / 1000000).toFixed(1)}M`;
    } else if (subscribers >= 1000) {
      return `${(subscribers / 1000).toFixed(0)}K`;
    }
    return subscribers.toString();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: video.title,
        text: `Check out this video: ${video.title}`,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      setShowShareMenu(true);
      setTimeout(() => setShowShareMenu(false), 2000);
    }
  };

  const handleDownload = () => {
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = video.videoUrl;
    link.download = `${video.title}.mp4`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('play', () => setIsPlaying(true));
      video.addEventListener('pause', () => setIsPlaying(false));
    }
  }, []);

  return (
    <div className="pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="lg:flex lg:space-x-6">
          {/* Main content */}
          <div className="lg:flex-1">
            {/* Back button - mobile only */}
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-4 lg:hidden"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to videos</span>
            </button>

            {/* Video player */}
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <video
                ref={videoRef}
                className="w-full h-full"
                controls
                poster={video.thumbnail}
                src={video.videoUrl}
              />
            </div>

            {/* Video title and stats */}
            <div className="mt-4">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {video.title}
              </h1>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                  <span>{formatViews(video.views)} views</span>
                  <span>•</span>
                  <span>{video.uploadTime}</span>
                </div>

                {/* Action buttons */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => {onLike(); setDisliked(false);}}
                    className={`flex items-center space-x-1 px-4 py-2 rounded-full transition-colors ${
                      isLiked 
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' 
                        : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <ThumbsUp className="w-5 h-5" />
                    <span>{formatViews(video.likes + (isLiked ? 1 : 0))}</span>
                  </button>
                  
                  <button
                    onClick={() => {setDisliked(!disliked); onLike();}}
                    className={`flex items-center space-x-1 px-4 py-2 rounded-full transition-colors ${
                      disliked 
                        ? 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400' 
                        : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <ThumbsDown className="w-5 h-5" />
                  </button>
                  
                  <div className="relative">
                    <button 
                      onClick={handleShare}
                      className="flex items-center space-x-1 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-700 dark:text-gray-300"
                    >
                    <Share className="w-5 h-5" />
                    <span>Share</span>
                    </button>
                    {showShareMenu && (
                      <div className="absolute top-full mt-2 left-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-2 z-10">
                        <p className="text-sm text-green-600 dark:text-green-400">Link copied to clipboard!</p>
                      </div>
                    )}
                  </div>
                  
                  <button 
                    onClick={handleDownload}
                    className="flex items-center space-x-1 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-700 dark:text-gray-300"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download</span>
                  </button>
                  
                  <button className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
                    <MoreHorizontal className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </button>
                </div>
              </div>
            </div>

            {/* Channel info */}
            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={video.channelAvatar}
                    alt={video.channel}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{video.channel}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {formatSubscribers(video.subscribers)} subscribers
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={onSubscribe}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full font-semibold transition-colors ${
                      isSubscribed
                        ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                        : 'bg-red-600 text-white hover:bg-red-700'
                    }`}
                  >
                    {isSubscribed ? <Bell className="w-4 h-4" /> : null}
                    <span>{isSubscribed ? 'Subscribed' : 'Subscribe'}</span>
                  </button>
                </div>
              </div>

              {/* Description */}
              <div className="mt-4">
                <div className={`text-gray-700 dark:text-gray-300 ${!showDescription ? 'line-clamp-3' : ''}`}>
                  {video.description}
                </div>
                <button
                  onClick={() => setShowDescription(!showDescription)}
                  className="mt-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-semibold"
                >
                  {showDescription ? 'Show less' : 'Show more'}
                </button>
              </div>
            </div>

            {/* Comments */}
            <CommentSection comments={mockComments} />
          </div>

          {/* Sidebar - Related videos */}
          <div className="lg:w-96 mt-8 lg:mt-0">
            <button
              onClick={onBack}
              className="hidden lg:flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to videos</span>
            </button>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Up next</h3>
              
              {/* Related videos */}
              <div className="space-y-3">
                {relatedVideos.map((relatedVideo) => (
                  <div
                    key={relatedVideo.id}
                    className="flex space-x-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors"
                    onClick={() => onVideoClick?.(relatedVideo)}
                  >
                    <div className="relative w-40 aspect-video rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800 flex-shrink-0">
                      <img
                        src={relatedVideo.thumbnail}
                        alt={relatedVideo.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                        {relatedVideo.duration}
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 mb-1">
                        {relatedVideo.title}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                        {relatedVideo.channel}
                      </p>
                      <div className="flex items-center text-xs text-gray-600 dark:text-gray-400">
                        <span>{formatViews(relatedVideo.views)} views</span>
                        <span className="mx-1">•</span>
                        <span>{relatedVideo.uploadTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;