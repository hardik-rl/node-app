import React, { useEffect, useState } from "react";
import CommonTable from "../../shared/component/Table";
import { getAllUsers } from "./api";
import Button from "react-bootstrap/esm/Button";

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
      <div className="text-end">
        <Button className="mb-4 ml-auto" variant="primary">
           Add User
        </Button>
      </div>
      <div className="overflow-x-auto">
        <CommonTable data={data} />
      </div>
    </>
  );
};

export default UsersList;
