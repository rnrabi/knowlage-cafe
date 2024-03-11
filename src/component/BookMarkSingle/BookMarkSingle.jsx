import PropTypes from 'prop-types';

const BookMarkSingle = ({markRead}) => {
  console.log(markRead)
    return (
        <div className="bg-gray-300 mb-5 p-4 rounded-xl">
            <h2>{markRead.title}</h2>
        </div>
    );
};

BookMarkSingle.propTypes ={
    markRead : PropTypes.object.isRequired,
}


export default BookMarkSingle;