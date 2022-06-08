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
      email: "niku@test.com",
    };
  }
  render() {
    // console.warn("Render method", this.state.email);
    console.warn("Render method", this.props);
    return (
      <div>
        <h1>User Component </h1>
        {/* <button onClick={() => this.setState({ email: "niku@test.com" })}>
          Update Email
        </button> */}
      </div>
    );
  }
}

export default User;
