import { createSelector } from "@reduxjs/toolkit";

const selectAllTasks = (state) => state.tasksReducer.tasks;
const selectAllCategories = (state) => state.categoryReducer.categories;

export const selectCompletedTasks = createSelector(
    [selectAllTasks],
    (tasks) => tasks.filter(task => task.isCompleted === true)
)

export const selectTasksByCategory = (categoryID) => createSelector(
    [selectAllTasks],
    (tasks) => {
        return tasks.filter(task => task.categoryID === categoryID)  
    }
)

export const selectCategoryById = (categoryID) => createSelector(
    [selectAllCategories],
    (categories) => categories.find(category => category.categoryID === categoryID) || null
)

export const selectCategoryNameById = (categoryID) => createSelector(
    [selectAllCategories],
    (categories) => {
        const idx = categories.findIndex(c => c.categoryID === categoryID);
        if (idx !== -1) {
            return categories[idx].name;
        } else {
            return null;
        }
    }
);