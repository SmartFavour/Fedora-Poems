import PoemCard from "./components/PoemCard.js";
import SearchBar from "./components/SearchBar.js";

function Home() {
  return (
    <div className="Home">
      <SearchBar />
      <PoemCard title="Girls meet boys" content="This is a test module." />
      <PoemCard
        title="Twilight"
        content="As a dream far to reach, stars shine in the morning."
      />
    </div>
  );
}

export default Home;
