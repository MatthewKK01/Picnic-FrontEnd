import "./App.css";
import Data from "./Data";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Data/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
