import { Video, Comment } from '../types';

export const mockVideos: Video[] = [
  {
    id: '1',
    title: 'Beautiful Nature Documentary - Wildlife in 4K',
    thumbnail: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    duration: '10:24',
    views: 1500000,
    uploadTime: '2 days ago',
    channel: 'Nature Explorer',
    channelAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    description: 'Explore the breathtaking beauty of nature with this stunning 4K wildlife documentary featuring amazing animals in their natural habitat.',
    likes: 45000,
    dislikes: 500,
    subscribers: 850000
  },
  {
    id: '2',
    title: 'Modern Web Development Tutorial - React & TypeScript',
    thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    duration: '25:15',
    views: 750000,
    uploadTime: '1 week ago',
    channel: 'Code Academy',
    channelAvatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    description: 'Learn modern web development with React and TypeScript. This comprehensive tutorial covers everything from setup to deployment.',
    likes: 32000,
    dislikes: 200,
    subscribers: 1200000
  },
  {
    id: '3',
    title: 'Relaxing Piano Music for Study and Focus',
    thumbnail: 'https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    duration: '1:30:00',
    views: 2200000,
    uploadTime: '3 days ago',
    channel: 'Peaceful Sounds',
    channelAvatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    description: '90 minutes of beautiful, relaxing piano music perfect for studying, working, or meditation.',
    likes: 89000,
    dislikes: 1200,
    subscribers: 950000
  },
  {
    id: '4',
    title: 'Amazing City Timelapse - Urban Life in Motion',
    thumbnail: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    duration: '8:42',
    views: 950000,
    uploadTime: '5 days ago',
    channel: 'Urban Explorer',
    channelAvatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    description: 'Experience the bustling energy of city life through this stunning timelapse capturing urban movement and architecture.',
    likes: 28000,
    dislikes: 300,
    subscribers: 540000
  },
  {
    id: '5',
    title: 'Cooking Masterclass - Italian Pasta Recipe',
    thumbnail: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    duration: '15:30',
    views: 680000,
    uploadTime: '1 day ago',
    channel: 'Chef Masters',
    channelAvatar: 'https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    description: 'Learn to make authentic Italian pasta from scratch with this detailed cooking tutorial from professional chefs.',
    likes: 25000,
    dislikes: 150,
    subscribers: 780000
  },
  {
    id: '6',
    title: 'Fitness Workout - Full Body Training at Home',
    thumbnail: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    duration: '45:20',
    views: 1100000,
    uploadTime: '4 days ago',
    channel: 'Fit Life',
    channelAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    description: 'Complete full-body workout routine you can do at home with no equipment needed. Perfect for beginners and advanced.',
    likes: 42000,
    dislikes: 800,
    subscribers: 1300000
  }
];

export const mockComments: Comment[] = [
  {
    id: '1',
    author: 'John Smith',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    content: 'Amazing video! The quality is incredible and very informative.',
    timestamp: '2 hours ago',
    likes: 45
  },
  {
    id: '2',
    author: 'Sarah Johnson',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    content: 'Thanks for sharing this tutorial. It helped me a lot!',
    timestamp: '5 hours ago',
    likes: 23
  },
  {
    id: '3',
    author: 'Mike Davis',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    content: 'Could you make more content like this? Really enjoyed watching.',
    timestamp: '1 day ago',
    likes: 67
  }
];