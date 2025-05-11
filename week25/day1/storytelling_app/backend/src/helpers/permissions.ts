import { Request, Response, NextFunction } from "express"
import { db } from '../db/db';
import {getStoryContributorsList} from '../models/contributorModel'

export interface Story {
    id: string;
    title: string;
    content: string;
    author_id: string;
}

export const isAuthor = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const user = req.user;
        if (!user) {
            res.status(401).json({ message: "Authentication required" });
            return;
        }

        // fetch story author id from db
        const id = req.params.id || req.body.story_id // story id
        
        const story = await db<Story>('stories')
        .where({ id })
        .first();
    
        if (!story) {
            res.status(404).json({ message: "Story not found permission" });
            return 
        }
        // check author id
        console.log("author", story.author_id, "user", user.id)
        if (story.author_id !== user.id) {
            res.status(403).json({ 
                message: "You are not author of this story" 
            });
            return 
        }
        next()
     
        
    } catch (error) {
        console.error('Error in isAuthor middleware:', error);
        res.status(500).json({ message: "Internal server error" });
    }

}

export const isContributor = async  (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const user = req.user;
        if (!user) {
            res.status(401).json({ message: "Authentication required" });
            return;
        }
        const storyId = req.params.id
        if (!storyId){
            res.status(403).json({message: "Story id is required"})
            return
        }

        const contributorsList = await getStoryContributorsList(storyId)
        if (contributorsList.length == 0){
            next()
        }

        const existingContributor = contributorsList.find(c => c.user_id == user.id)
        if (existingContributor){
            next()
        } else {
            res.status(403).json({message: "Access denied: user is not a contributor."})
            return
        }
        
        
    } catch (error) {
        console.error('Error in isColaborator middleware:', error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const isAuthorOrColaborator = async  (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const user = req.user;
        if (!user) {
            res.status(401).json({ message: "Authentication required." });
            return;
        }
        const {id: storyId} = req.params
        if (!storyId){
            res.status(400).json({message: "Story id is required."})
            return
        }

        const story = await db<Story>('stories')
        .where({ id: storyId })
        .first();

        if(!story){
            res.status(404).json({message: "Story not found."})
            return
        }
        
        // check for user an author
        console.log("author ", story.author_id, "try to edit ", user.id)
        if (story.author_id == user.id){
            next()
            return

        } else {
            // check if user a contributor
            const contributorsList = await getStoryContributorsList(storyId)
            if (!contributorsList || contributorsList.length == 0){
                res.status(403).json({message: "Access denied"})
                return
            }
            const existContributor = contributorsList.some(c => c.user_id == user.id)
            if (existContributor){
                next()
                return
            }

            res.status(403).json({message: "Access denied"})
            return
        }

        
    } catch (error) {
        console.error('Error in isAuthorOrColaborator middleware:', error);
        res.status(500).json({ message: "Internal server error" });
    }
}