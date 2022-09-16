import React from "react";
import posts from '../data/posts.json';
import {Link} from "react-router-dom";


function BlogView() {

    return (
        <div className="blog-view">
            <h1>Blog overzichtspagina</h1>
            <h2>Aantal blogposts: {posts.length} </h2>
            <ol>
                {posts.map((blogs) => {
                    return <li>
                        <Link to={ `/blogposts/${blogs.id}`}

                            >


                            {blogs.title}</Link>
                    </li>
                })}

            </ol>

        </div>
    )
}

export default BlogView