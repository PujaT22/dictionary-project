import "./App.css";
import Dictionary from "./Dictionary";
function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="footer">
          <a href="https://github.com/PujaT22/dictionary-project">
            Coded by Pooja
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
