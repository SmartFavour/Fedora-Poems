import PoemCard from "./components/PoemCard";
import SearchBar from "./components/SearchBar";
function Poems() {
  return (
    <div>
      <SearchBar />
      <div className="cards-container">
        <PoemCard title="My Sunshine" author="Mr. Amexin" content="Haha" />
        <PoemCard
          title="Twinkle Star"
          author="Banana the Star"
          content="Twinkle twinkle little star how I wonder what you are."
        />
      </div>
      <h3>Poems! Feature Still Under Development</h3>
    </div>
  );
}

export default Poems;
