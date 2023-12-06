import { useEffect,useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getData } from "../helpers/getData";
import SideBar from "../Components/SideBar";
import Loading from "../components/Loading";
import VideoCard from "../Components/VideoCard";


const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [results, setResults]=useState(null)
  console.log(searchParams);
  const query = searchParams.get("search_query");
  useEffect(() => {
    getData(`/search?query=${query}`).then((res) => setResults(res.data.data));
  }, [query]);

  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col gap-5 p-4">
        {!results ? (
          <Loading type={"video"} />
        ) : (
          results.map((item) => item.type === "video" && <VideoCard type={"deneme"} video={item }  />)
        )}
      </div>
    </div>
  );
};

export default SearchResults;
