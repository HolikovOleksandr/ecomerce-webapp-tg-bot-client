import "./App.css";
import { useEffect } from "react";
import { useTelegram } from "./hooks/usetelegram.js";
import Header from "./componenets/Header/Header.jsx";

function App() {
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  });

  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
