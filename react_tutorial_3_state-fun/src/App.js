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
// <------------------------------>/                 React tutorial in Hindi #20 Pass Function as Props </===============->/

// import "./App.css";
// // import Login from "./components/Login";
// import User from "./components/User";
// import Student from "./components/Student";
// function App() {
//   function getData() {
//     alert("Hello from app component");
//   }

//   return (
//     <div className="App">
//       {/* <Login /> */}
//       <User data={getData} />
//       <Student data={getData} />
//     </div>
//   );
// }

// export default App;

// <------------------------------>/                 React tutorial in Hindi #22 Constructor | First life cycle method</===============->/

// import './App.css';
// import React from 'react'
// class App extends React.Component{
//   constructor()
//   {
//     super();
//     this.state={
//       name:"Nitish Kumar"
//     }
//     console.warn("constructor")
//   }
//   render()
//   {
//     console.warn("render")
//     return<div>
//       <h1>Hello World {this.state.name}</h1>
//     </div>
//   }
// }
// export default App;

// // <------------------------------>/                 React tutorial in Hindi #23 Render life cycle method
// // </===============->/

// import logo from "./logo.svg";
// import "./App.css";
// import React from "react";
// import User from "./components/User";
// function App() {
//   const [name, setName] = React.useState("Nitish");

//   return (
//     <div className="App">
//       <h1>Render Method in React</h1>
//       {/* <User name={name} /> */}
//       {/* <button onClick={() => setName("NiKU")}>Update Name</button> */}
//       <User />
//     </div>
//   );
// }

// export default App;

// // <------------------------------>/                 React tutorial in Hindi #24 componentDidMount life cycle method in ReactJs
// // </===============->/

// import logo from "./logo.svg";
// import "./App.css";
// import React from "react";
// class App extends React.Component {
//   constructor() {
//     super();
//     console.warn("constructor");
//     this.state = { name: "Nitish" };
//   }
//   componentDidMount() {
//     console.warn("componentDidMount");
//   }
//   render() {
//     console.warn("render");

//     return (
//       <div className="App">
//         <h1>Component Did Mount {this.state.name}</h1>
//         <button onClick={() => this.setState({ name: "NiKU" })}>Update</button>
//       </div>
//     );
//   }
// }

// export default App;
//

// <------------------------------>/                 React tutorial in Hindi #25 componentDidUpdate life cycle method in ReactJs
// </===============->/

// import logo from "./logo.svg";
// import "./App.css";
// import React from "react";
// class App extends React.Component {
//   constructor() {
//     super();
//     console.warn("constructor");
//     this.state = { count: 0 };
//   }
//   componentDidUpdate(preProps, preState, snapshot) {
//     console.warn("componentDidUpdate", preState);
//   }
//   render() {
//     console.warn("render");

//     return (
//       <div className="App">
//         <h1>Component Did Mount {this.state.count}</h1>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Update
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

// // <------------------------------>/                 React tutorial in Hindi #26 shouldComponentUpdate life cycle method
// // </===============->/
// import "./App.css";
// import React from "react";
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }

//   shouldComponentUpdate() {
//     console.warn("shouldComponentUpdate", this.state.count);
//     if (this.state.count < 5) {
//       return true;
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1> Should Component Update {this.state.count}</h1>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Update Counter
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

// <------------------------------>/                 React tutorial in Hindi #27 componentWillUnmount life cycle method
// </===============->/

// import "./App.css";
// import React from "react";
// import Student from "./components/Student";
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       show: true,
//     };
//   }
//   render() {

//     return (
//       <div className="App">
//         {this.state.show ? <Student /> : <h4>Component is removed</h4>}
//         <button onClick={() => this.setState({ show: false })}>
//           Toogle Student Component
//         </button>
//       </div>
//     );

//   }
// }

// export default App;

// // <------------------------------>/                 React tutorial in Hindi #28 Hooks in ReactJs
// </===============->/
// import "./App.css";
// import React, { useState } from "react";
// function App() {
//   const [data, setData] = useState("Nitish ")

//   return (
//     <div className="App">
//       <h1>Hooks in React {data}</h1>
//       <button onClick={() => setData("NiKU")}>
//       Update State
//       </button>
//     </div>

//   );
// }

// export default App;

// // // <------------------------------>/                 React tutorial in Hindi #29 useEffect Hook in ReactJs
// // </===============->/
// import "./App.css";
// import React, { useEffect, useState } from "react";
// function App() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {

//     console.warn("use effect");

//   });
//   return (
//     <div className="App">
//       <h1>useEffect in React {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Update Counter</button>
//     </div>
//   );
// }

// export default App;

// // <------------------------------>/                 React tutorial in Hindi #30 useEffect Hook part -2 in ReactJs
// </===============->/
// import "./App.css";
// import React, { useEffect, useState } from "react";
// function App() {
//   const [data, setData] = useState(10);
//   const [count, setCount] = useState(100);
//   useEffect(() => {
//     console.warn("use effect data called");
//   }, [data]);

//   useEffect(() => {
//     console.warn("use effect count called");

//     alert("count is called    " + count);
//   }, [count]);

//   return (
//     <div className="App">
//       <h1>Count : {count}</h1>
//       <h1>Data : {data}</h1>
//       <button onClick={() => setCount(count + 1)}>Update Counter</button>
//       <button onClick={() => setData(data + 1)}>Update Data</button>
//     </div>
//   );
// }

// export default App;

// // <------------------------------>/                 React tutorial in Hindi #31 style in ReactJs
// </===============->/

// import "./App.css";
// import style from "./custom.module.css";
// import React from "react";

// function App() {
//   const styleItem = { color: "red", backgroundColor: "black" };
//   return (
//     <div className="App">
//       <h1 className="primary">Style type 1 in React js</h1>
//       <h1 style={styleItem}>Style type 2 in React js</h1>
//       <h1 className={style.success}>Style type 3 in React js</h1>
//     </div>
//   );
// }

// export default App;


// // <------------------------------>/                 React tutorial in Hindi #33 Bootstrap in ReactJs
// </===============->/

// import './App.css';
// import React from 'react'
// import {Button,Badge,Card} from 'react-bootstrap'
// function App() {
//   return (
//     <div className="App">
//       <h1>Install Bootstrap</h1>
//       <h1>
//     Example heading <Badge variant="light">New</Badge>
//   </h1>

//   <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="holder.js/100px180" />
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
//   </Card.Body>
// </Card>
//     </div>
//   );
// }

// export default App;



// // <------------------------------>/                 React tutorial in Hindi #33 Bootstrap in ReactJs
// </===============->/

import './App.css';
import React from 'react'
import {Table} from 'react-bootstrap'
function App() {
  const users = [
    { name: 'Anil', email: 'anil@test.com', contact: '111' },
    { name: 'Burce', email: 'bruce@test.com', contact: '222' },
    { name: 'Peter', email: 'peter@test.com', contact: '111' },
    { name: 'Sam', email: 'sam@test.com', contact: '777' },
  ]
  return (
    <div className="App">
      <h1>List With Bootstrap Table</h1>
      <Table striped variant="dark" >
        <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Contacts</td>
        </tr>
        {
          users.map((item,i)=>
          item.contact==='111'?
          <tr key={i}>
          <td>{item.name}</td>
          <td>{item.email}</td>
        <td>{item.contact}</td>
        </tr>:null
          )
        }
        </tbody>
      </Table>
    </div>
  );
}

export default App;