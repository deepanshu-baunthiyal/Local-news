function SecondNews({secondnews}){
    return(
        <div className='second-layer'>
            {secondnews.map((news) => (
        <div key={news.id} className="another-news">
        <img src={news.image} alt={news.title} />

        <div className="another-images">
          <p className="another-news-category">{news.category}</p>
          <h3 className="another-news-title">{news.title}</h3>
        </div>
        </div>
    ))}
        </div>
    )
}

export default SecondNews;