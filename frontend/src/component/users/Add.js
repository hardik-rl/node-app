import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/esm/Button";
import { addUser } from "./api";
import { useNavigate } from "react-router";

const Add = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSave = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await addUser(formData);

      if (response.status === 200) {
        navigate("/");
        console.log("Response:", response.data);
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      setError("An unexpected error occurred");
      console.error("Error adding user:", error);
    }
  };

  return (
    <Card className="p-4 w-75 mx-auto">
      <h3 className="mb-4 text-center">Add New User</h3>
      <Form method="post" onSubmit={onSave}>
        <Row>
          <Col>
            <Form.Control
              placeholder="First name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Form.Control
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              required
            />
          </Col>
          <Col>
            <Form.Select
              aria-label="Default select example"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Form.Select>
          </Col>
        </Row>
        <div className="mt-4 text-center">
          <Button type="submit">Save</Button>
        </div>
        {error && <div className="mt-3 text-center text-danger">{error}</div>}
      </Form>
    </Card>
  );
};

export default Add;
