import React from "react";
import {useParams} from "react-router-dom";
import posts from '../data/posts.json';


function BlogPosts() {
    const {blogId} = useParams();
    const currentPost = posts.find((idFromBlog)=> {
        return idFromBlog.id === blogId

    });
    console.log(currentPost);
    return (
        <article>
        <h1>{currentPost.title}</h1>
        <h3>{currentPost.date}</h3>
            <p>{currentPost.content}</p>

        </article>

    );

}

export default BlogPosts