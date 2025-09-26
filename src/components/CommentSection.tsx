import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, MoreVertical } from 'lucide-react';
import { Comment } from '../types';

interface CommentSectionProps {
  comments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  const [newComment, setNewComment] = useState('');
  const [likedComments, setLikedComments] = useState<Set<string>>(new Set());

  const handleCommentLike = (commentId: string) => {
    const newLikedComments = new Set(likedComments);
    if (likedComments.has(commentId)) {
      newLikedComments.delete(commentId);
    } else {
      newLikedComments.add(commentId);
    }
    setLikedComments(newLikedComments);
  };

  return (
    <div className="mt-8">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {comments.length} Comments
        </h3>
        
        {/* Add comment */}
        <div className="flex space-x-3">
          <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex-shrink-0" />
          <div className="flex-1">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 resize-none"
              rows={1}
            />
            {newComment && (
              <div className="flex items-center justify-end space-x-2 mt-2">
                <button
                  onClick={() => setNewComment('')}
                  className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded transition-colors"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                  Comment
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Comments list */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-3">
            <div className="flex-shrink-0">
              <img
                src={comment.avatar}
                alt={comment.author}
                className="w-10 h-10 rounded-full"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-sm text-gray-900 dark:text-white">
                  {comment.author}
                </span>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  {comment.timestamp}
                </span>
              </div>
              
              <p className="mt-1 text-gray-800 dark:text-gray-200">
                {comment.content}
              </p>
              
              <div className="flex items-center space-x-2 mt-2">
                <button
                  onClick={() => handleCommentLike(comment.id)}
                  className={`flex items-center space-x-1 p-2 rounded-full transition-colors ${
                    likedComments.has(comment.id)
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-xs">
                    {comment.likes + (likedComments.has(comment.id) ? 1 : 0)}
                  </span>
                </button>
                
                <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-full transition-colors">
                  <ThumbsDown className="w-4 h-4" />
                </button>
                
                <button className="px-3 py-1 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-semibold rounded transition-colors">
                  Reply
                </button>
                
                <button className="p-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded transition-colors">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;