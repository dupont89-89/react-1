import Avatar from "./Avatar";
import Baner from "./Baner";
import Info_master from "./Info_master";
import Price from "./Price";
import Services from "./Services";
import Signup from "./Signup";

const Profile = () => {
    return (
        <div className="content">
            <div className="baner__master">
                <Baner />
            </div>
            <div className="info__master">
                <div className="info__master__description__avatar">
                    <Avatar />
                    <Info_master />
                </div>
                <Price />
                <Services />
                <Signup />
            </div>
        </div>
    );
}

export default Profile;