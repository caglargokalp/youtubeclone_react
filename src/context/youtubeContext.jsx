import { createContext, useEffect, useState } from "react";
import { categories } from "../constant";
import { getData } from "../helpers/getData";

export const YoutubeContext = createContext();

//context'de tutulan verileri uygulamay akatarır
export function YouTubeProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  //videoları tutar
  const [videos, setVideos] = useState(null);
  console.log(selectedCategory.type);

  useEffect(() => {
    //apiden videolar alınır

    console.log(selectedCategory.type);
    if (selectedCategory.type === 'home' || 
    selectedCategory.type === 'trending'
    
    ) {
      getData(`/${selectedCategory.type}`)
        .then((res) => setVideos(res.data.data ))
      }
        //tip kategoriyse
        if(selectedCategory.type === 'category'){
          getData(`/search?query=${selectedCategory.name}&type=video`)
          .then((res) => setVideos(res.data.data))
         }


     
   
  }, [selectedCategory]);

  return (
    <YoutubeContext.Provider
      value={{ selectedCategory, setSelectedCategory, videos }}
    >
      {children}
    </YoutubeContext.Provider>
  );
}
