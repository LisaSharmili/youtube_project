export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  views: number;
  uploadTime: string;
  channel: string;
  channelAvatar: string;
  description: string;
  likes: number;
  dislikes: number;
  subscribers: number;
}

export interface Comment {
  id: string;
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
}