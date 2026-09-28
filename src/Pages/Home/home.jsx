import "./Home.css";
import Sidebar from "../../ Components/Sidebar/sidebar";

const Home = ({sidebar}) => {
  return (
    <>
      <Sidebar sidebar={sidebar} />
    </>
  );
};

export default Home;
