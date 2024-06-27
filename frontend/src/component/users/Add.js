import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/esm/Button";

const Add = () => {
  return (
    <Card className="p-4 w-75 mx-auto">
      <h3 className="mb-4 text-center">Add New User</h3>
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Form.Control placeholder="Email" />
          </Col>
          <Col>
            <Form.Select aria-label="Default select example">
              <option>Select gender</option>
              <option value="1">male</option>
              <option value="2">Female</option>
              <option value="3">Other</option>
            </Form.Select>
          </Col>
        </Row>
        <div className="mt-4 text-center">
          <Button>Save</Button>
        </div>
      </Form>
    </Card>
  );
};

export default Add;
