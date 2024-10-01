import React from "react";
import { Header } from "./components/header/header";
import data from "./assets/data/data.js";
import { Card } from "./components/card/card.jsx";

function App() {
  return (
    <>
      <Header data={data} />
      <div style={{ padding: "20px" }}> {/* Joylashuv va marginlar uchun */}
        <Card data={data.products} />
      </div>
    </>
  );
}

export default App;
