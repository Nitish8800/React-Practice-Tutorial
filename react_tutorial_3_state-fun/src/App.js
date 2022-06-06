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

// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: 0,
//     };
//   }
//   apple() {
//     this.setState({ data: this.state.data + 1 });
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>{this.state.data}</h1>
//         <button onClick={() => this.apple()}>Update Data</button>
//       </div>
//     );
//   }
// }

// export default App;

// // <------------------------------>/                       Props with Functional Component      </===============->/

// import React, { useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import Student from "./components/Student";
// function App() {
//   const [name, setName] = useState("Nitish Kumar");
//   function apple() {
//     alert("hello");
//   }
//   return (
//     <div className="App">
//       <h1>Props in React :)</h1>
//       <Student name={name} />
//       <button
//         onClick={() => {
//           setName("Niku");
//         }}
//       >
//         Update Name
//       </button>
//     </div>
//   );
// }

// export default App;

// // // <------------------------------>/                       Props with Class Component      </===============->/

// import logo from "./logo.svg";
// import "./App.css";
// import Student from "./components/Student";
// import React from "react";
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Nitish kumar",
//     };
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>Props !</h1>
//         <Student name={this.state.name} email="nk@test.com"></Student>
//         <button onClick={() => this.setState({ name: "Niku" })}>
//           Update Name
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

// // <------------------------------>/                      Get Input box value    </===============->/

import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
function App() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  function getData(val) {
    console.warn(val.target.value);
    setData(val.target.value);
    setPrint(false);
  }
  return (
    <div className="App">
      {print ? <h1> {data}</h1> : null}
      <input type="text" onChange={getData} />
      <button onClick={() => setPrint(true)}>Print Data</button>
    </div>
  );
}

export default App;
