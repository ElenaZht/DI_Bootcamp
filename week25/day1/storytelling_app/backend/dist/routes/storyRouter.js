"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const storyController_1 = require("../controllers/storyController");
const permissions_1 = require("../helpers/permissions");
const auth_1 = require("../helpers/auth");
const inputValidations_1 = require("../helpers/inputValidations");
const router = (0, express_1.Router)();
router.get('/', auth_1.authenticate, storyController_1.fetchStories);
router.post('/', auth_1.authenticate, inputValidations_1.validateText, storyController_1.addNewStory);
router.patch('/:id', auth_1.authenticate, permissions_1.isAuthorOrColaborator, storyController_1.editStory); // validate inputs
router.delete('/:id', auth_1.authenticate, permissions_1.isAuthor, storyController_1.deleteStory);
exports.default = router;
