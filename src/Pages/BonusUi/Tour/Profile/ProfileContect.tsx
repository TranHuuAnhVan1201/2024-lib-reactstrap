import { Col, Row } from "reactstrap";
import { ContactUs, Contactno, LibbyStreet, Location } from "../../../../utils/Constant";
import { H6 } from "../../../../AbstractElements";

const ProfileContect = () => {
  return (
    <Col sm={6} xl={4} className="order-sm-2 order-xl-2">
      <Row className="g-3">
        <Col md={6} className="mt-0 mt-sm-3">
          <div className="tour-email text-start">
            <H6 className="tour-mb-space">
              <i className="fa fa-phone" />
              &nbsp;&nbsp;&nbsp;{ContactUs}
            </H6>
            <span>{Contactno}</span>
          </div>
        </Col>
        <Col md={6}>
          <div className="tour-email text-start">
            <H6 className="tour-mb-space">
              <i className="fa fa-location-arrow" />
              &nbsp;&nbsp;&nbsp;{Location}
            </H6>
            <span>{LibbyStreet}</span>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default ProfileContect;
