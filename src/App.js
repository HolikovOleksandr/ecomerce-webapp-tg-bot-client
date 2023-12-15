import "./App.css";
import { useEffect } from "react";

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => tg.ready());
  const onClose = () => tg.clpse();

  return (
    <div className="App">
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
