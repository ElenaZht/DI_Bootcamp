import {getStoryById} from './storyModel'
import { db } from '../db/db';


interface Contributor {
    id: string;
    story_id: string;
    user_id: string;
}

export const addContributorToTheStory = async (story_id: string, user_id: string): Promise<void> => {

    try {
        if (!story_id){
            throw Error('Story id required.')
        }
        if (!user_id){
            throw Error('User id required')
        }

        // Add new contributor
        await db('contributors').insert({
            story_id: story_id,
            user_id: user_id
        });
        
    } catch (error) {
        console.error('Error registering contributor:', error);
        throw error;
    }


}

export const getStoryContributorsList = async (story_id: string): Promise<Contributor[]> => {
    try {
        if (!story_id) {
            throw Error("Story id is required");
        }

        // Get story by id
        const story = await db('stories')
            .where({ id: story_id })
            .first();

        if (!story) {
            throw Error("Story not found model");
        }
        // Get all contributors for this story
        const contributors = await db('contributors')
            .select(
                'contributors.id',
                'contributors.story_id',
                'contributors.user_id',
                'users.username' // Select username from users table
            )
            .where('contributors.story_id', '=', story_id)
            .leftJoin('users', 'contributors.user_id', 'users.id');


        
        if (!contributors || contributors.length === 0) {
            return [];
        }

        return contributors;

    } catch (error) {
        console.error('Error fetching story contributors:', error);
        throw error;
    }
}

export const deleteContributorFromTheStory  = async (contributor_id: string): Promise<Contributor> => {
    try {
        if (!contributor_id) {
            throw Error("Contributor id is required");
        }

        // Delete contributor from contributors table
        const [deleted] = await db<Contributor>('contributors')
            .where({ id: contributor_id })
            .del()
            .returning(['id', 'story_id', 'user_id']);
        console.log("deleteContributorFromTheStory model", deleted)
        if (!deleted) {
            throw Error("Contributor not found");
        }
        return deleted
        
    } catch (error) {
        console.error('Error deleting contributor:', error);
        throw error;
    }
}