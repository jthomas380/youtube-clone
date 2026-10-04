import PropTypes from "prop-types";
import "./Home.css";
import Sidebar from "../../ Components/Sidebar/sidebar";
import Feed from "../../ Components/feed/feed";

const Home = ({ sidebar }) => {
  return (
    <>
      <Sidebar sidebar={sidebar} />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed />
      </div>
    </>
  );
};

Home.propTypes = {
  sidebar: PropTypes.bool.isRequired,
};

export default Home;
