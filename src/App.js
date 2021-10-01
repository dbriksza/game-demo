import "./App.css";
import MainChar from "./components/mainChar";
import Background from "./components/background";
import Hud from "./components/hud";
import Bird from "./components/birds";

function App() {
  return (
    <div className="App">
      <Background />
      <MainChar />
      <Hud />
      <Bird />
    </div>
  );
}

export default App;
