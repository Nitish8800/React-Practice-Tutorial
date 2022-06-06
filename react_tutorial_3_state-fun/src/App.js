// <------------------------------>/                       / // State with Functional components       </===============->/

// import { useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   const [data, setData] = useState(0);
//   function updateData() {
//     setData(data + 1);
//   }
//   console.warn("______");
//   return (
//     <div className="App">
//       <h1>{data}</h1>
//       <button onClick={updateData}>Update Data</button>
//     </div>
//   );
// }

// export default App;

// <------------------------------>/                       State with Class components         </===============->/

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      data: 1,
    };
  }
  apple() {
    this.setState({ data: this.state.data + 1 });
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.data}</h1>
        <button onClick={() => this.apple()}>Update Data</button>
      </div>
    );
  }
}

export default App;
