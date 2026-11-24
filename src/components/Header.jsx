import { NavLink } from "react-router-dom";
import LocalNews from "./LocalNews";

    function Header({search,setSearch,localNews}){
    return(
      <header>
        <div className='logo-container'>
        <img src="/Janvani News Microphone Logo.png" alt="Janvani News Logo" className="logo"/>        </div>
         <nav className='main-nav'>        
        <NavLink to="/">Home</NavLink>
        <div className='nav-dropdown'>
        <NavLink to="/local-news">राज्य <span className='arrow'>▼</span></NavLink>
        <div className='dropdown-content'>
            <LocalNews localNews={localNews}/>
        </div>
        </div>

        <div className='nav-dropdown'>
        <NavLink to="/politics">राजनीति <span className='arrow'>▼</span></NavLink>
        <div className='dropdown-content'>
            <LocalNews localNews={localNews}/>
        </div></div>

        <div className='nav-dropdown'>
        <NavLink to="/literature">साहित्य <span className='arrow'>▼</span></NavLink>
        <div className='dropdown-content'>
            <LocalNews localNews={localNews}/>
        </div></div>

        <div className='nav-dropdown'>
        <NavLink to="/jobs">रोजगार <span className='arrow'>▼</span></NavLink>
        <div className='dropdown-content'>
            <LocalNews localNews={localNews}/>
        </div></div>

        <div className='nav-dropdown'>
        <NavLink to="/sports">खेल <span className='arrow'>▼</span></NavLink>
        <div className='dropdown-content'>
            <LocalNews localNews={localNews}/>
       </div></div>

       <div className='nav-dropdown'>
        <NavLink to="/health">स्वास्थ्य <span className='arrow'>▼</span></NavLink>
        <div className='dropdown-content'>
            <LocalNews localNews={localNews}/>
        </div></div>

        <div className='nav-dropdown'>
        <NavLink to="education">शिक्षा <span className='arrow'>▼</span></NavLink>
        <div className='dropdown-content'>
            <LocalNews localNews={localNews}/>
        </div></div>

        <div className='nav-dropdown'>
        <NavLink to="/entertainment">मनोरंजन <span className='arrow'>▼</span></NavLink>
        <div className='dropdown-content'>
            <LocalNews localNews={localNews}/>
        </div></div>

        <div className='nav-dropdown'>
        <NavLink to="/crime">अपराध <span className='arrow'>▼</span></NavLink>
        <div className='dropdown-content'>
            <LocalNews localNews={localNews}/>
        </div></div>
        
        <input type="text" className="searchbar" placeholder='Search News Category' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        
      </nav>
      </header>
    )
  }


export default Header;