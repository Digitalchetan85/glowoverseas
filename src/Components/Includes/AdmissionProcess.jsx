import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Admission from '../../Images/admission-process.png'

const AdmissionProcess = () => {
  return (
    <section id="admission" className="py-md-5">
        <Container>
          <Row>
            <Col className="col-md-12">
              <div className="">
                <h2 className="text-center text-info">Admission Process</h2>
              </div>
              <div className="text-center">
                <Image src={Admission} alt="" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  )
}

export default AdmissionProcess