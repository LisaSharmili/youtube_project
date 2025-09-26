import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import VideoGrid from './components/VideoGrid';
import VideoPlayer from './components/VideoPlayer';
import { mockVideos } from './data/mockData';
import { Video } from './types';

type ViewType = 'home' | 'trending' | 'subscriptions' | 'library' | 'history' | 'watchLater' | 'liked' | 'downloads';

function App() {
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [subscribedChannels, setSubscribedChannels] = useState<Set<string>>(new Set());
  const [likedVideos, setLikedVideos] = useState<Set<string>>(new Set());

  const getFilteredVideos = () => {
    let videos = mockVideos;
    
    // Apply search filter
    if (searchTerm) {
      videos = videos.filter(video =>
        video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.channel.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply view filter
    switch (currentView) {
      case 'trending':
        return videos.sort((a, b) => b.views - a.views);
      case 'subscriptions':
        return videos.filter(video => subscribedChannels.has(video.channel));
      case 'liked':
        return videos.filter(video => likedVideos.has(video.id));
      case 'library':
      case 'history':
      case 'watchLater':
      case 'downloads':
        // For demo purposes, show all videos for these sections
        return videos;
      default:
        return videos;
    }
  };

  const handleVideoClick = (video: Video) => {
    setCurrentVideo(video);
  };

  const handleBackToHome = () => {
    setCurrentVideo(null);
    setCurrentView('home');
  };

  const handleSubscribe = (channel: string) => {
    const newSubscribed = new Set(subscribedChannels);
    if (subscribedChannels.has(channel)) {
      newSubscribed.delete(channel);
    } else {
      newSubscribed.add(channel);
    }
    setSubscribedChannels(newSubscribed);
  };

  const handleLikeVideo = (videoId: string) => {
    const newLiked = new Set(likedVideos);
    if (likedVideos.has(videoId)) {
      newLiked.delete(videoId);
    } else {
      newLiked.add(videoId);
    }
    setLikedVideos(newLiked);
  };

  const getViewTitle = () => {
    switch (currentView) {
      case 'trending': return 'Trending';
      case 'subscriptions': return 'Subscriptions';
      case 'library': return 'Library';
      case 'history': return 'History';
      case 'watchLater': return 'Watch Later';
      case 'liked': return 'Liked Videos';
      case 'downloads': return 'Downloads';
      default: return 'Home';
    }
  };
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header 
        onSearch={setSearchTerm}
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
      />
      
      <div className="flex">
        <Sidebar 
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          currentView={currentView}
          onViewChange={setCurrentView}
        />
        
        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'} lg:ml-64`}>
          {currentVideo ? (
            <VideoPlayer 
              video={currentVideo}
              onBack={handleBackToHome}
              onVideoClick={handleVideoClick}
              isSubscribed={subscribedChannels.has(currentVideo.channel)}
              onSubscribe={() => handleSubscribe(currentVideo.channel)}
              isLiked={likedVideos.has(currentVideo.id)}
              onLike={() => handleLikeVideo(currentVideo.id)}
            />
          ) : (
            <div>
              <div className="pt-20 px-6">
                <div className="max-w-7xl mx-auto">
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    {getViewTitle()}
                  </h1>
                </div>
              </div>
              <VideoGrid 
                videos={getFilteredVideos()}
                onVideoClick={handleVideoClick}
              />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;