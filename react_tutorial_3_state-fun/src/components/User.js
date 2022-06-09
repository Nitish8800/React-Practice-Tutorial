// function User({ data }) {
//   return (
//     <div>
//       <h1>User Component</h1>
//       <button onClick={data}>Call Function</button>
//     </div>
//   );
// }

// export default User;

// <------------------------------>/                 React tutorial in Hindi #23 Render life cycle method
// </===============->/

import React from "react";
class User extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "nitish@test.com",
    };
  }
  render() {
    // console.warn("Render method", this.props);
    console.warn("Render method", this.state.email);
    return (
      <div>
        <h1>User Component {this.props.name}</h1>
        <h1>User Component {this.state.email}</h1>
        <button onClick={() => this.setState({ email: "niku@gmail.com" })}>
          Update Email

        </button>

      </div>
    );
  }
}

export default User;
