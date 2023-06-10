import React from 'react'
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap'

const Contact = () => {
  return (
    <>
    <div class="contact-page">
        <h1>Want to contact me? Fill out the form below. </h1>
        <Form class="contact-form">
          <Row>
            <Col md={5}>
              <FormGroup floating>
              <Input
                  id="firstName"
                  name="first"
                  placeholder="First Name"
                  type="text"
                />
                <Label for="firstName">
                  First Name
                </Label>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={5}>
              <FormGroup floating>
              <Input
                  id="lastName"
                  name="last"
                  placeholder="Last Name"
                  type="text"
                />
                <Label for="lastName">
                  Last Name
                </Label>
              </FormGroup>
            </Col>
          </Row>
            <Row>
              <Col md={5}>
                <FormGroup floating>
                <Input
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="text"
                  />
                  <Label for="email">
                    Email
                  </Label>
                </FormGroup>
                </Col>
            </Row>
            <Row>
              <Col sm={5}>   
                <FormGroup floating>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      type="textarea"
                    />
                    <Label for="subject">
                      Subject
                    </Label>
                </FormGroup>
                </Col>
            </Row>
              <Button>
                Submit
              </Button>
          </Form>
      </div>
    </>
  )
}

export default Contact