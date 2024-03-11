import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import BookMarks from './component/BookMaraks/BookMarks'
import Header from './component/Header/Header'

function App() {
  const [markAsRead , setMarkAsRead] = useState([]);
  const [readingMin , setReadingMin] = useState(0);

  const markRead = (blog) =>{
    const remaining = [...markAsRead , blog];
    setMarkAsRead(remaining);
    // console.log('maark as rea' , markAsRead);
  }

 const readingTime = (blog)=>{
  // console.log('reading time is ok', blog.reading_time)
  const newTime = blog.reading_time + readingMin;
  setReadingMin(newTime);
  const reamingMarkAsRead = markAsRead.filter((mark)=>mark.id !== blog.id);
  setMarkAsRead(reamingMarkAsRead);
 }



  return (
    <div className='w-11/12 mx-auto'>
      <Header></Header>
      <div className='flex justify-between'>
        <Blogs
        markRead={markRead}
        readingTime={readingTime}
        ></Blogs>
        <BookMarks
        markAsRead={markAsRead}
        readingMin={readingMin}
        ></BookMarks>
      </div>

    </div>
  )
}

export default App
