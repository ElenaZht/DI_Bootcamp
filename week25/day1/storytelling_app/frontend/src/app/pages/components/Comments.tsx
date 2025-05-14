import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStoryComments } from '../../../features/thunks/GetStoryCommentsThunk';
import type { RootState } from '../../../features/store';
import { addComment } from '../../../features/thunks/AddCommentThunk';


interface CommentsProps {
    story_id: string | undefined;
}

const formatDate = (dateString: string | undefined) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};

export default function Comments({story_id}: CommentsProps) {
    const [comments, setComments] = useState([])
    const dispatch = useDispatch()
    const [newComment, setNewComment] = useState('');
    const { currentUser, isAuthenticated } = useSelector((state: RootState) => state.user);
    const [isLoadingComments, setIsLoadingComments] = useState(false);
    const [isPostingComment, setIsPostingComment] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [postSuccessMessage, setPostSuccessMessage] = useState<string | null>(null);

    const handleCommentInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewComment(event.target.value);
        if (error) setError(null);
        if (postSuccessMessage) setPostSuccessMessage(null);
    };

    const fetchStoryComments = useCallback(async () => {
        if (story_id) {
            setIsLoadingComments(true);
            setError(null);
            try {
                const resultAction = await dispatch(getStoryComments(story_id));
                if (getStoryComments.fulfilled.match(resultAction)) {
                    setComments(Array.isArray(resultAction.payload.comments) ? resultAction.payload.comments : []);
                } else if (getStoryComments.rejected.match(resultAction)) {
                    setError(resultAction.payload as string || "Failed to load comments.");
                }
            } catch (err) {
                console.error("Error fetching comments:", err);
                setError("An unexpected error occurred while fetching comments.");
            } finally {
                setIsLoadingComments(false);
            }
        } else {
            setComments([]);
        }
    }, [story_id, dispatch]);

    useEffect(() => {
        fetchStoryComments();
    }, [fetchStoryComments]); 

    const handleSubmitComment = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!newComment.trim()) {
            setError("Comment cannot be empty.");
            return;
        }
        if (!isAuthenticated || !currentUser) {
            setError("You must be logged in to comment.");
            return;
        }
        if (!story_id) {
            setError("Story ID is missing, cannot post comment.");
            return;
        }
    
        setIsPostingComment(true);
        setError(null);
        setPostSuccessMessage(null);
    
        try {
            const resultAction = await dispatch(addComment({
                story_id: story_id,
                content: newComment.trim()
            })); // Added missing closing parenthesis and bracket here
    
            if (addComment.fulfilled.match(resultAction)) {
                setNewComment(''); // Clear the input field
                setPostSuccessMessage("Comment posted successfully!");
                await fetchStoryComments(); // Re-fetch comments to see the new one
                setTimeout(() => setPostSuccessMessage(null), 3000); // Clear success message after 3s
            } else if (addComment.rejected.match(resultAction)) {
                setError(resultAction.payload as string || "Could not post your comment. Please try again.");
            }
        } catch (err: any) {
            console.error("Failed to add comment:", err);
            setError(typeof err === 'string' ? err : err.message || "Could not post your comment. Please try again.");
        } finally {
            setIsPostingComment(false);
        }
    };

    return (
        <div className="card bg-base-100 shadow-xl my-6">
        <div className="card-body">
            <h2 className="card-title text-2xl mb-6 text-left">Comments</h2> 

            {/* Form to Add a New Comment */}
            <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3 text-left">Leave a Comment</h3>
            <form className="w-full" onSubmit={handleSubmitComment}>
                <div className="form-control mb-3">
                <textarea
                    className="textarea textarea-bordered h-20 resize-none w-full"
                    placeholder="Write your comment here..."
                    value={newComment}
                    onChange={handleCommentInputChange}
                    required
                    disabled={isPostingComment}
                ></textarea>
                </div>
                {error && <p className="text-error text-xs mt-1 text-left">{error}</p>}
                <div className="card-actions justify-start w-full">
                <button
                    type="submit"
                    className="btn btn-primary btn-sm"
                    disabled={!newComment.trim()} 
                >
                    Post Comment
                </button>
                </div>
            </form>
            </div>

            {/* Display Existing Comments */}
            
            {comments.length > 0 ? (
            <>
                <h3 className="text-lg font-semibold mb-3 text-left">Existing Comments</h3>
                <div className="space-y-4">
                {comments.map((comment) => (
                    <div key={comment.id} className="card bg-base-200 shadow">
                    <div className="card-body p-3">
                        <p className="text-sm text-left mb-1.5">{comment.content}</p>
                        <div className="text-xs text-gray-500 flex justify-between items-center">
                        <span>By: {comment.username || `User`}</span>
                        <span>{formatDate(comment.created_at)}</span>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </>
            ) : (
            <p className="text-sm text-gray-500 text-left">No comments yet. Be the first to share your thoughts!</p>
            )}
        </div>
        </div>
    );
}