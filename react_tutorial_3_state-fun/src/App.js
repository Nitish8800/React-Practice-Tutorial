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

// import logo from "./logo.svg";
// import "./App.css";
// import React, { useState } from "react";
// function App() {
//   const [data, setData] = useState(null);
//   const [print, setPrint] = useState(false);

//   function getData(val) {
//     console.warn(val.target.value);
//     setData(val.target.value);
//     setPrint(false);
//   }
//   return (
//     <div className="App">
//       {/* <h1>{data}</h1> */}
//       {print ? <h1> {data}</h1> : null}
//       <input type="text" onChange={getData} />
//       <button onClick={() => setPrint(true)}>Print Data</button>

//     </div>
//   );
// }

// export default App;

// // <------------------------------>/                 #16 Hide , Show and Toggle in ReactJs   </===============->/
// import logo from "./logo.svg";
// import "./App.css";
// import React, { useState } from "react";
// function App() {
//   const [show, setShow] = useState(true);
//   return (
//     <div className="App">
//       {show ? <h1>Hello World !</h1> : null}
//       {/* <button onClick={()=>setShow(true)} >Show</button>
//      <button onClick={()=>setShow(false)} >Hide</button> */}
//       <button onClick={() => setShow(!show)}>Toggle</button>
//     </div>
//   );
// }

// export default App;

// <------------------------------>/                 #17 Handle Form | checkbox | input field | select  </===============->/

// import logo from "./logo.svg";
// import "./App.css";
// import { useState } from "react";
// function App() {
//   const [name, setName] = useState("");
//   const [tnc, setTnc] = useState(false);
//   const [interest, setInterest] = useState("");
//   function getFormData(e) {
//     console.warn(name, tnc, interest);
//     e.preventDefault();
//   }
//   return (
//     <div className="App">
//       <h1>Handle Form in React</h1>
//       <form onSubmit={getFormData}>
//         <input
//           type="text"
//           placeholder="enter name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />{" "}
//         <br />
//         <br />
//         <select onChange={(e) => setInterest(e.target.value)}>
//           <option>Select Options</option>
//           <option>Marvel</option>
//           <option>DC</option>
//         </select>{" "}
//         <br />
//         <br />
//         <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
//         <span>Accept Terms and conditions</span>
//         <br />
//         <br />
//         <button type="submit">Submit</button>
//         <button>Clear</button>
//       </form>
//     </div>
//   );
// }

// export default App;

// <------------------------------>/                 #18 Conditional rendering | If Condition  </===============->/

// import logo from "./logo.svg";
// import "./App.css";
// import Profile from "./components/Profile";
// function App() {
//   return (
//     <div className="App">
//       <Profile />
//     </div>
//   );
// }

// export default App;

// <------------------------------>/                 React tutorial in Hindi #19 Basic Form validation  </===============->/

import "./App.css";
import Login from ".//components/Login";
function App() {
  const data = true;
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;


