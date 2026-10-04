import { Link } from "react-router-dom";
import "./feed.css";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";

const videos = [
  { thumbnail: thumbnail1, title: "Best channel to learn coding that help you to be a web developer", channel: "GreatStack", views: "15K views", posted: "2 days ago" },
  { thumbnail: thumbnail2, title: "How to build a YouTube clone with React", channel: "Code Academy", views: "120K views", posted: "1 week ago" },
  { thumbnail: thumbnail3, title: "Top 10 gaming moments of the year", channel: "PlayHub", views: "2.3M views", posted: "3 weeks ago" },
  { thumbnail: thumbnail4, title: "Learn JavaScript in one hour", channel: "Dev Simplified", views: "560K views", posted: "1 month ago" },
  { thumbnail: thumbnail5, title: "Relaxing music for studying and focus", channel: "Chill Beats", views: "890K views", posted: "2 months ago" },
  { thumbnail: thumbnail6, title: "Street food around the world", channel: "Travel Bites", views: "78K views", posted: "5 days ago" },
  { thumbnail: thumbnail7, title: "Full workout routine at home", channel: "FitLife", views: "340K views", posted: "4 months ago" },
  { thumbnail: thumbnail8, title: "Weekly tech news roundup", channel: "Tech Daily", views: "45K views", posted: "1 day ago" },
  { thumbnail: thumbnail1, title: "React hooks explained for beginners", channel: "Code Academy", views: "210K views", posted: "6 days ago" },
  { thumbnail: thumbnail2, title: "Build a portfolio website from scratch", channel: "GreatStack", views: "98K views", posted: "2 weeks ago" },
  { thumbnail: thumbnail3, title: "Epic gaming fails compilation", channel: "PlayHub", views: "1.1M views", posted: "1 month ago" },
  { thumbnail: thumbnail4, title: "CSS grid and flexbox crash course", channel: "Dev Simplified", views: "430K views", posted: "3 months ago" },
  { thumbnail: thumbnail5, title: "Lo-fi beats to relax and unwind", channel: "Chill Beats", views: "1.5M views", posted: "5 months ago" },
  { thumbnail: thumbnail6, title: "Hidden gems: travel guide to Japan", channel: "Travel Bites", views: "150K views", posted: "2 weeks ago" },
  { thumbnail: thumbnail7, title: "30 minute full body stretch", channel: "FitLife", views: "275K views", posted: "7 months ago" },
  { thumbnail: thumbnail8, title: "Gadgets worth buying this year", channel: "Tech Daily", views: "89K views", posted: "4 days ago" },
];

const Feed = () => {
  return (
    <div className="feed">
      {videos.map((video, index) => (
        <Link className="card" key={video.title} to={`/video/0/${index + 1}`}>
          <img src={video.thumbnail} alt={video.title} />
          <h2>{video.title}</h2>
          <h3>{video.channel}</h3>
          <p>
            {video.views} &bull; {video.posted}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
