"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthorOrColaborator = exports.isContributor = exports.isAuthor = void 0;
const db_1 = require("../db/db");
const contributorModel_1 = require("../models/contributorModel");
const isAuthor = async (req, res, next) => {
    try {
        const user = req.user;
        if (!user) {
            res.status(401).json({ message: "Authentication required" });
            return;
        }
        // fetch story author id from db
        const id = req.params.id || req.body.story_id; // story id
        const story = await (0, db_1.db)('stories')
            .where({ id })
            .first();
        if (!story) {
            res.status(404).json({ message: "Story not found permission" });
            return;
        }
        // check author id
        console.log("author", story.author_id, "user", user.id);
        if (story.author_id !== user.id) {
            res.status(403).json({
                message: "You are not author of this story"
            });
            return;
        }
        next();
    }
    catch (error) {
        console.error('Error in isAuthor middleware:', error);
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.isAuthor = isAuthor;
const isContributor = async (req, res, next) => {
    try {
        const user = req.user;
        if (!user) {
            res.status(401).json({ message: "Authentication required" });
            return;
        }
        const storyId = req.params.id;
        if (!storyId) {
            res.status(403).json({ message: "Story id is required" });
            return;
        }
        const contributorsList = await (0, contributorModel_1.getStoryContributorsList)(storyId);
        if (contributorsList.length == 0) {
            next();
        }
        const existingContributor = contributorsList.find(c => c.user_id == user.id);
        if (existingContributor) {
            next();
        }
        else {
            res.status(403).json({ message: "Access denied: user is not a contributor." });
            return;
        }
    }
    catch (error) {
        console.error('Error in isColaborator middleware:', error);
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.isContributor = isContributor;
const isAuthorOrColaborator = async (req, res, next) => {
    try {
        const user = req.user;
        if (!user) {
            res.status(401).json({ message: "Authentication required." });
            return;
        }
        const { id: storyId } = req.params;
        if (!storyId) {
            res.status(400).json({ message: "Story id is required." });
            return;
        }
        const story = await (0, db_1.db)('stories')
            .where({ id: storyId })
            .first();
        if (!story) {
            res.status(404).json({ message: "Story not found." });
            return;
        }
        // check for user an author
        console.log("author ", story.author_id, "try to edit ", user.id);
        if (story.author_id == user.id) {
            next();
            return;
        }
        else {
            // check if user a contributor
            const contributorsList = await (0, contributorModel_1.getStoryContributorsList)(storyId);
            if (!contributorsList || contributorsList.length == 0) {
                res.status(403).json({ message: "Access denied" });
                return;
            }
            const existContributor = contributorsList.some(c => c.user_id == user.id);
            if (existContributor) {
                next();
                return;
            }
            res.status(403).json({ message: "Access denied" });
            return;
        }
    }
    catch (error) {
        console.error('Error in isAuthorOrColaborator middleware:', error);
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.isAuthorOrColaborator = isAuthorOrColaborator;
