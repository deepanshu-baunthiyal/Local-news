function LocalNews({localNews}){
    return(
        <div className='local-news'>
          {localNews.map((news)=>(
              <div key={news.id} className='local-card'> 
              <img src={news.image} alt={news.title}/>
              <div className='local-container'>
              <h4>{news.title}</h4>
              <p>{news.category}</p>
              </div>
              </div>
              ))}
              </div>
            )

}

export default LocalNews;