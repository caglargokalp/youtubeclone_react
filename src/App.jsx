import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";
import SearchResults from "./pages/SearchResults";
import VideoDetail from "./pages/VideoDetail";
import Header from "./Components/Header";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/watch/:id" element={<VideoDetail />} />
        <Route path="/results" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
