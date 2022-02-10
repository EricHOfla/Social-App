import "./post.css";
import { CommentSharp, MoreVert} from "@material-ui/icons";
import {Users} from "../../Data";
import { useState } from "react";

export default function Post({ post }) {
    const [like,setLike] = useState(post.like)
    const [isLiked,setIsLiked] = useState(false)

    const likeHandler =()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
   
    return (
    <div className="post">
     <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className="postProfleImg" src={Users.filter((u) => u.id === post?.userId)[0].proflePicture} alt="" />
                  <span className="postUsername">{Users.filter((u) => u.id === post?.userId)[0].username}</span>
                  <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
                <MoreVert />
            </div>
            </div>  
        </div>
         <div className="postCenter"></div>
           <span className="postText">{post?.desc}</span>
             <img src={post.photo} alt="" className="postImg" />
         <div className="postBottom">
            <div className="postBottomLeft">
            
                <img className="likeIcon" src="assets/img/like.JPG" onClick={likeHandler} alt="" />
                <img className="likeIcon" src="assets/img/likee.png" onClick={likeHandler} alt="" />
                  <span className="postlikeCounter">{like} people like it</span>
            </div>
            <div className="postBottomRight">
            <CommentSharp />
                <span className="postCommentText">{post.comment} comments</span>
            </div>
            </div>
    </div>
    );
}