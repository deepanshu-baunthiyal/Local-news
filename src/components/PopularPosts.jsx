function PopularPosts({active, setactive, weeks, months, thistime}){
    return(
        <>
               <div className="posts">
        <a href="#" className={active === "weeks" ? "post active" : "post"}
         onClick={(e) => {
          e.preventDefault();
          setactive("weeks");
        }}>This Week</a>
        <a href="#" className={active === "months" ? "post active" : "post"}
          onClick={(e) => {
            e.preventDefault();
            setactive("months");
          }}>This Month</a>
        <a href="#" className={active === "thistime" ? "post active" : "post"}
          onClick={(e) => {
            e.preventDefault();
            setactive("thistime");
          }}>All Time</a>
           </div>
      <div className="post-content">
        {active ==="weeks" &&
          weeks.map((week) => (
            <div className="post-item" key={week.id}>
              <img src={week.image} alt={week.title} />
              <div className="popular-post-details">
                <h4>{week.title}</h4>
                <p>{week.category}</p>
              </div>
            </div>
          ))}
        {active ==="months" && 
          months.map((month)=>(
           <div className="post-item" key={month.id}>
              <img src={month.image} alt={month.title} />
              <div className="popular-post-details">
                <h4>{month.title}</h4>
                <p>{month.category}</p>
              </div>
            </div>
        ))}
        {active === "thistime" && 
        thistime.map((time)=>(
           <div className="post-item" key={time.id}>
              <img src={time.image} alt={time.title} />
              <div className="popular-post-details">
                <h4>{time.title}</h4>
                <p>{time.category}</p>
              </div>
            </div>
        ))}

      </div>
      </>
    )
}

export default PopularPosts;