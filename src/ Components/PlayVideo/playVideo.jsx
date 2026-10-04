import "./playVideo.css";
import video from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import userProfile from "../../assets/user_profile.jpg";

const comments = Array.from({ length: 3 }, (_, index) => index);

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={video} controls autoPlay muted />
      <h3>Best youtube channel to learn web development</h3>
      <div className="play-video-info">
        <p>1232 Views &bull; 2 days</p>
        <div>
          <span>
            <img src={like} alt="Like" /> 125
          </span>
          <span>
            <img src={dislike} alt="Dislike" /> 2
          </span>
          <span>
            <img src={share} alt="Share" />
          </span>
          <span>
            <img src={save} alt="Save" />
          </span>
        </div>
      </div>
      <div>
        <hr />
        <div className="publisher">
          <img src={jack} alt="Jack" />
          <div>
            <p>Greatstack</p>
            <span>1m Subscribers</span>
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="vid-discription">
        <p>Channel that makes learning Easy</p>
        <p>Subscribe to Greatstack to watch more tutorials on web design</p>
        <hr />
        <h4>130 Comments</h4>

        {comments.map((comment) => (
          <div className="comment" key={comment}>
            <img src={userProfile} alt="User profile" />
            <div>
              <h3>
                Jack Nicholson <span>1 day ago</span>
              </h3>
              <p>
                A global computer network providing a variety of information and
                a collection of interconnected networks using standardized
                communication protocols.
              </p>
              <div className="comment-action">
                <img src={like} alt="Like" />
                <span>244</span>
                <img src={dislike} alt="Dislike" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayVideo;
