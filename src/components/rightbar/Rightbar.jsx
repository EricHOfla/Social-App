import "./rightbar.css";
import Online from "../online/Online";
import { Users } from "../../Data";

export default function Rightbar({profle}) {

    const HomeRightbar = () => {
        return(
          <>
           <div className="birthdayContainer">
              <img src="assets/img" alt="" className="birthdayImg" />
              <span className="birthdayText">
                  <b>Alice Nayituriki </b> and <b> 6 other friends </b> have a birthday today.
              </span>
          </div>
          <img  className="rightbarAd" src="assets/img/work-1.png" alt="Amamaza" />
           <h4 className="rightbarTitle">Online Friends</h4>
           <ul className="rightbarFriendList">
           {Users.map((u) => (
          <Online key={u.id} user={u}  />    
        ))}
           </ul>
          </>
 
        );
    };

    const ProfleRightbar = () => {
        return (
          <>
          <h4 className="rightbarTitle">User information</h4>
           <div className="rightbarInfo">
               <div className="rightbarInfoItem">
                   <span className="rightbarInfoKey">City:</span>
                   <span className="rightbarInfoValue">Kigali:</span>
               </div>
               <div className="rightbarInfoItem">
                   <span className="rightbarInfoKey">From:</span>
                   <span className="rightbarInfoValue">Ruhango:</span>
               </div>
               <div className="rightbarInfoItem">
                   <span className="rightbarInfoKey">Relationship:</span>
                   <span className="rightbarInfoValue">Single:</span>
               </div>
           </div>
          <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="assets/img/ " alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">jjjj</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/img/ " alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">jjjj</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/img/ " alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">jjjj</span>
                </div>
            </div>

          </>

            )
    }

    return (
    <div className="rightbar">
      <div className="rightWrapper">
         {profle ? <ProfleRightbar /> : <HomeRightbar />}
      </div>
     </div>
     )
}
