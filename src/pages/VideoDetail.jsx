import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import VideoInfo from "../Components/VideoInfo";
import { useEffect, useState } from "react";
import { getData } from "../helpers/getData";
import Loading from "../components/Loading";
import VideoCard from "../Components/VideoCard";

const VideoDetail = () => {
  const [related, setRelated] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setRelated(null);
    getData(`/related?id=${id}`).then((res) => setRelated(res.data.data));
  }, [id]);

  return (
    <div className=" min-h-screen flex max-lg:flex-col">
      <div className="flex-1">
        {/* react play kullan */}
        <ReactPlayer
          width={"100%"}
          controls
          url={`https://www.youtube.com/watch?v=${id}`}
        />
        <VideoInfo />
      </div>

      <div className=" max-md:w-full  lg:max-w-[400px] flex flex-col max-lg:my-5 px-3 gap-5">
        {!related ? (
          <Loading type={"video"} />
        ) : (
          related.map(
            (item) =>
              item.type === "video" && <VideoCard type="row" video={item} />
          )
        )}
      </div>
    </div>
  );
};

export default VideoDetail;
