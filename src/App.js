import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Hero from "./pages/hero/Hero";
import { SearchProvider } from "./context/SearchContext";
import { TeamProvider } from "./context/TeamContext";

function App() {
  return (
    <BrowserRouter>
      <TeamProvider>
        <SearchProvider>
          <Routes>
              <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/hero/:id" element={<Hero />} />
          </Routes>
        </SearchProvider>
      </TeamProvider>
    </BrowserRouter>
  );
}

export default App;
