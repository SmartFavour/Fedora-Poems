// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//Navigation.js
function Navigation() {
  return (
    <nav>
      <a href="/">Home</a>
      <a href="/poems">Poems</a>
      <a href="/about">About</a>
    </nav>
  );
}

//SearchBar.js
function SearchBar() {
  return <input type="text" placeholder="Search poems..." />;
}

//PoemCard.js
function PoemCard({ title, text }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navigation />
      <SearchBar />
      <div className="content">
        <PoemCard title="First Poem" text="This is the test of the poem" />
        <PoemCard title="Second Poem" text="This is the test of the poem" />
      </div>
    </div>
  );
}
export default App;
