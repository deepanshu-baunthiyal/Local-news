function OtherNews({othernews}){
    return(
    <div className='other-news'>
          {othernews.map((old)=>(
             <div className="post-item" key={old.id}>
              <img src={old.image} alt={old.title} />
              <div className="post-details">
                <h4>{old.title}</h4>
                <p>{old.category}</p>
              </div>
            </div>
          ))}
        
        </div>
        )
}

export default OtherNews;