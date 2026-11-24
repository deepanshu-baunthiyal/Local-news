function NewsCard({ item }) {
  return (
    <div className='news-card'>
      <img src={item.image} alt={item.title}/>
      <p className='item-category'>{item.category}</p>

      <div className="post-details">
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <p>{item.date}</p>
      </div>
    </div>
  );
}

export default NewsCard;