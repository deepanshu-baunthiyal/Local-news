function FirstNews({firstnews}){
    return(
        <div className='first-layer'>
          {firstnews.map((news) => (
        <div key={news.id} className="top-news">
        <img src={news.image} alt={news.title} />

        <div className="news-image">
          <p className="main-news-category">{news.category}</p>
          <h3 className="main-news-title">{news.title}</h3>
        </div>
        </div>
    ))}
        </div>
    )
 }

 export default FirstNews;
 
 