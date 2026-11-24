import { useState } from "react";
function FirstNews({firstnews}){
  const [currentIndex, setCurrentIndex] = useState(0);
    return(
        <div className='first-layer'>
        <div key={firstnews[currentIndex].id} className="top-news">
        <img src={firstnews[currentIndex].image} alt={firstnews[currentIndex].title} />
     
        <div className="news-image">
           <div className="move-container">
            <button className="previous-news" onClick={()=>setCurrentIndex(currentIndex -1)}>&lt;</button>
            <button className="next-news" onClick={()=>setCurrentIndex(currentIndex +1)}>&gt;</button>
        </div>
          <p className="main-news-category">{firstnews[currentIndex].category}</p>
          <h3 className="main-news-title">{firstnews[currentIndex].title}</h3>
        </div>
        </div>
      
       </div>
    )
 }

 export default FirstNews;
 
 

        //    {firstnews.map((news)=>(
        //   <div key={news.id} className="top-news">
        // <img src={news.image} alt={news.title} />
        {/* <button onClick={()=>setCurrentIndex(currentIndex +1)}>&gt;</button> */}
            
        {/* <div className="news-image">
          <p className="main-news-category">{news.category}</p>
          <h3 className="main-news-title">{news.title}</h3>
        </div>
           </div>
        ))} */}