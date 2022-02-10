import "./profle.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";


export default function Profle() {
  return (
    <>
      <Topbar />
      <div className="profle">
         <Sidebar />
         <div className="profleRight">
         <div className="profleRightTop">
           <div className="profleCover">  
             <img className="profleCoverImg" src="assets/img/work-5pro1.jpg" alt="" />
             <img className="profleUserImg" src="assets/img/work-5pro.jpg" alt="" /> 
         </div>
         <div className="profleInfo">
             <h4 className="profleInfoName">Kelly Destine Iteka</h4>
             <span className="profleInfoDesc">Hello My Friends !</span>
         </div>
         </div>
         <div className="profleRightBottom">
         
         <Feed />
         <Rightbar  profle/>
         </div>
         </div>
         </div>
    </>
 ) ;
}
