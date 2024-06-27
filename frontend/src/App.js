import React from "react";
import UsersList from "./component/users/UsersList";
import Header from "./shared/component/Header";
import { Route, Routes } from "react-router";
import Add from "./component/users/Add";
function App() {
  return (
    <div>
      <Header />
      <main className="m-5">
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
