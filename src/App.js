import "./App.css";
import { EasybaseProvider } from "easybase-react";
import ebconfig from "./ebconfig";
import Graph from "./Components/Graph";

function App() {
  return (
    <div className="App">
      <header className="App-header">My Tree and Me</header>
      <EasybaseProvider ebconfig={ebconfig}>
        <div className="container">
          <Graph />
        </div>
      </EasybaseProvider>
    </div>
  );
}

export default App;
