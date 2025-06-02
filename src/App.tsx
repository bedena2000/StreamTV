import { Routes, Route } from "react-router-dom";


import Home from "@/pages/Home";
import Movies from "@/pages/Movies";
import Tvshows from "@/pages/Tvshows";
import Catalogue from "@/pages/Catalogue";
import ErrorPage from "@/pages/ErrorPage";
import Header from "@/components/Header";



function App() {
  
  

  return (
    <div>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<Tvshows />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
