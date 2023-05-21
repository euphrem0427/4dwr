import { createRoot } from "react-dom/client";
import SearchFields from "./components/SearchFields";
import Anime from "./components/Anime";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AnimeInfo from "./AnimeInfo";
const App = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="container">
      <BrowserRouter>
        <Link style={{ textDecoration: "none" }} to="/">
          <h1 className="title">Liste des animés</h1>
        </Link>
        <Routes>
          <Route path="/infos/:title" element={<AnimeInfo />} />
          <Route
            path="/"
            element={
              <>
                <SearchFields
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                />
                <Anime searchValue={searchValue} />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
