import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({markRead , readingTime}) => {

const [blogs , setBlogs] = useState([]);

useEffect(()=>{
    fetch('/public/blogs.json')
    .then(res =>res.json())
    .then(data =>setBlogs(data));
},[])



    return (
        <div>
            {
                blogs.map(blog =><Blog
                key={blog.id}
                blog={blog}
                markRead={markRead}
                readingTime={readingTime}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes ={
    markRead : PropTypes.func.isRequired,
    readingTime:PropTypes.func.isRequired,
}

export default Blogs;