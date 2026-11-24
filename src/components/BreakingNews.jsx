function BreakingNews({breaking}){
    return(
         <section className='breaking-news'>
      <span>BREAKING NEWS</span>
           <p>
      {breaking.map((news)=>(
        <p>{news.today}</p>
      ))}
      </p>
      </section>
     
    ) 
}

export default BreakingNews;