export interface User {
    id: string;
    username: string;
    email: string;
    password_hash: string;
    stories?: Story[];
    contributedStories?: Story[];
}

export interface UserState {
    currentUser: User | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    isAuthenticated: boolean;
    stories: Story[],
    contributedStories: Story[]
}
export interface Story {
    id: string;
    title: string;
    content: string;
    author_id: string;
    author: User;
    contributors?: User[];
}
export interface StoriesState {
    items: Story[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    selectedStory: Story | null;
}

export interface Contributor {
    id: string;
    story_id: string;
    user_id: string;
    user?: User;
    story?: Story;
}