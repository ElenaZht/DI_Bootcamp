export interface Story {
    id: string;
    title: string;
    content: string;
    author_id: string;
    created_at: string;
}

export type FilterType = 'all' | 'my';

export interface StoryFormData {
    title: string;
    content: string;
}
export interface Comment {
    id: string;
    story_id: string;
    user_id: string;
    username?: string;
    content: string;
    created_at: string;
}

export interface AddCommentPayload {
    story_id: string;
    content: string;
}

export interface NewStory {
    title: string;
    content: string;
}

export interface StoriesState {
    items: Story[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    selectedStory: Story | null;
}