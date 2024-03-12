import { Button, Card, CardBody } from "reactstrap";
import CommonCardHeading from "../CommonButtons/CommonCardHeading";
import { ButtonHeading, CustomButtons, CustomButtonsSpan, Href, Inputs, Links, Submit } from "../../../utils/Constant";
import { Link } from "react-router-dom";
import CommonButtonsToolTip from "../CommonButtons/CommonButtonsToolTip";

const CustomStateButtons = ({classData}:any) => {
  return (
    <Card>
      <CommonCardHeading smallHeading={CustomButtons} span={CustomButtonsSpan} />
      <CardBody>
        <div className="btn-showcase">
            <Link className={`btn btn-primary ${classData ? classData : ""}`} id="TooltipExample" to={Href}>{Links}</Link>
            <CommonButtonsToolTip id="TooltipExample" toolTipText="link" />
            <Link className={`btn btn-secondary ${classData ? classData : ""}`} id="input1" to={Href}>{Inputs}</Link>
            <CommonButtonsToolTip id="input1" toolTipText="input" />
            <Link className={`btn btn-success ${classData ? classData : ""}`} id="submit1" to={Href}>{Submit}</Link>
            <CommonButtonsToolTip id="submit1" toolTipText="submit" />
            <Button color="info" className={classData ? classData : ""} id="buttonSubmit" type="submit">{ButtonHeading}</Button>
            <CommonButtonsToolTip id="buttonSubmit" toolTipText="buttonSubmit" />
        </div>
      </CardBody>
    </Card>
  );
};

export default CustomStateButtons;
