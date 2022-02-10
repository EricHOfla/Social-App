import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import {Posts} from "../../Data";

export default function Feed() {
    return (
    <div className="feed">
        <div className="feedwrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p}  />    
        ))}
        
        
        </div>
    </div>
    )
}
