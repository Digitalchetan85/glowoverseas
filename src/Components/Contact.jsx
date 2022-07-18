import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Helmet } from "react-helmet";
import * as Yup from "yup";
import axios from "axios";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const [formStatus, setformStatus] = useState("");

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
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
        "email.php?sendto=" +
          values.email +
          "&name=" +
          values.name +
          "&phone=" +
          values.phone +
          "&message=" +
          values.message
      )
      .then(function (response) {
        console.log(response);
        setformStatus(response.data);
      })
      .catch(function (error) {
        console.log(error);
        setformStatus(error.data);
      });
  };
  return (
    <div>
      <section id="abt1">
        <Container>
          <Row>
            <Col md={12}>
              <div className="py-md-5">
                <h2 className="">Contact GOE</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a as={Link} to="/">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Contact GOE
                    </li>
                  </ol>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="contact" className="py-md-5 py-3">
        <Container>
          <Row>
            <Col md={6}>
              <div className="">
                <h2 className="text-info">GOE Address</h2>
                <address className="">
                  #1, 3 rd Floor, 80 ft. Road,
                  <br />
                  Opp. George Thangiah Complex, <br />
                  Indiranagar, Bengaluru,
                  <br />
                  Karnataka 560038
                </address>
                <div className="">
                  <a href="tel:07829290299" className="text-decoration-none">
                    <i className="fab fa-whatsapp px-md-2 px-1"></i>
                    <i className="fas fa-phone-volume px-md-2 px-1"></i> +91
                    78292 90299
                  </a>
                  <br />
                  <a href="tel:09513332386" className="text-decoration-none">
                    <i className="fab fa-whatsapp px-md-2 px-1"></i>
                    <i className="fas fa-phone-volume px-md-2 px-1"></i> +91
                    95133 32386
                  </a>
                </div>
              </div>
              <div className="">
                <div className="py-md-1 text-center text-md-start">
                  <a
                    href="https://www.facebook.com/glowoverseaseducation"
                    target="_blank"
                    className="px-md-2 px-1"
                  >
                    <i className="fab fa-facebook-f me-1"></i>
                  </a>
                  <a
                    href="https://twitter.com/GlowOverseas"
                    target="_blank"
                    className="px-md-2 px-1"
                  >
                    <i className="fab fa-twitter me-1"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCjYolwMMKKnzceHVQnJnmSQ"
                    target="_blank"
                    className="px-md-2 px-1"
                  >
                    <i className="fab fa-youtube me-1"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/glowoverseaseducation/"
                    target="_blank"
                    className="px-md-2 px-1"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  <Form className="p-3 shadow bg-white ">
                    <h2 className="text-center text-info py-3">
                      Get in Touch with us
                    </h2>
                    <Row className="mb-3">
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
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">
                            Name*
                          </label>
                          <Field
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                          />
                          <small className="text-danger">
                            <ErrorMessage name="name" />
                          </small>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col md={12}>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">
                            Email*
                          </label>
                          <Field
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                          />
                          <small className="text-danger">
                            <ErrorMessage name="email" />
                          </small>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col md={12}>
                        <div className="mb-3">
                          <label htmlFor="phone" className="form-label">
                            Phone No*
                          </label>
                          <Field
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                          />
                          <small className="text-danger">
                            <ErrorMessage name="phone" />
                          </small>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col md={12}>
                        <div className="mb-3">
                          <label htmlFor="text-area" className="form-label">
                            Your Message*
                          </label>
                          <Field
                            type="text-area"
                            className="form-control"
                            id="message"
                            name="message"
                            rows={3}
                          />
                          <small className="text-danger">
                            <ErrorMessage name="message" />
                          </small>
                        </div>
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Col md={10}>
                        <div className="">
                          <Button
                            className="custom-btn btn-primary"
                            type="submit"
                          >
                            Submit
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </Formik>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8356268504253!2d77.64344891409009!3d12.982363018156411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17bfb44dc0e7%3A0xc69546f727c8c1ec!2sGlow%20Overseas%20Education!5e0!3m2!1sen!2sin!4v1658097005806!5m2!1sen!2sin"
          width="100%"
          height="450"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
