import React from 'react';
import { Home, TrendingUp, Subscript as Subscriptions, Library, History, Watch as WatchLater, ThumbsUp, Download } from 'lucide-react';

type ViewType = 'home' | 'trending' | 'subscriptions' | 'library' | 'history' | 'watchLater' | 'liked' | 'downloads';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, currentView, onViewChange }) => {
  const menuItems = [
    { icon: Home, label: 'Home', view: 'home' as ViewType },
    { icon: TrendingUp, label: 'Trending', view: 'trending' as ViewType },
    { icon: Subscriptions, label: 'Subscriptions', view: 'subscriptions' as ViewType },
  ];

  const libraryItems = [
    { icon: Library, label: 'Library', view: 'library' as ViewType },
    { icon: History, label: 'History', view: 'history' as ViewType },
    { icon: WatchLater, label: 'Watch Later', view: 'watchLater' as ViewType },
    { icon: ThumbsUp, label: 'Liked Videos', view: 'liked' as ViewType },
    { icon: Download, label: 'Downloads', view: 'downloads' as ViewType },
  ];

  const handleItemClick = (view: ViewType) => {
    onViewChange(view);
    onClose(); // Close sidebar on mobile after selection
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed left-0 top-16 h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 z-40 transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="py-4 overflow-y-auto">
          {/* Main navigation */}
          <div className="px-3">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleItemClick(item.view)}
                className={`
                  flex items-center w-full px-3 py-2 rounded-lg text-left transition-colors
                  ${currentView === item.view
                    ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }
                `}
              >
                <item.icon className="w-6 h-6 mr-6" />
                {item.label}
              </button>
            ))}
          </div>

          <hr className="my-4 border-gray-200 dark:border-gray-700" />

          {/* Library section */}
          <div className="px-3">
            <h3 className="px-3 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Library
            </h3>
            {libraryItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleItemClick(item.view)}
                className={`
                  flex items-center w-full px-3 py-2 rounded-lg text-left transition-colors
                  ${currentView === item.view
                    ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }
                `}
              >
                <item.icon className="w-6 h-6 mr-6" />
                {item.label}
              </button>
            ))}
          </div>

          <hr className="my-4 border-gray-200 dark:border-gray-700" />

          {/* Subscriptions */}
          <div className="px-3">
            <h3 className="px-3 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Subscriptions
            </h3>
            <div className="space-y-1">
              {['Tech Channel', 'Music Hub', 'Gaming World'].map((channel) => (
                <button
                  key={channel}
                  className="flex items-center w-full px-3 py-2 rounded-lg text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="w-6 h-6 bg-red-500 rounded-full mr-6 flex-shrink-0" />
                  <span className="truncate">{channel}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;