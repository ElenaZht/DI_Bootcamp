import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../features/store";
import StoryCard from "./StoryCard";
import type { Story } from "../../../../../types/StoryTypes";
import type {FilterType} from '../../../../../types/StoryTypes'
import { getAllStories } from "../../../features/StoriesSlice";


interface FeedProps {
    filter: FilterType;
}

export default function Feed({filter}: FeedProps) {
    const { currentUser, isAuthenticated } = useSelector((state: RootState) => state.user);
    const { items: stories, status, error } = useSelector((state: RootState) => state.stories);
    const dispatch = useDispatch<AppDispatch>(); // Added dispatch

    const [filteredAndSortedStories, setFilteredAndSortedStories] = useState([] as Story[])


    useMemo(() => {
        // Handle case where user is not authenticated
        if (filter === 'my' && !isAuthenticated) {
            return [];
        }

        // Filter stories based on current filter
        const filtered = filter === 'my' && currentUser?.id
            ? stories.filter(story => story.author_id === currentUser.id)
            : stories;

        // Sort by date (newest first)
        const res =  [...filtered].sort((a, b) => 
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
        setFilteredAndSortedStories(res)
        
    }, [stories, filter, currentUser, isAuthenticated]);

    if (status === 'loading') {
        return (
            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]"> {/* Adjust min-height as needed */}
                <span className="loading loading-dots loading-lg text-primary"></span>
                <p className="mt-2 text-lg">Loading stories...</p>
            </div>
        );
    }

    if (status === 'failed') {
        return (
            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] p-4">
                <div role="alert" className="alert alert-error shadow-lg max-w-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2 2m2-2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div>
                        <h3 className="font-bold">Oops! Something went wrong.</h3>
                        <div className="text-xs">{error || 'Could not load stories. Please try again later.'}</div>
                    </div>
                </div>
                <button 
                    className="btn btn-primary btn-sm mt-4" 
                    onClick={() => dispatch(getAllStories())} // Allow user to retry
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-start w-full px-2 py-4 space-y-4"> {/* Added padding and spacing */}
            {filteredAndSortedStories.length === 0 ? (
                <div className="text-center py-10">
                    <p className="text-xl text-gray-500">
                        {filter === 'my' && !isAuthenticated 
                            ? 'Please log in to see your stories.' 
                            : 'No stories found.'}
                    </p>
                    {filter === 'my' && !isAuthenticated && (
                        <a href="/login" className="btn btn-primary btn-sm mt-4">Log In</a>
                    )}
                    {/* Optionally, add a button to create a story if 'No stories found' for 'all' or authenticated 'my' */}
                </div>
            ) : (
                filteredAndSortedStories.map((story) => (
                    <StoryCard 
                        key={story.id}
                        id={story.id}
                        title={story.title}
                        content={story.content}
                        authorId={story.author_id}
                        createdAt={story.created_at}
                        // Pass username if available and needed by StoryCard
                        // username={story.username} // Assuming stories might have username directly
                    />
                ))
            )}
        </div>
    );
}