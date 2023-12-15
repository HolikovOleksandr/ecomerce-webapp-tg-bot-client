import "./App.css";
import { useEffect } from "react";
import { useTelegram } from "./hooks/usetelegram.js";

function App() {
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  });

  return (
    <div className="App">
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
