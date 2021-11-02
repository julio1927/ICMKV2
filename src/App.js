import React from "react";
import "./App.css";
import Layout from "./hoc/layout/Layout";
import ReactAux from "./hoc/ReactAux/ReactAux";

function App() {
  return (
    <ReactAux>
      <Layout>
      <div className="App">
        <h1>ICMK Website V2</h1>
      </div>
      </Layout>
    </ReactAux>
  );
}

export default App;
