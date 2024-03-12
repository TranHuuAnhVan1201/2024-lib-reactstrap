import { Col, Row } from "reactstrap";
import { offsetBodyData } from "../../../../Data/Ui-Kits/GridData";

const OffsetBody = () => {
  return (
    <Row className="g-2">
      {offsetBodyData &&
        offsetBodyData.map((item, index) => (
          <Col className={item.class} key={index}>
            <span>{item.text}</span>
          </Col>
        ))}
    </Row>
  );
};

export default OffsetBody;
