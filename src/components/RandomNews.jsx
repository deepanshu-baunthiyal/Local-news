function RandomNews({ random }) {
  return (
    <div className='random-news'>
      {random.map((today) => (
        <div key={today.id} className='random-card'>
          <img src={today.image} alt={today.title} />
          <span className='today-category'>{today.category}</span>
          <h4>{today.title}</h4>
          <p>{today.description}</p>
        </div>
      ))}
    </div>
  );
}

export default RandomNews;