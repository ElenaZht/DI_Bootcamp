// import React from 'react'
// import ManageSingleStory from './ManageSingleStory'

// export default function ManageStories() {
//   return (
//     <div className='w-full'>
//         <ManageSingleStory 
//             id="1"
//             title="First Story"
//             content="This is the content of the first story"
//             date="2024-05-11"
//             contributors={["Maya Kane", "John Doe"]}/>
//         <ManageSingleStory 
//             id="2"
//             title="Second Story"
//             content="This is the content of the second story"
//             date="2024-05-11"
//             contributors={["Maya Kane", "John Doe"]}/>
//         <ManageSingleStory 
//             id="3"
//             title="Third Story"
//             content="This is the content of the third story"
//             date="2024-05-11"
//             contributors={["Maya Kane", "John Doe"]}/>
        
//     </div>
//   )
// }
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { AppDispatch, RootState } from '../../../features/store';
import { getAllStories } from '../../../features/thunks/StoriesThunk';
import ManageSingleStory from './ManageSingleStory';

export default function ManageStories() {
    const dispatch = useDispatch<AppDispatch>();
    const { currentUser } = useSelector((state: RootState) => state.user);
    const { items: stories, status, error } = useSelector((state: RootState) => state.stories);


    // Filter stories to show only user's stories
    const userStories = stories.filter(story => story.author_id === currentUser?.id);

    if (status === 'loading') {
        return <div>Loading stories...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='w-full'>
            {userStories.length === 0 ? (
                <p>No stories found</p>
            ) : (
                userStories.map((story) => (
                    <ManageSingleStory 
                        key={story.id}
                        id={story.id}
                        title={story.title}
                        content={story.content}
                        date={story.created_at}
                        // contributors={story.contributors?.map(c => c.username) || []}
                    />
                ))
            )}
        </div>
    );
}