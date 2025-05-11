"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStory = exports.editStory = exports.addNewStory = exports.fetchStories = void 0;
const storyModel_1 = require("../models/storyModel");
const fetchStories = async (req, res) => {
    try {
        // Get stories from the database
        const stories = await (0, storyModel_1.getAllStories)();
        if (!stories || stories.length === 0) {
            res.status(404).json({ message: 'No stories found' });
            return;
        }
        res.status(200).json(stories);
    }
    catch (error) {
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            res.status(403).json({ message: 'Invalid or expired token.' });
            return;
        }
        console.error('Error fetching stories:', error);
        res.status(500).json({ message: 'Failed to fetch stories' });
    }
};
exports.fetchStories = fetchStories;
const addNewStory = async (req, res) => {
    try {
        // Check for title and content
        const { title, content } = req.body;
        const user = req.user;
        if (!user) {
            res.status(401).json({ message: 'Authentication required' });
            return;
        }
        if (!title || !content) {
            res.status(400).json({ message: 'All fields are required.' });
            return;
        }
        // Create story
        const newStory = await (0, storyModel_1.createStory)(title, content, user.id);
        res.status(201).json({ message: `Story ${newStory.title} created!` });
    }
    catch (error) {
        console.error('Error creating story:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
exports.addNewStory = addNewStory;
const editStory = async (req, res) => {
    try {
        //checks
        const { user } = req;
        if (!user) {
            res.status(401).json({ message: "User not authenticated." });
            return;
        }
        const { id } = req.params; // story id
        const { title, content } = req.body;
        if (!id) {
            res.status(400).json({ message: "Story id required." });
            return;
        }
        if (!title && !content) {
            res.status(400).json({ message: "New title or content required." });
            return;
        }
        //call update story on db
        const updatedStory = await (0, storyModel_1.editStoryOnDB)(id, title, content);
        res.status(200).json({
            message: "Story updated successfully",
            story: updatedStory
        });
    }
    catch (error) {
        console.error('Error editing story:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
exports.editStory = editStory;
const deleteStory = async (req, res) => {
    console.log("del story");
    try {
        const { id } = req.params; // story id
        if (!id) {
            res.status(400).json({ message: "Bad request." });
            return;
        }
        //delete story
        const deltedStoryTitle = await (0, storyModel_1.removeStoryFromDB)(id);
        if (!deltedStoryTitle) {
            res.status(200).json({ message: "Story deleted." });
            return;
        }
        res.status(200).json({ message: `Story ${deltedStoryTitle} deleted successfuly.` });
        return;
    }
    catch (error) {
        if (error.message === 'Story not found') {
            res.status(404).json({ message: 'Story not found controller' });
            return;
        }
        // if nod deleted - 500
        res.status(500).json({ message: "Internal server error, story not deleted" });
    }
};
exports.deleteStory = deleteStory;
