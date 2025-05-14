import { Request, Response } from 'express';
import {addContributorToTheStory, getStoryContributorsList, deleteContributorFromTheStory} from '../models/contributorModel'


export const addContributor = async (req: Request, res: Response): Promise<void> => {

    try {
        const user = req.user;
        const { story_id, user_id } = req.body;

        // Check authentication
        if (!user) {
            res.status(401).json({ message: 'Authentication required' });
            return;
        }

        // Validate story_id
        if (!story_id) {
            res.status(400).json({ message: 'Story id is required' });
            return;
        }
        if (!user_id) {
            res.status(400).json({ message: 'User id is required' });
            return;
        }

        // check for contributor in story
        const contributorsList = await getStoryContributorsList(story_id)
        //if in - return 
        const existingContributor = contributorsList.some((c) => c.user_id == user_id)
        if (existingContributor){
            res.status(409).json({message: "User already a contributor."})
            return 
        }

        // Register contributor in Contributors table
        await addContributorToTheStory(story_id, user_id);

        res.status(201).json({ 
            message: 'Successfully added as contributor' 
        });

    } catch (error) {
        console.error('Error adding contributor:', error);
        res.status(500).json({ 
            message: 'Failed to add contributor' 
        });
    }
}

export const getAllStoryContributor = async (req: Request, res: Response): Promise<void> => {
    try {
        const {story_id} = req.params
        if (!story_id){
            res.status(403).json({message: "Story id required"})
            return
        }

        const storyContributors = await getStoryContributorsList(story_id)
        if (!storyContributors || storyContributors.length == 0){
            res.status(200).json({contributors: []})
            return
        }

        res.status(200).json({contributors: storyContributors})
        
    } catch (error) {
        res.status(500).json({message: `Internal server error: ${error}`})
    }


}

export const deleteContributor = async (req: Request, res: Response): Promise<void> => {
    try {
        const contributor_id = req.params.id;

        if (!contributor_id) {
            res.status(400).json({ message: 'Contributor id is required' });
            return;
        }

        //delete contributor from db
        const deleted = await deleteContributorFromTheStory(contributor_id)
        console.log("deleteContributorFromTheStory controller", deleted)

        if (!deleted){
            res.status(404).json({message: "Contributor not found"})
            return
        }
        res.status(200).json({message: "Contributor deleted successfuly."})
        
    } catch (error) {
        console.error('Error deleting contributor:', error);
        res.status(500).json({ 
        message: 'Failed to delete contributor' 
        });
    }
}
