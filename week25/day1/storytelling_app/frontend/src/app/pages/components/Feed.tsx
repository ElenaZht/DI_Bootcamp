import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../features/store";
import StoryCard from "./StoryCard";
import type { Story } from "../../../features/types";
import type {FilterType} from '../../../../../types/StoryTypes'


interface FeedProps {
    filter: FilterType;
}

export default function Feed({filter}: FeedProps) {
    const { currentUser, isAuthenticated } = useSelector((state: RootState) => state.user);
    const { items: stories, status, error } = useSelector((state: RootState) => state.stories);

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
        return <div>Loading stories...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="flex flex-col items-center justify-start">
            {filteredAndSortedStories.length === 0 ? (
                <p>{filter === 'my' && !isAuthenticated 
                    ? 'Please log in to see your stories' 
                    : 'No stories found'}
                </p>
            ) : (
                filteredAndSortedStories.map((story) => (
                    <StoryCard 
                        key={story.id}
                        id={story.id}
                        title={story.title}
                        content={story.content}
                        authorId={story.author_id}
                        createdAt={story.created_at}
                    />
                ))
            )}
        </div>
    );
}