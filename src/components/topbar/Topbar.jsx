import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
// import { link } from 'react-router-dom'


export default function Topbar() {
    return (
        <div>
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">EricHOflaMedia</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input placeholder=".....................Search for Friend, Post or Video ..................................."
                     className="searchInput" />
                </div>
            </div>
         <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
         <div className="topbarIcons">
            <div className="topbarIconItem">
                <Person />
                <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
                <Chat />
                <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
                 <Notifications />
                <span className="topbarIconBadge">1</span>
            </div>
           </div>
           <div>
            <img src="/assets/img/user.jpg" alt="" className="topbarImg"/>
            </div>
        </div></div>
        
        </div>
     
    );
}