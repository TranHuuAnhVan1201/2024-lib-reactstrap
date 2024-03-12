import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { MaterialStyleTabs } from "../../../../utils/Constant";
import TabContentMaterial from "./TabContentMaterial";

const MaterialStyle = () => {
  const [basicTab, setBasicTab] = useState("1");
  const submenuObj = [
    {
      text: "Use the ",
      code: ".nav-link ",
    },
    {
      text: "with ",
      code: ".active ",
    },
    {
      text: "class through access new tabs. And icons of design for attractive webpage.",
    },
  ];
  return (
    <Col xxl={6}>
      <Card>
        <CommonHeader title={MaterialStyleTabs} subTitle={submenuObj} headClass="pb-0"/>
        <CardBody>
          {/* <NavTabs basicTab={basicTab} setBasicTab={setBasicTab} /> */}
          <TabContentMaterial tabId={basicTab} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default MaterialStyle;
