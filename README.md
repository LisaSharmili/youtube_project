# VidStream - Video Streaming Platform

A modern, responsive video streaming platform built with React, TypeScript, and Tailwind CSS. VidStream provides a YouTube-like experience with video playback, user interactions, and a clean, intuitive interface.

![VidStream Screenshot](https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=1)

## 🚀 Features

### Core Functionality
- **Video Streaming**: High-quality video playback with custom controls
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Search**: Real-time video search across titles and channels
- **Navigation**: Intuitive sidebar with multiple content sections

### User Interactions
- **Like/Dislike System**: Interactive engagement with videos
- **Subscription Management**: Subscribe/unsubscribe to channels
- **Comments**: View and interact with video comments
- **Share**: Native sharing or copy-to-clipboard functionality
- **Download**: Video download capability

### Content Organization
- **Home Feed**: Main video discovery page
- **Trending**: Popular videos sorted by view count
- **Subscriptions**: Videos from subscribed channels
- **Library**: Personal video collection
- **History**: Previously watched videos
- **Watch Later**: Saved videos for later viewing
- **Liked Videos**: Collection of liked content

### User Experience
- **Dark/Light Theme**: Automatic theme support
- **Smooth Animations**: Polished micro-interactions
- **Related Videos**: Smart video recommendations
- **Responsive Player**: Full-featured video player with controls

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Development**: ESLint, PostCSS, Autoprefixer

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vidstream
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── Header.tsx       # Navigation header
│   ├── Sidebar.tsx      # Navigation sidebar
│   ├── VideoGrid.tsx    # Video grid layout
│   ├── VideoCard.tsx    # Individual video cards
│   ├── VideoPlayer.tsx  # Video player component
│   └── CommentSection.tsx # Comments functionality
├── data/
│   └── mockData.ts      # Sample video data
├── types/
│   └── index.ts         # TypeScript type definitions
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles
```

## 🎯 Usage

### Navigation
- Use the sidebar to navigate between different sections
- Click the menu button (☰) to toggle sidebar on mobile
- Search for videos using the search bar in the header

### Video Playback
- Click any video thumbnail to start playback
- Use the video player controls for playback management
- Click "Back to videos" to return to the main feed

### Interactions
- **Like/Dislike**: Click thumbs up/down buttons
- **Subscribe**: Click subscribe button on channel info
- **Share**: Use share button to copy link or use native sharing
- **Download**: Click download button to save video
- **Comments**: Scroll down to view and interact with comments

### Content Discovery
- **Home**: Browse all available videos
- **Trending**: Discover popular content
- **Subscriptions**: View content from subscribed channels
- **Library**: Access your personal collection

## 🎨 Design Features

### Visual Design
- Clean, modern interface inspired by leading video platforms
- Consistent color scheme with red accent (#FF0000)
- Professional typography with proper hierarchy
- Smooth hover effects and transitions

### Responsive Layout
- Mobile-first design approach
- Adaptive grid layouts for different screen sizes
- Touch-friendly interface elements
- Optimized for various device orientations

### User Experience
- Intuitive navigation patterns
- Loading states and visual feedback
- Accessibility considerations
- Performance optimizations

## 🔧 Customization

### Adding New Videos
Edit `src/data/mockData.ts` to add new video content:

```typescript
{
  id: 'unique-id',
  title: 'Video Title',
  thumbnail: 'thumbnail-url',
  videoUrl: 'video-file-url',
  duration: '10:24',
  views: 1000000,
  uploadTime: '2 days ago',
  channel: 'Channel Name',
  channelAvatar: 'avatar-url',
  description: 'Video description',
  likes: 50000,
  dislikes: 500,
  subscribers: 1000000
}
```

### Styling Modifications
- Modify `tailwind.config.js` for theme customization
- Update `src/index.css` for global style changes
- Component-specific styles are in individual component files

### Feature Extensions
- Add new navigation items in `Sidebar.tsx`
- Extend video functionality in `VideoPlayer.tsx`
- Implement additional user interactions as needed

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Static Hosting
The built files in the `dist` folder can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Sample videos provided by Google's sample video repository
- Images from Pexels for thumbnails and avatars
- Icons from Lucide React
- Built with React and Vite

## 📞 Support

For support, please open an issue in the GitHub repository or contact the development team.

---

**VidStream** - Experience video streaming like never before! 🎬