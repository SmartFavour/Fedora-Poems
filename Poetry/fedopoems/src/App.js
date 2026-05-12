import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import LoginPage from "./LoginPage.js";
import NavigationBar from "./components/NavigationBar.js";
import "./App.css";
import About from "./About.js";
import Poems from "./Poems.js";

//TitleBar.js page
function TitleBar() {
  return <h1>Fedora Poems</h1>;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TitleBar />
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/poems" element={<Poems />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
