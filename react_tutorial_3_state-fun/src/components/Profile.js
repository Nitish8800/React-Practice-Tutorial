import { useState } from "react";
function Profile() {
  const [loggedIn, setLoggedIn] = useState(1);
  // loggedIn=3
  // 1,2,3
  return (
    <div>
      ?{" "}
      {loggedIn == 1 ? (
        <h1>Welcome User 1</h1>
      ) : loggedIn == 2 ? (
        <h1>Welcome User 2</h1>
      ) : (
        <h1>Welcome User 3</h1>
      )}
    </div>
  ); 
}

export default Profile;
