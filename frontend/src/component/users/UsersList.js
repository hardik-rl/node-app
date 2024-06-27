import React, { useEffect, useState } from "react";
import CommonTable from "../../shared/component/Table";
import { getAllUsers } from "./api";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router";

const UsersList = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

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
        <Button
          onClick={() => navigate("/add")}
          className="mb-4 ml-auto"
          variant="primary"
        >
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
