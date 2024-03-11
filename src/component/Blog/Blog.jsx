import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa6";

const Blog = ({blog , markRead , readingTime}) => {
    // console.log(blog)
    const {author , author_img , cover , posted_date, reading_time , title , hashtags} =blog;



    return (
        <div className="space-y-6 w-2/3 mb-10">
            <img src={cover} alt="" />
            <div className="flex justify-between items-center w-full">
                <div className="flex items-center">
                    <div>
                        <img className="w-24" src={author_img} alt="" />
                    </div>
                    <div className="ml-5">
                        <h2>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <p onClick={()=>readingTime(blog)} className='flex items-center'>{reading_time} min read <FaBookmark /> </p>
                </div>
            </div>
            <div>
                <h2 className="w-11/12 text-4xl text-black font-bold">{title}</h2>
            </div>
            <p>
                {
                 hashtags.map((hash,idx) =><span
                 className="mr-5"
                 key={idx}
                 ><a href="#">#{hash}</a></span>)
                }
            </p>

            <p onClick={()=>markRead(blog)} className="text-blue-400 font-bold underline"><a href="#">mark as read</a></p>
        </div>
    );
};

Blog.propTypes ={
    markRead : PropTypes.func.isRequired,
    blog : PropTypes.object.isRequired,
    readingTime:PropTypes.func.isRequired,
}

export default Blog;