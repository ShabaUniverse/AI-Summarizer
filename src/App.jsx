import "./App.css";
import Inputs from "./components/Inputs";
import Title from "./components/Title";
import Header from "./components/header";

function App() {
  return (
    <div className="App h-screen">
      <Header />
      <Title />
      <Inputs />
    </div>
  );
}

export default App;
