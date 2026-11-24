import { useState } from 'react';
import NewsCard from "./components/NewsCard";
import RandomNews from './components/RandomNews';
import PopularPosts from './components/PopularPosts';
import RecommendedNews from './components/RecommendedNews';
import OtherNews from './components/OtherNews';
import FirstNews from './components/FirstNews';
import SecondNews from './components/SecondNews';
import BreakingNews from './components/BreakingNews';


    function Home({search,setSearch,firstnews,secondnews,random,news,weeks,months,thistime,recommend,othernews}){
      const [active,setactive]=useState("weeks");
      const [showWeek,setshowWeek]=useState(false);
      const [showMonth,setshowMonth]=useState(false);
      const [showTime,setshowTime]=useState(false);
      const [category,setCategory]=useState("All");
      const [visibleNews, setVisibleNews] = useState(6);

      const breaking=[
        {today:"स्थानीय प्रशासन ने नई विकास परियोजनाओं की घोषणा की है।"},
        // {today: "Local authorities announce new development projects."},
        // {today: "Schools introduce new programs to improve student education."},
        // {today: "City residents participate in a cleanliness awareness campaign."},
        // {today: "Government announces new job opportunities for young people."},
        // {today: "Local cricket team celebrates victory in the district tournament."},
        // {today: "Hospital launches free health checkup services for residents."},
        // {today: "Students showcase innovative projects at the annual science exhibition."},
        // {today: "New public transportation services aim to reduce traffic congestion."},
        // {today: "Local athletes prepare for upcoming state-level sports competitions."},
        // {today: "City council announces plans to improve parks and public facilities."}
         ];
    function HandleLoadMore(){
        setVisibleNews(visibleNews +5)
    }
    return(
      <div className='core'>
        <div className='layer-container'>
        <FirstNews firstnews={firstnews}/>

        <SecondNews secondnews={secondnews}/>
      </div>
      <div className='main'>
       <BreakingNews breaking={breaking}/>
       
      <div className='category-filter'>
        <button className='next'>&lt;</button>
        <button className='previous'>&gt;</button>
    </div>
    </div>
    {/* ||item.category.toLowerCase().includes(search.toLowerCase()) */}

    <section className="news-container">
      {/* Left side: news cards */}
      <div className='news-cards'>
        <span className='latest-posts'><button>LATEST POSTS</button> <a href='#' className='view-all'>View all posts &#62;</a></span>
       {news.filter((item)=>(category==="All" || item.category === category)&&(search==="" || item.category.toLowerCase().includes(search.toLowerCase()) )).slice(0,visibleNews).map((item)=>(
      <NewsCard key={item.id} item={item} />
       ))
       }
        {visibleNews < news.length?
        <button className='handleloadmore' onClick={HandleLoadMore}>Load More</button>: ""
        }
       </div>
      {/* Right side:other things */}
       <div className="news-sidebar"> 
       <span className="container"><a href='' className='container-content'>RANDOM NEWS</a></span>
        <div className='random-news'>
        <RandomNews random={random}/>
        </div>
       <span className="container"><a href='' className='container-content'>FOLLOW US</a></span>
       <button className='facebook' onClick={() => window.open("https://www.facebook.com")}>Facebook</button>
       <span className="container"><a href='' className='container-content'>POPULAR POSTS </a></span>
      <PopularPosts  active={active} setactive={setactive} weeks={weeks} months={months} thistime={thistime} />
       <span className="container"><a href='' className='container-content'>RECOMMENDED POSTS</a></span>
      <RecommendedNews recommend={recommend}/>
      <OtherNews othernews={othernews}/>
        
        <span className='container'><a href='' className='container-content'>TAGS</a></span>
        <div className='tags-cointainer'>
          <ul className='tags-list'>
            <li><a href='#'>countries</a></li>
            <li><a href='#'>himanchalnews</a></li>
            <li><a href='#'>dharamshala</a></li>
            <li><a href='#'>participate</a></li>
            <li><a href='#'>himachals</a></li>
            <li><a href='#'>scientists</a></li>
            <li><a href='#'>himanchals</a></li>
            <li><a href='#'>singer</a></li>
            <li><a href='#'>G-20 conference</a></li>
            <li><a href='#'>Reality show</a></li>
            <li><a href='#'>arvind rajput</a></li>
            <li><a href='#'>suro ka eklavya</a></li>

          </ul>
        </div>

        <span className='container'><a href=''className='container-content'>VOTING POLL</a></span>
        <div className='voting-content'></div>
       </div>
    </section>
    </div>
    )
    }

    export default Home;