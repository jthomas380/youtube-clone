import PropTypes from "prop-types";
import "./sidebar.css";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import music from "../../assets/music.png";
import sports from "../../assets/sports.png";
import tech from "../../assets/tech.png";
import blog from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

const Sidebar = ({ sidebar }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-link">
        <img src={home} alt="Home" />
        <p>Home</p>
      </div>
      <div className="side-link">
        <img src={game_icon} alt="Games" />
        <p>Games</p>
      </div>
      <div className="side-link">
        <img src={automobiles} alt="Automobiles" />
        <p>Automobiles</p>
      </div>
      <div className="side-link">
        <img src={music} alt="Music" />
        <p>Music</p>
      </div>
      <div className="side-link">
        <img src={sports} alt="Sports" />
        <p>Sports</p>
      </div>
      <div className="side-link">
        <img src={tech} alt="Tech" />
        <p>Technology</p>
      </div>
      <div className="side-link">
        <img src={blog} alt="Blog" />
        <p>Blog</p>
      </div>
      <div className="side-link">
        <img src={news} alt="News" />
        <p>News</p>
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={jack} alt="Jack" />
          <p>PewDiePie</p>
        </div>
        <div className="side-link">
          <img src={simon} alt="Simon" />
          <p>MrBeast</p>
        </div>
        <div className="side-link">
          <img src={tom} alt="Tom" />
          <p>Justin Bieber</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="Megan" />
          <p>5-Minute Crafts</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="Cameron" />
          <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  sidebar: PropTypes.bool.isRequired,
};

export default Sidebar;
