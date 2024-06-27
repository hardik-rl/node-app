import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const CommonTable = ({ data }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
            <td>
              <div>
                <Button size="sm" variant="secondary">
                  Edit
                </Button>{" "}
                <Button size="sm" variant="danger">
                  Delete
                </Button>{" "}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CommonTable;
