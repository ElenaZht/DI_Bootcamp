"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContributorFromTheStory = exports.getStoryContributorsList = exports.addContributorToTheStory = void 0;
const db_1 = require("../db/db");
const addContributorToTheStory = async (story_id, user_id) => {
    try {
        if (!story_id) {
            throw Error('Story id required.');
        }
        if (!user_id) {
            throw Error('User id required');
        }
        // Add new contributor
        await (0, db_1.db)('contributors').insert({
            story_id: story_id,
            user_id: user_id
        });
    }
    catch (error) {
        console.error('Error registering contributor:', error);
        throw error;
    }
};
exports.addContributorToTheStory = addContributorToTheStory;
const getStoryContributorsList = async (story_id) => {
    try {
        if (!story_id) {
            throw Error("Story id is required");
        }
        // Get story by id
        const story = await (0, db_1.db)('stories')
            .where({ id: story_id })
            .first();
        if (!story) {
            throw Error("Story not found model");
        }
        // Get all contributors for this story
        const contributors = await (0, db_1.db)('contributors')
            .select('*')
            .where('story_id', '=', story_id);
        if (!contributors || contributors.length === 0) {
            return [];
        }
        return contributors;
    }
    catch (error) {
        console.error('Error fetching story contributors:', error);
        throw error;
    }
};
exports.getStoryContributorsList = getStoryContributorsList;
const deleteContributorFromTheStory = async (contributor_id) => {
    try {
        if (!contributor_id) {
            throw Error("Contributor id is required");
        }
        // Delete contributor from contributors table
        const [deleted] = await (0, db_1.db)('contributors')
            .where({ id: contributor_id })
            .del()
            .returning(['id', 'story_id', 'user_id']);
        if (!deleted) {
            throw Error("Contributor not found");
        }
        return deleted;
    }
    catch (error) {
        console.error('Error deleting contributor:', error);
        throw error;
    }
};
exports.deleteContributorFromTheStory = deleteContributorFromTheStory;
