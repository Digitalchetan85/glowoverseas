import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button, Modal, Row, Col, Image, InputGroup } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BrochureDownload = (props) => {
  const [formStatus, setformStatus] = useState("");
  const navigate = useNavigate();
  const [Download, setDownload] = useState(false);

  const initialValues = {
    stdname: "",
    parentname: "",
    email: "",
    phone: "",
    city: "",
    neetscore: "",
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    stdname: Yup.string().required("Required"),
    parentname: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    neetscore: Yup.string()
      .required("Required")
      .min(2, "NEET Score Minimum 2 Digits")
      .max(3, "NEET Score Minimum 3 Digits"),
    email: Yup.string().required("Required").email("Invalid email format"),
    phone: Yup.string()
      .required("Required")
      .matches(phoneRegExp, "Phone No is not valid")
      .min(10, "Phone No Minimum 10 Digits")
      .max(10, "Phone No Minimum 10 Digits"),
  });

  const onSubmit = (values) => {
    axios
      .get(
        "free-councelling.php?sendto=" +
          values.email +
          "&stdname=" +
          values.stdname +
          "&parentname=" +
          values.parentname +
          "&email=" +
          values.email +
          "&phone=" +
          values.phone +
          "&city=" +
          values.city +
          "&neetscore=" +
          values.neetscore
      )
      .then(function (response) {
        // console.log(response);
        setformStatus(response.data);
        setDownload(true);
      })
      .catch(function (error) {
        console.log(error);
        setformStatus(error.data);
      });
  };
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose} centered id="cre">
        <Modal.Header closeButton className="border-0 bg-info">
          <Modal.Title className="text-white text-titlecase border-0 ms-auto">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6 className="py-1 text-center">{props.message}</h6>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="px-3 py-1 rounded">
              <Row className="mb-2">
                <Col md={12}>
                  <div className="mb-2">
                    <InputGroup className="mb-3">
                      <Field
                        className="form-control"
                        type="text"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        id="stdname"
                        name="stdname"
                        placeholder="Student Name"
                      />
                    </InputGroup>
                  </div>
                </Col>
                <small className="text-danger">
                  <ErrorMessage name="stdname" />
                </small>
              </Row>
              <Row className="mb-2">
                <Col md={12}>
                  <div className="mb-2">
                    <InputGroup className="mb-3">
                      <Field
                        className="form-control"
                        type="text"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        id="parentname"
                        name="parentname"
                        placeholder="Parent Name"
                      />
                    </InputGroup>
                  </div>
                </Col>
                <small className="text-danger">
                  <ErrorMessage name="parentname" />
                </small>
              </Row>
              <Row className="mb-2">
                <Col md={12}>
                  <div className="mb-2">
                    <InputGroup className="mb-3">
                      <Field
                        className="form-control"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                      />
                    </InputGroup>
                  </div>
                </Col>
                <small className="text-danger">
                  <ErrorMessage name="email" />
                </small>
              </Row>
              <Row className="mb-2">
                <Col md={12}>
                  <div className="mb-2">
                    <InputGroup className="mb-3">
                      <Field
                        className="form-control"
                        type="tel"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        id="phone"
                        name="phone"
                        placeholder="Phone"
                      />
                    </InputGroup>
                  </div>
                </Col>
                <small className="text-danger">
                  <ErrorMessage name="phone" />
                </small>
              </Row>
              <Row className="mb-2">
                <Col md={6}>
                  <div className="mb-2">
                    <InputGroup className="mb-3">
                      <Field
                        className="form-control"
                        type="text"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        id="city"
                        name="city"
                        placeholder="City"
                      />
                    </InputGroup>
                  </div>

                  <small className="text-danger">
                    <ErrorMessage name="city" />
                  </small>
                </Col>
                <Col md={6}>
                  <div className="mb-2">
                    <InputGroup className="mb-3">
                      <Field
                        className="form-control"
                        type="tel"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        id="neetscore"
                        name="neetscore"
                        placeholder="NEET Score"
                      />
                    </InputGroup>
                  </div>
                  <small className="text-danger">
                    <ErrorMessage name="neetscore" />
                  </small>
                </Col>
              </Row>
              <Row className="">
                <Col md={12}>
                  {formStatus ? (
                    <div className="alert alert-success p-3 text-center">
                      {formStatus}
                    </div>
                  ) : null}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={12}>
                  <div className="">
                    {Download ? <a
                      className="btn btn-info text-white fw-bold form-control"
                      href="https://glowoverseas.com/brochure.pdf" target="_blank"
                    >
                      Download
                    </a> : <Button
                      className="btn btn-info text-white fw-bold form-control"
                      type="submit"
                    >
                      Submit
                    </Button>}
                  </div>
                </Col>
              </Row>
            </Form>
          </Formik>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BrochureDownload;
