import { categories } from "../constant";
import { useContext } from "react";
import { YoutubeContext } from "../context/youtubeContext";

const SideBar = () => {
  //contexten sağlanan verilere erişme
  const { selectedCategory, setSelectedCategory } = useContext(YoutubeContext);
  return (
    <div className="flex flex-col px-2 md:px-4">
      {categories.map((i) => (
        <div onClick={() => setSelectedCategory(i)}
         key={i.name}>
          {/*    eğerki ekrana bastığımız kategori seçili ise arlkaplan ver */}
          <div
            style={{ background: selectedCategory.name === i.name && "#2d2d2d" }}
            className="flex  gap-3 items-center py-4 px-2 md:px-3 md:text-lg cursor-pointer rounded-md hover:bg-[#2d2d2d]"
          >
            <span className="max-sm:text-2xl"> {i.icon}</span>
            <span className="max-sm:hidden">{i.name} </span>{" "}
          </div>

          {i.divider && <hr />}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
