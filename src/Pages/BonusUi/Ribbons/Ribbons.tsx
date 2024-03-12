import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { BonusUi, Ribbon } from "../../../utils/Constant";
import LeftSideRibbons from "./LeftSideRibbons/LeftSideRibbons";
import RightSideRibbon from "./RightSideRibbon/RightSideRibbon";

const Ribbons = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Ribbon} parent={BonusUi} title={Ribbon} />
      <Container fluid>
        <Row>
          <LeftSideRibbons />
          <RightSideRibbon />
        </Row>
      </Container>
    </>
  );
};

export default Ribbons;
