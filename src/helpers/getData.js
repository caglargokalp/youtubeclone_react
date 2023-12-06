import axios from "axios";

//api ye verdiğimiz end point içim
//istek atıp verileri döndüren fonk

const options = {
  params:{
    geo:'TR',
    lang:'tr',
  },
  headers: {

    'X-RapidAPI-Key': 'ad5496dd1amshde9691e7ead6281p1832cdjsn7da891f95c74',
    'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
   
  }
};

axios.defaults.baseURL = 'https://yt-api.p.rapidapi.com';

export const getData = async (path) => {
  console.log('slslslslsl')
  try {
    const response = await axios.get(path, options);
    console.log("cevap",response)
    return response;
  }
   catch (err) {
    console.log("Verileri çekerken hata oluştu");
  }
};
