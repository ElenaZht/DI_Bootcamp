import { db } from '../db/db';
import type { Story } from '../../../types/StoryTypes';


export const getAllStories = async (): Promise<Story[]> => {
    try {
        // Fetch all records from the "stories" table
        const stories = await db<Story>('stories').select('*');
        return stories;
        
    } catch (error) {
        console.error('Error fetching stories:', error);
        throw error; 
    }
};

export const getStoryById = async (story_id: string): Promise<Story> => {
    try {
        const story = await db<Story>('stories')
        .select('*')
        .where({id: story_id})
        .first()

        if (!story){
            throw Error("Story not found.model2")
        }
        return story
        
    } catch (error) {
        throw Error(`Failed fetch story: ${error}`)
    }
}

export const createStory = async (title: string, content: string, user_id: string): Promise<Story> => {
    try {
        const [newStory] = await db<Story>('stories')
            .insert({
                title: title,
                content: content,
                author_id: user_id,
            })
            .returning(['id', 'title', 'content', 'author_id', 'created_at']);
        return newStory;

    } catch (error) {
        console.error('Error creating story:', error);
        throw error;
    }
};

export const editStoryOnDB = async (story_id: string, title?: string, content?: string): Promise<void> => {
    try {
        const updateData: Partial<Story> = {};
        if (title) updateData.title = title;
        if (content) updateData.content = content;

        if (Object.keys(updateData).length === 0) {
            throw Error("No data for update story.");
        }

        // Update the story
        const [updatedStory] = await db<Story>('stories')
            .where({ id: story_id })
            .update({
                ...updateData
            })
            .returning(['id', 'title', 'content', 'author_id']);

        if (!updatedStory) {
            throw Error("Story not found");
        }

        
    } catch (error) {
        console.error('Error updating story:', error);
        throw error;
    }
    
}

export const removeStoryFromDB = async (id: string): Promise<string> => {
    try {
        // Start transaction
        return await db.transaction(async trx => {
            // Delete contributors first
            await trx('contributors')
                .where({ story_id: id })
                .delete();

            // Then delete the story
            const [deletedStory] = await trx('stories')
                .where({ id })
                .delete()
                .returning(['title']);

            if (!deletedStory) {
                throw new Error('Story not found');
            }

            return deletedStory.title;
        });
        // Transaction automatically commits if successful
        // or rolls back if there's an error
        
    } catch (error) {
        console.error('Error deleting story:', error);
        throw error;
    }
}