import React from "react";
import UsersList from "./component/users/UsersList";
import Header from "./shared/component/Header";
function App() {
  return (
    <div>
      <Header />
      <main className="m-5">
        <UsersList />
      </main>
    </div>
  );
}

export default App;
