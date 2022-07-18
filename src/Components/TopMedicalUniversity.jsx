import React from 'react'
import { Container, Row, Col, Image, Button, Form } from "react-bootstrap";

const TopMedicalUniversity = () => {
  return (
    <>
    <section id="abt1">
        <Container>
            <Row>
                <Col md={12}>
                    <div className="py-md-5">
                        <h2>Top Medical Universities</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                              <li className="breadcrumb-item"><a as={Link} to="/">Home</a></li>
                              <li className="breadcrumb-item active" aria-current="page">Top Medical Universities</li>
                            </ol>
                          </nav>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>  


    <section id="country" className="py-md-5">
        <Container fluid>
            <Row>
                <Col md={8}>
                    <Container>
                        <div className="top-university">
                            <Row className="m-2">
                                <Col md={12}>
                                    <p className="text-justify py-md-2">
                                        Here you will get all the Medical Universities of USA, Ukraine, Georgia, Kyrgyzstan, Poland, Kazakhstan, Russia, Philippines. We are all known that almost 80% of Indian Medical Students are interested to complete there MBBS dream.
                                    </p>
                                    <p className="text-justify py-md-2">
                                        Get all the Medical University list with there fees structure. Feel Free to contact us for free counselling and also we will clear your all the doubts regarding MBBS in Abroad.
                                    </p>
                                    <p className="text-justify py-md-2">
                                        Top Medical Universities to Study MBBS in USA, MBBS in Ukraine, MBBS in Kyrgyzstan, MBBS in Georgia, MBBS in Russia and MBBS in Philippines. Glow Overseas Education recommends the below Mentioned Medical Universities to study MBBS in Abroad.
                                    </p>
                                    <div className="text-center">
                                        {/* <?php include 'templates/university-free-councelling' ?> */}
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="medical-university">
                            <Row className="m-2">
                                <Col md={12}>
                                    <h2>Top Medical Universities in USA</h2>
                                    <table className="table table-hover table-bordered">
                                    <thead>
                                        <tr>
                                        <th scope="col" className="text-center text-md-left">University Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td scope="row">American University of Barbados <br /> Duration: 9years</td>
                                        </tr>
                                        <tr>
                                        <td scope="row">Spartan University of Health and Science</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">
                                            <div className="text-center">
                                                {/* <?php include "templates/university-book-now"?>  */}
                                            </div>
                                        </th>
                                        </tr>
                                    </tbody>
                                    </table>
                                </Col >
                            </Row>
                        </div>
                        <div className="medical-university">
                            <div className="row m-2">
                                <div className="col-md-12">
                                    <h2>Top Medical Universities in Ukraine</h2>
                                    <table className="table table-hover table-bordered">
                                    <thead>
                                        <tr>
                                        <th scope="col" className="text-center text-md-left">University Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td scope="row">American University of Barbados <br /> Duration: 9years</td>
                                        </tr>
                                        <tr>
                                        <td scope="row">Spartan University of Health and Science</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">
                                            <div className="text-center">
                                                {/* <?php include "templates/university-book-now"?>  */}
                                            </div>
                                        </th>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Col>
                <Col md={4}>
                    <div className="bord-1">
                        <div id="four" className="pb-5">
                            <Container>
                                <Row>
                                    <Col md={12}>
                                        <h3 className="text-center py-md-3">Choose Your University</h3>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <div className="">
                                            <Form action="">
                                                <div className="form-group">
                                                    {/* <!-- <label for="selectbox">Enter Select Your Country</label> --> */}
                                                    <select className="form-control" id="selectbox" name="" onchange="mylang(this.value)">
                                                      <option value="">Select Your Country</option>
                                                      <option>MBBS in USA</option>
                                                        <option>MBBS in Kyrgyzstan</option>
                                                        <option>MBBS in Georgia</option>
                                                        <option>MBBS in Poland</option>
                                                        <option>MBBS in Philippines</option>
                                                        <option>MBBS in Russia</option>
                                                        <option>MBBS in China</option>
                                                        <option>MBBS in Kazakhstan</option>
                                                    </select>
                                                  </div>
                                            </Form>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <div className="col-md-">
                                            <Form action="">
                                                <div className="form-group">
                                                    {/* <!-- <label for="selectbox1">University in?</label> --> */}
                                                    <select className="form-control" id="selectbox1" name="" onchange="getSelectedValue();">
                                                      <option value="">University Lists</option>
                                                      
                                                    </select>
                                                  </div>
                                            </Form>
                                        </div>
                                    </Col >
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <div className="text-center">
                                            <Form action="">
                                                <a className="btn custom-btn-1" onclick="redirect_url()">Get University Details.</a>
                                            </Form>
                                        </div>
                                    </Col >
                                </Row>
                            </Container>
                         </div>
                        {/* <?php include 'templates/sidebar-country-top-medical-university' ?> */}
                    </div>
                </Col>
            </Row>
        </Container>
    </section>

    <section id="social" className="py-md-5">
        <Container>
            <Row className="justify-content-center">
                <Col md={2}></Col>
                <Col md={8}>
                    <div className="">
                        <h2 className="text-center pt-2 pb-2">Social Connect</h2>
                        <div className="text-center pt-3 pb-3">
                            <a as={Link} to="https://www.facebook.com/glowoverseaseducation" target="_blank"><i className="fab fa-facebook-f icons"></i></a> &nbsp;
                            <a as={Link} to="https://twitter.com/GlowOverseas" target="_blank"><i className="fab fa-twitter icons"></i></a> &nbsp;
                            <a as={Link} to="https://www.youtube.com/channel/UCjYolwMMKKnzceHVQnJnmSQ" target="_blank"><i className="fab fa-youtube icons"></i></a> &nbsp;
                            <a as={Link} to="https://www.instagram.com/glowoverseaseducation/" target="_blank"><i className="fab fa-instagram icons"></i></a>
                        </div>
                    </div>
                </Col>
                <Col md={2}></Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default TopMedicalUniversity