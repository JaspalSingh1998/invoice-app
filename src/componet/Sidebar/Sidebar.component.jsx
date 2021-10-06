import Logo from "../../assets/logo.svg";
import Sun from "../../assets/icon-sun.svg";
import Avatar from "../../assets/image-avatar.jpg";
import "./Sidebar.styles.scss";

function Sidebar() {
  return (
    <div className="sidebar-wrapper">
      <div className="logo">
        <img src={Logo} alt="App Logo" />
      </div>
      <div className="user-details">
        <div className="icon-wrapper">
          <img src={Sun} alt="Toggle Dark Light Mode" className="toggle-icon" />
        </div>
        <div className="pic-wrapper">
          <img src={Avatar} alt="John Doe " className="profile-pic" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
