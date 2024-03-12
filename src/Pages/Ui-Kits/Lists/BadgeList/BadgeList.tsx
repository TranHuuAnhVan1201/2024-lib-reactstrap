import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Numberedbadgelists } from "../../../../utils/Constant";
import { badgeListData } from "../../../../Data/Ui-Kits/ListsData";
import CommonHeader from "../../../../Common/CommonHeader";

const BadgeList = () => {
  const submenuObj = [
    {
      text: "Use the",
      code: " .list-group-numbered",
    },
    {
      text: " modifier class to  numbered list group items.Numbers are generated via CSS for better placement inside list group items.",
    },
  ];
  return (
    <Col xxl={4} md={6}>
      <Card>
        <CommonHeader title={Numberedbadgelists} subTitle={submenuObj} headClass="pb-0"/>
        <CardBody>
          <ListGroup className="list-group-numbered">
            <ListGroupItem className="d-flex justify-content-between align-items-start flex-wrap" >
              <div className="ms-2 me-auto">{'Stella Nowland'}</div>
              <span className={`badge bg-warning rounded-pill p-2`}>
                {'Freelance'}
              </span>
            </ListGroupItem>
            {badgeListData &&
              badgeListData.map((item, index) => (
                <ListGroupItem className="d-flex justify-content-between align-items-start" key={index} >
                  <div className="ms-2 me-auto">{item.text}</div>
                  <span className={`badge ${item.badgeClass} rounded-pill p-2`}>
                    {item.badgeText}
                  </span>
                </ListGroupItem>
              ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BadgeList;
