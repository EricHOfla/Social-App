import "./online.css";

export default function Online({user}) {
       return (
        <li className="rightbarFriend">
                   <div className="rightbarProfleImgContainer">
                       <img src={user.proflePicture} alt="" className="rightbarProfleImg" />
                <span className="rightbarOnline"></span>          
                   </div>
                   <span className="rightbarUsername">{user.username}</span>
               </li>
               

       );
}