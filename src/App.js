import React from "react";
import Header from "./components/header";
import Headline from "./components/headline";
import "./app.scss";

const tempArray = [
  {
    fName: "Daniel",
    lName: "Padrino",
    email: "testmail@gmail.com",
    age: 32,
    statusOnline: true
  }
];

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          desc="Click the button to render post!"
          tempArray={tempArray}
        />
      </section>
    </div>
  );
}

export default App;
