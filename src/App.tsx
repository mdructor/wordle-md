import Keyboard from "./components/Keyboard";
import WordleAppBar from "./components/WordleAppBar";
import WordleBoard from "./components/WordleBoard";
import { WordleProvider } from "./contexts/WordleContext";

function App() {
  return (
    <div className="App">
      <WordleProvider>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: "90vh",
          }}
        >
          <WordleAppBar />
          <WordleBoard />
          <Keyboard />
        </div>
      </WordleProvider>
    </div>
  );
}

export default App;
