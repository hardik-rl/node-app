import React, { useEffect, useState } from "react";
import CommonTable from "../Table";
import { getAllUsers } from "./api";

const UsersList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllUsers()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <div className="overflow-x-auto">
        <CommonTable data={data} />
      </div>
    </>
  );
};

export default UsersList;
