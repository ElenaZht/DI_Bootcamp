"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeStoryFromDB = exports.editStoryOnDB = exports.createStory = exports.getStoryById = exports.getAllStories = void 0;
const db_1 = require("../db/db");
const getAllStories = async () => {
    try {
        // Fetch all records from the "stories" table
        const stories = await (0, db_1.db)('stories').select('*');
        return stories;
    }
    catch (error) {
        console.error('Error fetching stories:', error);
        throw error; // Re-throw the error to handle it in the calling function
    }
};
exports.getAllStories = getAllStories;
const getStoryById = async (story_id) => {
    try {
        const story = await (0, db_1.db)('stories')
            .select('*')
            .where({ id: story_id })
            .first();
        if (!story) {
            throw Error("Story not found.model2");
        }
        return story;
    }
    catch (error) {
        throw Error(`Failed fetch story: ${error}`);
    }
};
exports.getStoryById = getStoryById;
const createStory = async (title, content, user_id) => {
    try {
        const [newStory] = await (0, db_1.db)('stories')
            .insert({
            title: title,
            content: content,
            author_id: user_id,
        })
            .returning(['id', 'title', 'content', 'author_id']);
        return newStory;
    }
    catch (error) {
        console.error('Error creating story:', error);
        throw error;
    }
};
exports.createStory = createStory;
const editStoryOnDB = async (story_id, title, content) => {
    try {
        const updateData = {};
        if (title)
            updateData.title = title;
        if (content)
            updateData.content = content;
        if (Object.keys(updateData).length === 0) {
            throw Error("No data for update story.");
        }
        // Update the story
        const [updatedStory] = await (0, db_1.db)('stories')
            .where({ id: story_id })
            .update({
            ...updateData
        })
            .returning(['id', 'title', 'content', 'author_id']);
        if (!updatedStory) {
            throw Error("Story not found");
        }
    }
    catch (error) {
        console.error('Error updating story:', error);
        throw error;
    }
};
exports.editStoryOnDB = editStoryOnDB;
const removeStoryFromDB = async (id) => {
    try {
        // Start transaction
        return await db_1.db.transaction(async (trx) => {
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
    }
    catch (error) {
        console.error('Error deleting story:', error);
        throw error;
    }
};
exports.removeStoryFromDB = removeStoryFromDB;
