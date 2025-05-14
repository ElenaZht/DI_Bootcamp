import type {Story} from './StoryTypes'
export interface User {
    id: string;
    username: string;
    email: string;
    password_hash: string;
}
export interface UserState {
    currentUser: User | null;
    token: string | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    isAuthenticated: boolean;
    stories: Story[],
    contributedStories: Story[]
}
export interface PublicUser {
    id?: string;
    username: string;
    email: string;
}
// ------------------------------
export interface LoginForm {
    email: string;
    password: string;
}
export interface LoginError {
    message: string;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface LoginResponse {
    user: {
        id: string;
        email: string;
        username: string;
    };
    token: string;
}

// ------------------------------
export interface RefreshResponse {
    message: string;
    accessToken: string;
    user_id: string;
}

// ------------------------------
export interface SignUpForm {
    username: string;
    email: string;
    password: string;
}

export interface SignUpCredentials {
    username: string,
    email: string;
    password: string;
}
export interface SignUpResponse {
    user: {
        id: string;
        email: string;
        username: string;
    };
    token: string;
}