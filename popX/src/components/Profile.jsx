import { FcCamera } from "react-icons/fc";
import marry from "../assets/marry.jpg";
import '../styles/Profile.css';

function Profile(){
    return <>
        <div className="profile-container">
            <div className="header"><p>Account settings</p></div>
            <div className="line"></div>
            <div className="profile-hero">
                <img src={marry} alt="marry" className="prof-pic"/>
                <div className="camera"><FcCamera size={34}/></div>
                <p className="name">Marry Doe <br/><br/> Marry@Gmail.com</p>
            </div>
            <div className="profile-desc">
                Lorem Ipsum Dolor Sit Amet. Consetetur sadipscing Elitr, Sed Diam Nonumy eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam erat, Sed Diam
            </div>
        </div>
    </>
}

export default Profile;