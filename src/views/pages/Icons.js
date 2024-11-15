import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import icons from "variables/icons.js"

const IconGrid = () => {
  return (
    <div className='container'>
    <Row>
      {icons.map((icon,index) => (
        <Col lg={1} md={4} sm={5} xs={7} className="font-icon-list" key={index}>
          <Card>
            <CardBody className="all-icons">
              <Row>
                <Col className="font-icon-list">
                  {/* Use the index to reference icons */}
                  <i className={"tim-icons " + icon.name} />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  );
};

export default IconGrid;