import "./App.css";
import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram.js";
import Header from "./componenets/Header/Header.jsx";
import { Route, Routes } from "react-router-dom";
import ProductList from "./componenets/ProductList/ProductList.jsx";
import Form from "./componenets/Form/Form.jsx";

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={"form"} element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
