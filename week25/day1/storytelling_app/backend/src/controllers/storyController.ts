import { Request, Response } from 'express';
import { 
    createStory, 
    getAllStories, 
    editStoryOnDB, 
    removeStoryFromDB, 
} from '../models/storyModel';
import { getStoryCommentsById, addCommentToStory } from '../models/userModel';


export interface User {
    id: string;
    username: string;
    email: string;
    password_hash?: string;

}

interface Comment {
    id: string;
    story_id: string;
    user_id: string;
    username?: string;
    content: string;
    created_at: string;
  }
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                username: string;
            };
        }
    }
}

export const fetchStories = async (req: Request, res: Response): Promise<void> => {
    try {
        // Get stories from the database
        const stories = await getAllStories();

        if (!stories || stories.length === 0) {
            res.status(404).json({ message: 'No stories found' });
            return;
        }

        res.status(200).json(stories);
    } catch (error: any) {
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            res.status(403).json({ message: 'Invalid or expired token.' });
            return;
        }

        console.error('Error fetching stories:', error);
        res.status(500).json({ message: 'Failed to fetch stories' });
    }
};

export const addNewStory = async (req: Request, res: Response): Promise<void> => {
    try {
        // Check for title and content
        const { title, content } = req.body;
        const user = req.user
        if (!user) {
            res.status(401).json({ message: 'Authentication required' });
            return;
        }
    
        if (!title || !content) {
            res.status(400).json({ message: 'All fields are required.' });
            return;
        }

        // Create story
        const newStory = await createStory(title, content, user.id);
        res.status(201).json({ message: `Story ${newStory.title} created!` });
    } catch (error) {
        console.error('Error creating story:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const editStory =  async (req: Request, res: Response): Promise<void> => {
    try {
        //checks
        const {user} = req
        if (!user){
            res.status(401).json({message: "User not authenticated."})
            return
        }
        const {id} = req.params // story id
        const {title, content} = req.body
        if (!id){
            res.status(400).json({message: "Story id required."})
            return
        }
        if (!title && !content){
            res.status(400).json({message: "New title or content required."})
            return
        }
        //call update story on db
        const updatedStory = await editStoryOnDB(id, title, content);
        res.status(200).json({ 
            message: "Story updated successfully",
            story: updatedStory 
        });
        
    } catch (error) {
        console.error('Error editing story:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


export const deleteStory = async (req: Request, res: Response): Promise<void> => {
    console.log("del story")
    try {
        const {id} = req.params // story id
        if (!id){
            res.status(400).json({message: "Bad request."})
            return
        }


        //delete story
        const deltedStoryTitle = await removeStoryFromDB(id)
        if (!deltedStoryTitle){
            res.status(200).json({message: "Story deleted."})
            return
        }
        

        res.status(200).json({message: `Story ${deltedStoryTitle} deleted successfuly.`})
        return 

    } catch (error: any) {
        if (error.message === 'Story not found') {
            res.status(404).json({ message: 'Story not found controller' });
            return;
        }
        // if nod deleted - 500
        res.status(500).json({message: "Internal server error, story not deleted"})
    }

}

export const getStoryComments = async (req: Request, res: Response): Promise<void> => {
    try {
        const story_id = req.params.id
        if (!story_id) {
            res.status(400).json({ message: "Story ID is required." });
            return;
        }
        const comments = await getStoryCommentsById(story_id)
        res.status(200).json({comments})
        
    } catch (error: any) {
        console.error("Error in getStoryComments controller:", error); // Changed to console.error and more specific log
        res.status(500).json({ 
            message: error.message || "An unexpected error occurred while fetching comments." 
        });
    }
}

export const addComment = async (req: Request, res: Response): Promise<void> => {
    try {
        const story_id = req.params.id
        const {content} = req.body
        const user_id = req.user?.id;

        if (!story_id){
            res.status(400).json({ message: "Story ID is required." });
            return;
        }
        if (!user_id) {
            res.status(401).json({ message: "User not authenticated." });
            return;
        }
        await addCommentToStory(user_id, story_id, content)
        res.status(201).json({ message: "Comment added successfully" });


    } catch (error: any) {
        console.error("Failed to fetch comments:", error);
        res.status(500).json({ 
            message: error.message || "An unexpected error occurred while fetching comments."
        });
    }



}