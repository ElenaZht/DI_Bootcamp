import type {User} from './UserTypes'
import type {Story} from './StoryTypes'


export interface Contributor {
    id: string;
    story_id: string;
    user_id: string;
    user?: User;
    story?: Story;
}