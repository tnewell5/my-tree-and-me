import "./App.css";
import { EasybaseProvider } from "easybase-react";
import ebconfig from "./ebconfig";
import Graph2 from "./Components/Graph2";

function App() {
  return (
    <div className="App">
      <header className="App-header">My Tree and Me</header>
      <EasybaseProvider ebconfig={ebconfig}>
        <div className="container">
          <Graph2 />
        </div>
      </EasybaseProvider>
    </div>
  );
}

export default App;
