
import BookMarkSingle from "../BookMarkSingle/BookMarkSingle";
import PropTypes from 'prop-types';

const BookMarks = ({markAsRead , readingMin}) => {

    


    return (
        <div className="w-1/3 bg-gray-200 px-2">
            <h3>Spand on read :{readingMin}</h3>
            <h2 className="text-2xl font-bold">Book mark bloged:{markAsRead.length}</h2>
            {
                markAsRead.map((markRead , idx)=><BookMarkSingle
                key={idx}
                markRead={markRead}
                ></BookMarkSingle>)
            }
        </div>
    );
};

BookMarks.propTypes = {
    markAsRead :PropTypes.array.isRequired,
    readingMin : PropTypes.number.isRequired,
}

export default BookMarks;