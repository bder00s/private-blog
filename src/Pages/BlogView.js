import React from "react";
import posts from '../data/posts.json';
import {Link} from "react-router-dom";



function BlogView() {

    return (
        <article>
            <h1>Blog overzichtspagina</h1>
            <h2>Aantal blogposts: {posts.length} </h2>
            <ol>
                {posts.map((blog) => {
                    return <li key={blog.id}><Link to={`/blogposts/${blog.id}`}>
                            {blog.title}
                        </Link>
                    </li>
                })}

            </ol>

        </article>
    )
}

export default BlogView