import { db } from '../config/db.js'


export const getPostsFromDB = () => {
    return db.raw("select id, title, content from posts")
}

export const getPostByIdFromDB = (id) => {
    return db.raw("select id, title, content from posts where id = ?", [id]);
}

export const addPostToDB = (title, content) => {
    return db("posts").insert({ title, content }).returning("*")
}

export const updatePostInDB = (id, title, content) => {
    return db("posts")
        .where({ id })
        .update({ title, content })
        .returning("*");
}

export const deletePostFromDB = (id) => {
    return db("posts")
    .where({ id })
    .del()
    .returning(["id", "title", "content"])
}