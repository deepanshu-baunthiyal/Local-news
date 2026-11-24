function RecommendedNews({recommend}){
    return(
         <div className='recommended'>
      {recommend.map((news) => (
        <div key={news.id} className="recommended-card">
        <img src={news.image} alt={news.title} />

        <div className="image-content">
          <p className="news-category">{news.category}</p>
          <h3 className="news-title">{news.title}</h3>
        </div>
        </div>
    ))}</div>
    )
}

export default RecommendedNews;